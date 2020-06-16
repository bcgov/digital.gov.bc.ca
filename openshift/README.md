## Building and Deploying

The build and deploy are controlled by ansible play books


## The workflow

The workflow is a hybrid between Github and git flow. The ansible playbooks allow developers to build and deploy their PR's to Dev and then subsequent playbooks will promote by retagging their images to the _git flow_ dev/test/prod instances 


## Building Images

> requires ansible

Run a build against a PR

`ansible-playbook ansible/build-react.yaml -e PR=<pr num>`

## Running Images

`ansible-playbook ansible/deploy-react.yaml -e PR=<pr num>`

## Promoting Images to Test or Production

`ansible-playbook ansible/promote-environment.yaml -e ENV=test|prod -e IMAGE_TAG=<image tag>`

If you deployed a PR, then the image tag will follow the pattern `pr-<pr num>`.

If you want to see what image tags are available to promote you can run 

`oc -n xdwidw-tools get imagestreamtag`