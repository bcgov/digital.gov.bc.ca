## Building and Deploying

The build and deploy are controlled by ansible play books

### Dependancies

- ansible 2.9.10
- Python 2.7.16 (newer versions work but may have unexpected errors when it comes to processing openshift templates)
  - pip modules: kubernetes, openshift (`pip install kubernetes openshift`)
- access to an openshift cluster
- logged into openshift
- access to multiple namespaces as defined the group vars file
- oc >= 3.11


## The workflow

The workflow is a hybrid between Github and git flow. The ansible playbooks allow developers to build and deploy their PR's to Dev and then subsequent playbooks will promote by retagging their images to the _git flow_ dev/test/prod instances 


## Available Playbooks 
### Build React
Builds the React Image from an open pull request. The Build is optimized to not retrigger builds of the buildconfig `git commit` matches the PR `head commit`. This is so that this script may be utilized in a ci/cd pipeline. The build also checks that the PR is raised by a valid user (one of the collaborators on the repo).

Options: 
- `PR` <number> this should be an open Pull Request number
- `GITHUB_TOKEN` <string> a token that has permissions to query for repo collaborators
 
Usage:

`ansible-playbook build-react.yaml -e PR=<pr num> -e GITHUB_TOKEN=<secret>`


### Deploy React

Deploys the react image to the development namespace. It will also check to see if the PR based image exists prior to building. 

Options:
- `PR` <number> this should be the open pull request number

Usage:
`ansible-playbook deploy-strapi.yaml -e PR=<pr num>`

### Build Strapi

Builds the Strapi Image from an open pull request. The Build is optimized to not retrigger builds of the buildconfig `git commit` matches the PR `head commit`. This is so that this script may be utilized in a ci/cd pipeline. 

Options: 
- `PR` <number> this should be an open Pull Request number
- `force_build` <boolean> (defaults to `false`) skip checking if previous build commit matches current head commit in PR 

Usage:

`ansible-playbook build-strapi.yaml -e PR=<pr num>`


### Deploy Strapi

Deploys the strapi image to the development namespace. It will also check to see if the PR based image exists prior to building. 

Options:
- `PR` <number> this should be the open pull request number

Usage:
`ansible-playbook deploy-strapi.yaml -e PR=<pr num>`

### Deploy Mongo

Deploys a mongo replica set that is annoted with the PR number. This is because the mongo datbase should always be coupled with a strapi deployment. 

Options:
- `PR` <number> this should be the open pull request number

Usage:
`ansible-playbook deploy-mongo.yaml -e PR=<pr num>`

### Create Github Deployment
> currently this only creates deployments for the react app and is best utilized by our custom github action

Creates a github deployment for a PR. 

Options:
- `PR` <number> this should be the open pull request number
- `ENV` <string> (dev|test|prod) used to create the github deployment in a specific environment
- `OPENSHIFT_SERVER_URL` <string> the uri to the cluster 
- `GITHUB_TOKEN` <string> a token that has permissions to create github deployments/statuses

Usage:

`ansible-playbook ansible/create-gh-deployment.yaml -e PR=5 -e ENV=dev -e GITHUB_TOKEN=<secret> -e OPENSHIFT_SERVER_URL=https://console..`

### Promote Environment
> this currently is only configured to promote our react based deployments. It is not ready to promote mongo/strapi deployments

Promotes a React PR to the test and production namespaces. This is done by Importing the dev image into the respective namespaces and triggering a rollout. 

Current workflow is to base this on a PR from develop branch to the master branch. Complete the merge of code once the deployment is complete.

Options:
- `IMAGE_TAG` <string> This is the image tag in the tools namespace's digital-gov-frontend image stream.
- `ENV` <string> (test|prod) used to create the github deployment in a specific environment

Usage:
`ansible-playbook ansible/promote-environment.yaml -e ENV=test|prod -e IMAGE_TAG=<image tag>`

### Backup and Restore Mongo
Create a pod in Openshift to perform a back and restore process. This will target a specific mongo stateful set for the backup. And attempt to restore it with the backup pod as verification. 

Options:
- `PR` <number> this should be the open pull request number

Usage:
`ansible-playbook backup-restore-mongo.yaml -e PR=<pr num>`


### Clean up the pods deployed in dev.
When a PR is closed and the pods are no longer being used they can be deleted. Run this playbook in the ansible folder

Options:
- `PR` <number> this should be the open pull request number

Usage:
`ansible-playbook clean_up_react_deployment.yaml -e PR=<pr num>`


### Deploying Code to Test and Prod environments
The code can be deployed to test or prod through a PR created from develop to master using  Manual Workflows 
 
# Instructions to deploy to Test or Prod
- Click on **Actions** in Github
- On the left side under All Workflows, select **Deploy React to Test/Prod**
- On the right side click on **Run Workflow**, fill the parameters required as follows:
  - **Branch**: this sholud be "develop"
  - **Pull Request Number**: The number of the PR that you want to merge to master
  - **Deploy environment**: The environment you want to promote the code to ie Test or Prod. 
    Note: The code should always be promoted to test before promoting to prod.


# Running Zapscan
ZAPSCAN is an open-source web application security scanner. Zapscan can be run against any environment dev, test or prod using the Manual Workflow. Zapscan can be a baseline scan or a full scan. 

### Baseline
 In case of baseline scan, ZAP spider against the specified target for (by default) 1 minute and then waits for the passive scanning to complete before reporting the results.This means that the script doesn't perform any actual ‘attacks’ and will run for a relatively short period of time (a few minutes at most).

### Fullscan
It runs the ZAP spider against the specified target (by default with no time limit) followed by an optional ajax spider scan and then a full active scan before reporting the results.
This means that the script does perform actual ‘attacks’ and can potentially run for a long period of time.

### Instructions for running Zapscan
- Click on **Actions** in Github
- On the left side under All Workflows, select **run Zap Scan**
- On the right side click on **Run Workflow**, fill the parameters required as follows:
  - Branch: develop
  - Pull request number: The number of the PR. It is required if you are running the zapscan workflow against dev environment. For test and prod environments it is not required.
  - Deploy environment: dev, test or prod
  - Zap scan type: base or full
  
