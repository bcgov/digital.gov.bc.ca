## Building and Deploying

The build and deploy are controlled by ansible play books


## The workflow

The workflow is a hybrid between Github and git flow. The ansible playbooks allow developers to build and deploy their PR's to Dev and then subsequent playbooks will promote by retagging their images to the _git flow_ dev/test/prod instances 


## Building Images

> requires ansible

Run a build against a PR

`ansible-playbook ansible/build-react.yaml -e PR=<pr num>`

## Running Images

`ansible-playbook ansible-deploy-react.yaml -e PR=<pr num>`