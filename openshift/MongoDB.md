# MongoDB for Digital Gov

## What is MongoDB

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data. MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.

## MongoDB StatefulSet

MongoDB is set up in a StatefulSet which takes care of deploying the pods and provisioning and connecting storage. The StatefulSet will deploy one pod at a time and configure it's storage before moving to the next. StatefulSets keep pod names when pods get recreated and use PVCs and PVs for data, making sure restarting pods will remain "stateful" and not lose data.

## DB Storage

PVCs are requested for each MongoDB pod to store database files. The PVCs are set to use the StorageClass defined in with the parameter in the template and request RWO access.

## MongoDB Services 

MongoDB runs as two services

* The mongoDB service on `port 27017` handles traffic to the monogoDB pods
* The mongoDB-internal service on `port 27017` handles traffic between the mongoDB pods for cluster communication. This service is headless, no clusterIP.


## MongoDB Backup & Restore

#### Backup Volume

We need some storage that we can dump the database backup to. Using the gluster-block gives us an easy option to get a PVC mapped to our project. This storage lives outside the MongoDB cluster which is ideal for back up. 

#### Backup CronJob

Once we have a PVC in our project we can deploy the CronJob template that will schedule a job to run at a defined interval that will start a MongoDB pod and run `monogdump` against the MongoDB service and dump the backup files to the PVC.

```
oc process -f template-mongodb-backup.yaml MONGODB_ADMIN_PASSWORD=adminpass MONGODB_BACKUP_VOLUME_CLAIM=nfs-pvc MONGODB_BACKUP_KEEP=24 MONGODB_BACKUP_SCHEDULE='50 * * * *' | oc create -f -
```

#### Restore Backup

You can deploy new mongo pods using the standard deployment openshift commands or use an existing mongo deployment to restore a backup into. The prerequisite is that there is a mongo db dump directory from a mongodump. If your deploying a new app it is easiest to deploy the mongo template, restore the db, then deploy the app template.

1. Fire up a pod in the same namespaces of the backup pvc and mount that pvc.
    ```shell
    # start a job to do a fresh db dump:
    oc create job --from cronjob/mongodb-backup mongodb-backup-<timestamp>-migration

    # Setup the ref for mongo that match the existing
    export MONGO_IMAGE_REF=docker-registry.default.svc:5000/openshift/mongodb:3.6

    # Specify the PVC name of gluster block
    export CLAIM_NAME=bk-xxxxxx

    oc run mongo-restore-pod --overrides=' { "spec": { "containers": [ { "command": [ "/bin/sh", "-c", "for i in $(seq 1 999); do echo $i; sleep 5; done" ], "name": "mongo-restore-pod", "image": "'"${MONGO_IMAGE_REF}"'", "volumeMounts": [{ "mountPath": "/var/data", "name": "data" }] } ],"volumes": [ { "name": "data", "persistentVolumeClaim": { "claimName": "'"${CLAIM_NAME}"'" } } ] } } ' --image=notused --restart=Never 
    ```
2. Pick the backup with timestamp at `/var/data` and copy the restore directory locally.
    ```
    oc rsync mongo-restore-pod:/var/data/dump-2020-02-18-08-01-18/ ./mongo-digitalgov-bak
    ```
3. Copy that directory to the destination mongo pod which may be in a different namespace or cluster.
    ```
    oc -n <new-namespace> rsync ./mongo-digitalgov-bak/ mongodb-0:/tmp/backup
    ```
4. `oc rsh` into the mongo pods.
5. Restore the backup files to the mongo server
    ```shell
    # Use the mongo url available in the mongo pod already:
    mongorestore --uri=$MONGO_OPLOG_URL /tmp/backup --gzip
    
    # The restore process may take a while depending on the size of the backup.
    # Once the restore is done for the local mongodb, restore to the others in the replicaset:
    mongo admin -u admin -p $MONGODB_ADMIN_PASSWORD
    >
    > # get the replica hosts, and replace it in the <replica_host> below export command
    > db.isMaster() 
    > # quit the mongo admin portal
    > quit()

    # Setup the mongo replica host:
    export MONGO_REPLICA_HOST=<replica_host>
    export MONGO_REPLICA_URL="mongodb://admin:$MONGODB_ADMIN_PASSWORD@$MONGO_REPLICA_HOST/local?authSource=admin&replicaSet=rs0"
    # By default, mongorestore does not overwrite or delete any existing documents. We need to drop the original collection
    mongorestore --uri=$MONGO_REPLICA_URL /tmp/backup --gzip --drop
    
    ```
6. Test the application to verify that everything is working fine. 

