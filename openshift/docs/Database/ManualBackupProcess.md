# Creating a manual backup of the Mongo Database

If a user is doing something potentially risky, like creating a new role in the prod namespace it is a good idea to create a manual backup in case something goes wrong.  These instructions alloe them to do this safely.

## **Step 1:** Go to the terminal of any Mongo pod in Openshift 

## **Step 2:** Create a new folder and use the mongodump command to create a dump of the database.

`mkdir dumps`
`cd dumps`
`mongodump --host 127.0.0.1 --port 27017 --db digitalgov -u <username> -p <password>`

## **Step 3:** Login to openshift command prompt on your machine and select the relevant project.

`oc project c0cce6-<ENV>`


## **Step 4:** Sync the dumps folder on the pod with a local folder on your machine 

`oc rsync <location on the pod> <location on machine>`

For example to sync it with the dumps folder in the current directory:

`oc rsync mongodb-0:/opt/app-root/src/dumps ./dumps`

## **Step 5:** Log into the PRIMARY mongo db.

In the terminal of a mongo pod, run the command `mongo 127.0.0.1:27017/digitalgov -u <username> -p <password>`. If the terminal indicates it's the Primary replica continue to stem 6. If it indicates it is a Secondary replica, log out and repeat the login on a **different** pod.  Repeat until you've found the Primary pod.


## **Step 6:** Delete the old database if needed
`db.getCollectionNames().forEach(function(c) { if (c.indexOf("system.") == -1) db[c].drop(); })`

## **Step 7:** Sync the dumps folder on your local machine with new remote Mongo cluster

`oc rsync <location on machine> <location on pod>`

Make certain you are synching to the Primary pod.  `mongodb-0` may not be the primary.

## **Step 8:** Restore the Database on the new Mongo cluster.

Do this by running mongorestore command in the terminal of the Primary pod

`mongorestore --host 127.0.0.1 --port 27017 -d digitalgov --username <username> --password <password> <location on machine>`

Note the `<location on machine>` must be the location of the backup, not the folder.  In this example it's `dumps/digitalgov` and not `./dumps`.