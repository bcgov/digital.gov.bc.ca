## Building and Deploying the frontend on Openshift
Check out the [ansible docs](ansible/README.md) for all available playbooks. 

You can create builds from a PR by running `ansible-playbook ansible/build-react.yaml -e PR=<pr num>`.

This will only build for __PRs that are open__. This is to prevent the inadvertent promotion of closed or erroneous PR's.

By default, this will also only create a `Buildconfig`, however you can trigger a Deployment in the __dev namespace__. To do this run the playbook with `-e deploy=true`


## Running Images

`ansible-playbook ansible/deploy-react.yaml -e PR=<pr num>`

## Promoting Images to Test or Production

`ansible-playbook ansible/promote-environment.yaml -e ENV=test|prod -e IMAGE_TAG=<image tag>`

If you deployed a PR, then the image tag will follow the pattern `pr-<pr num>`.

If you want to see what image tags are available to promote you can run 

`oc -n xdwidw-tools get imagestreamtag`


The promotion strategy is to retag an image from tools namespace and stick it into test or prod namespaces with the `test` or `prod` tags respectively

## Rolling Back to a Stable PR

> Warning!! This may not work if there have been stateful configuration changes to things like databases!

As a bailout you can build and deploy a dev instance of a PR. This is essentially the `build-react` script
minus the preflight checks

run `ansible-playbook ansible/rollback-react.yaml -e PR=<>`

