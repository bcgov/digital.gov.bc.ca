## Building and Deploying Strapi/Mongo on Openshift

Check out the [ansible docs](ansible/README.md) for all available playbooks. 

To build and deploy strapi perform these steps:

1. Open a PR (take note of PR num)
2. Build Strapi using the `build-strapi.yaml` playbook
3. Run the `deploy-mongo.yaml` playbook 
> verify mongo pod is ready prior to running next playbook
4. Run the `deploy-strapi.yaml` playbook when image is available and mongo is ready


### Structure

![architecture](./architecture.png)


## Operational Plan

The operational plan describes the process for backing up and testing a restore of the mongo replicaset. 

![backup](./backup.png)


### Thought Process

The backup restore process is totally new to me and was indeed a big learning point. My mantra was

`make it simple -> make it work -> make it right -> make it better`

I comfortably covered up to `make it work`. My hope is to transfer the pod template into a cron job. This would require modification of the backup playbook to not delete the pod as a final task. 



### Performing a Strapi Upgrade

1. Rebuild Strapi Image to latest version based off the build playbook *
2. Perform Backup and Restore check of database *
3. Redeploy Strapi and Mongo *
4. Verify readiness and health of both services
5. If Mongo is unhealthy scale both services down
6. Restore Mongo
7. Bring back up Mongo and Strapi and verify again

> *  means playbooks exist, a missing * means a playbook needs to be written for these steps

#### Reducing Service Disruption

There are two ways that I'd reduce service disruption

1. Perform upgrades outside of business hours
2. Perform a blue-green deployment (this would be preferred)


## Todos

- combine strapi and mongo playbooks together
- add readiness checks to strapi
