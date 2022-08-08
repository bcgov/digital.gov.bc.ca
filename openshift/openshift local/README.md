# Contents
- [Running in OpenShift Local](#running-in-openshift-local)
- [Troubleshooting](#troubleshooting)
  * [Certifacte expired error](#certifacte-expired-error)
  * [Check all operators are up and running](#check-all-operators-are-up-and-running)
- [BUILDING REACT-FRONTEND](#building-react-frontend)
  * [Building react-frontend in OpenShift Local](#building-react-frontend-in-openshift-local)
  * [Deploying react-frontend in Openshift Local](#deploying-react-frontend-in-openshift-local)
  * [Debugging site going down on re-deployment](#debugging-site-going-down-on-re-deployment)
- [Useful commands](#useful-commands)

## Running in OpenShift Local

Make sure OpenShift local is running (with debug output if needed):

`crc start --log-level debug`

If memory allocation error pops up, do not reduce memory consumption of the image via hyper-v (windows). if the VM has insufficient memory, OpenShift Local may not start properly.

Check status:

`crc status`

It should return something like
```
  CRC VM:          Running
  OpenShift:       Running (v4.10.22)
  Podman:
  Disk Usage:      15.42GB of 32.74GB (Inside the CRC VM)
  Cache Usage:     18.42GB
  Cache Directory: xxxx\.crc\cache
```

If the status is not "running", things will not work properly down the road.

Check config:

`crc config view`

Open web console:

`crc console`

View credentials for kubeadmin (developer password is 'developer')

`crc console --credentials`

Activate oc command provided with OpenShift Local (external may cause issues), run commands outputted by command:

`crc oc-env`

Login using OC command:

`oc login -u developer https://api.crc.testing:6443`

## Troubleshooting

### Certifacte expired error
In case of Certificate expired error, run
crc start -n 1.1.1.1 --log-level debug

### Check all operators are up and running
To check status of operators (had issue with "image-registry" not running):

`oc get clusteroperator`

If image-registry or something else not running, nuke everything and restart the process. Restart machine as well.

## BUILDING REACT-FRONTEND
Chain of files and steps taken within the project to build react-frontend:

- deploy-react-to-test-prod.yaml GitHub action runs, lines of interest:
```
- name: login to oc client
    run: ansible-playbook ansible/oc-login.yaml -e OPENSHIFT_SERVER_URL=${{ secrets.OPENSHIFT_SERVER_URL_OC4 }} -e CICD_SA_ACCOUNT_TOKEN=${{ secrets.CICD_SA_ACCOUNT_TOKEN_OC4 }}
- name: build react app
    run: ansible-playbook ansible/build-react-for-test-prod.yaml -e PR=$PULL_NUMBER -e ENV=$ENV -e GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }} -v
- name: deploy react app
    run: ansible-playbook ansible/deploy-react-to-test-prod.yaml -e PR=$PULL_NUMBER -e ENV=$ENV -v
- name: create github deployment to test/prod
    run: ansible-playbook ansible/create-gh-deployment.yaml -e PR=$PULL_NUMBER -e ENV=$ENV -e GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }} -e OPENSHIFT_SERVER_URL=${{ secrets.OPENSHIFT_SERVER_URL_OC4 }} -v
```

- ansible/build-react-for-test-prod.yaml, runs:
```
---
  - hosts: localhost
    gather_facts: no
    vars:
      dev_image_tag: "{{ lookup('template', './templates/pr_tag.j2') }}"
      image_namespace: "{{ tools_namespace }}"
      gh_env: "{{ github_environments[ENV] }}"
      namespace: "{% if 'prod' in gh_env %}{{ prod_namespace }}{% elif 'test' in gh_env %}{{ test_namespace }}{% elif 'dev' in gh_env %}{{ dev_namespace }}{% endif %}"
      # in test and prod namespaces they only house one tag: prod | test
      new_image_tag: "{% if 'prod' in gh_env %}{{ prod_image_tag }}{% elif 'test' in gh_env %}{{ test_image_tag }}{% elif 'dev' in gh_env %}{{ dev_image_tag }}{% endif %}"
      suffix: "{{ new_image_tag }}"
      version: "{{ new_image_tag }}"
      infra_name: "{{ react_infra_name }}"
    tasks:
      - name: Pre checks
        include_tasks: ./tasks/check_pr_exists.yaml

      - name: Check if valid author
        include_tasks: ./tasks/check_if_valid_pr_author.yaml

      - name: Check if should build 
        include_tasks: ./tasks/check_if_should_build.yaml
        when: is_valid_author

      - debug:
          msg:
            - not rebuilding react project, the commits match
        when: not should_build

      - name: Build React Project
        include_tasks: ./tasks/build_react.yaml
        when: 
          - should_build
          - is_valid_author

      - name: Wait for build to complete
        include_tasks: ./tasks/wait_for_build_to_complete_react.yaml

```

- ansible/tasks/build_react.yaml, runs BUILD CONFIG:
```
  - name: create build in tools namespace using head/pulls/{{ PR }} as ref 
    shell: >
      oc process -n "{{ tools_namespace }}" -f "../openshift/templates/react-frontend/bc.yaml" {{ build_params }} | 
      oc apply -n "{{ tools_namespace }}" -f -
    vars:
      GIT_REF: 'pull/{{ PR }}/head'
      build_params: "{{ lookup('template', './templates/build_react.param.j2') }}"
  - name: cancel any existing builds {{ react_infra_name }}-{{ version }}
    shell: oc -n "{{ tools_namespace }}" cancel-build bc/{{ react_infra_name }}-{{ version }}
  - name: start build {{ react_infra_name }}-{{ version }}
    shell: oc -n "{{ tools_namespace }}" start-build {{ react_infra_name }}-{{ version }} --follow=true

```

### Building react-frontend in OpenShift Local

Assuming we're logged in (using `oc login`) and tools namespace was created with name "c0cce6-tools" (can be done through web console)

First thing we need to run is BuildConfig:

`oc process -n "{{ tools_namespace }}" -f "../openshift/templates/react-frontend/bc.yaml" {{ build_params }} | 
      oc apply -n "{{ tools_namespace }}" -f -`

becomes:

`oc process -n "c0cce6-tools" -f "openshift/templates/react-frontend/bc.yaml" -p IMAGE_TAG={{ version }} 
-p GIT_REF={{ GIT_REF }} -p NAME={{ react_infra_name }} -p SUFFIX={{ version }} -p GIT_REPO=https://github.com/bcgov/digital.gov.bc.ca  -p PULL_REQUEST_NUMBER={{ PR }}  | oc apply -n "c0cce6-tools" -f -`

becomes:

`oc process -n "c0cce6-tools" -f "openshift/templates/react-frontend/bc.yaml" -p IMAGE_TAG=prod -p GIT_REF=pull/1077/head -p NAME=digital-gov-frontend -p SUFFIX=prod -p GIT_REPO=https://github.com/bcgov/digital.gov.bc.ca  -p PULL_REQUEST_NUMBER=1077  | oc apply -n "c0cce6-tools" -f -`

this should output:

```
buildconfig.build.openshift.io/digital-gov-frontend-prod created
imagestream.image.openshift.io/digital-gov-frontend created
```


then we need to run (as described in caddy-deployment.md file in docs/openshift):

`oc process -n c0cce6-tools -f openshift/s2i-caddy-nodejs-2.4.5/openshift/templates/build.yaml -p GIT_REPO_URL=https://github.com/bcgov/digital.gov.bc.ca -p SOURCE_CONTEXT_DIR=openshift/s2i-caddy-nodejs-2.4.5 -p GIT_REF=develop -p OUTPUT_IMAGE_TAG=2.4.5 | oc apply -f -`

we should get:

```
imagestream.image.openshift.io/caddy-s2i-builder created
buildconfig.build.openshift.io/caddy-s2i-builder created
```


from https://github.com/bcgov/s2i-caddy-nodejs (input your redhat credentials):

`oc create secret docker-registry rh-registry --docker-server=registry.redhat.io  --docker-username=<USERNAME> --docker-password=<PASSWORD> --docker-email=unused`

then

`oc set build-secret --pull bc/caddy-s2i-builder rh-registry`

then 

`oc start-build bc/caddy-s2i-builder --follow`

now we can start the build:

`oc -n "{{ tools_namespace }}" start-build {{ react_infra_name }}-{{ version }} --follow=true`

becomes

`oc -n "c0cce6-tools" start-build digital-gov-frontend-prod --follow=true`

Check status of build:

`oc describe build digital-gov-frontend-prod`

May get "insufficient memory", update build config to requisite fewer resources (can be done via web ui)

### Deploying react-frontend in Openshift Local

Assuming above step completed (react-frontend image has been built), we can now deploy it:

`.github/workflows/deploy-react-to-test-prod.yaml` has:

```
- name: deploy react app
  run: ansible-playbook ansible/deploy-react-to-test-prod.yaml -e PR=$PULL_NUMBER -e ENV=$ENV -v
```

'deploy-react-to-test-prod.yaml' has these tasks:

```
tasks:
  - name: check images
    include_tasks: ./tasks/check_image_exists-test-prod.yaml
  - name: Deploying to test/prod
    include_tasks: ./tasks/deploy_react_test_prod.yaml
```

`./tasks/check_image_exists-test-prod.yaml` checks for image like this:
```
set_fact: 
  imagestreamtag: "{{ lookup('k8s', kind='ImageStreamTag', namespace=image_namespace, resource_name=react_infra_name + ':' + version) }}"
```

becomes:
```
set_fact: 
  imagestreamtag: "{{ lookup('k8s', kind='ImageStreamTag', namespace=c0cce6-tools, resource_name=digital-gov-frontend:prod) }}"
```

so to check that we have `digital-gov-frontend:prod` image stream tag in `c0cce6-tools`:

```
oc project c0cce6-tools
oc describe istag/digital-gov-frontend:prod
```

above should return a description of the image, now for deployment config..

`deploy_react_test_prod.yaml` has:

```
oc process -n "{{ namespace }}" -f "../openshift/templates/react-frontend/dc.yaml" {{ deploy_params }} | 
      oc apply -n "{{ namespace }}" -f -
```

this becomes:

`oc process -n "c0cce6-prod" -f "../openshift/templates/react-frontend/dc.yaml" -p NAME={{ react_infra_name }}  -p IMAGE_NAMESPACE={{ image_namespace }} -p IMAGE_STREAM={{ react_infra_name }} -p IMAGE_TAG={{ version }} -p SUFFIX={{ suffix }} -p PULL_REQUEST_NUMBER={{ PR }} -p NAMESPACE={{ namespace }} -p ENV={{ ENV }} | oc apply -n "c0cce6-prod" -f -`

becomes:

`oc process -n "c0cce6-prod" -f "openshift/templates/react-frontend/dc.yaml" -p NAME=digital-gov-frontend  -p IMAGE_NAMESPACE=c0cce6-tools -p IMAGE_STREAM=digital-gov-frontend -p IMAGE_TAG=prod -p SUFFIX=prod -p PULL_REQUEST_NUMBER=1077 -p NAMESPACE=c0cce6-prod -p ENV=prod | oc apply -n "c0cce6-prod" -f -`

should output:
```
deploymentconfig.apps.openshift.io/digital-gov-frontend-prod created
configmap/caddyfile-prod created
configmap/strapi-config-prod created
service/digital-gov-frontend-prod created
route.route.openshift.io/digital-gov-frontend-prod created
```

DeploymentConfig may not automatically trigger to deploy, to do so manually:

`oc rollout latest dc/digital-gov-frontend-prod`

This may produce an error, indicating that authentication access is missing when trying to access image registry across namespaces (we are building in c0cce6-prod, but image is in c0cce6-tools). We need to allow access across projects.

Solution 1 (Not tested, from here - https://edwin.baculsoft.com/2021/02/how-to-solve-openshift-failed-to-pull-image-unauthorized-authentication-required/):
- Run command like this (replace relevant fields)

  `oc policy add-role-to-user system:image-puller system:serviceaccount:xyz-project:default -n abc-project`

Solution 2 (Tested):
- Run `oc edit image.config.openshift.io/cluster`
- Make spec section like this (added entry to containerRuntimeSearchRegistries):
  ```
  spec:
    additionalTrustedCA:
      name: registry-certs
    registrySources:
      containerRuntimeSearchRegistries:
      - image-registry.openshift-image-registry.svc:5000
  ```
- Run these commands (from here: https://access.redhat.com/solutions/6964710):
  ```
  $ oc debug node/$(oc get node | grep master | head -1 | awk '{print $1}')
  sh-4.4# chroot /host
  sh-4.4# oc login -u kubeadmin -p <PASSWORD>  https://api.<CLUSTER_NAME>.<DOMAIN_NAME>:6443
  sh-4.4# oc create sa image-puller -n openshift-config
  sh-4.4# oc adm policy add-cluster-role-to-user system:image-puller -z image-puller -n openshift-config
  sh-4.4# TOKEN=$(oc sa get-token image-puller -n openshift-config)
  sh-4.4# oc get secret pull-secret -n openshift-config -o json | jq '.data.".dockerconfigjson"' -r | base64 -d > /tmp/pull-secret
  sh-4.4# oc registry login --registry=image-registry.openshift-image-registry.svc:5000 --auth-basic=image-puller:${TOKEN} --to=/tmp/pull-secret
  sh-4.4# oc set data secret/pull-secret -n openshift-config --from-file=.dockerconfigjson=/tmp/pull-secret
  sh-4.4# exit
  sh-4.4# exit
  ```

Run `oc get routes` to get assigned public route and visit that URL to see the app (it should be http://digital-gov-frontend-prod-c0cce6-prod.apps-crc.testing)!


### Debugging site going down on re-deployment

We can trigger rollout again, and watch how it transitions:

`oc rollout latest dc/digital-gov-frontend-prod`

View pods (must be in c0cce6-prod project)

`oc get pods`

Pods ending with "deploy" are special service pods responsible for spinning up caddy pods that serve up content.

For example `digital-gov-frontend-prod-7-deploy` is the new service pod that was created when we ran the rollout command for the second time:
```
oc logs digital-gov-frontend-prod-7-deploy
--> Scaling up digital-gov-frontend-prod-7 from 0 to 3, scaling down digital-gov-frontend-prod-6 from 3 to 0 (keep 3 pods available, don't exceed 4 pods)
Scaling digital-gov-frontend-prod-7 up to 1
Scaling digital-gov-frontend-prod-6 down to 2
Scaling digital-gov-frontend-prod-7 up to 2
Scaling digital-gov-frontend-prod-6 down to 1
Scaling digital-gov-frontend-prod-7 up to 3
Scaling digital-gov-frontend-prod-6 down to 0
--> Success
```

We can see how new pods are going up and old pods are going down in a rolling fashion. In this log `digital-gov-frontend-prod-7` and `digital-gov-frontend-prod-6` refer to replication controllers.

We can query events to see the event logs for the replication process:

`oc get events --sort-by='.metadata.creationTimestamp'`

This yields:

```
LAST SEEN   TYPE      REASON                        OBJECT                                              MESSAGE
33m         Normal    DeploymentCreated             deploymentconfig/digital-gov-frontend-prod          Created new replication controller "digital-gov-frontend-prod-7" for version 7
33m         Normal    Scheduled                     pod/digital-gov-frontend-prod-7-deploy              Successfully assigned c0cce6-prod/digital-gov-frontend-prod-7-deploy to crc-sjtnl-master-0
32m         Normal    Created                       pod/digital-gov-frontend-prod-7-deploy              Created container deployment
32m         Normal    Started                       pod/digital-gov-frontend-prod-7-deploy              Started container deployment
32m         Normal    AddedInterface                pod/digital-gov-frontend-prod-7-deploy              Add eth0 [xxxx] from openshift-sdn
32m         Normal    Pulled                        pod/digital-gov-frontend-prod-7-deploy              Container image "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:xxx" already present on machine
32m         Normal    Scheduled                     pod/digital-gov-frontend-prod-7-fmjqb               Successfully assigned c0cce6-prod/digital-gov-frontend-prod-7-fmjqb to crc-sjtnl-master-0
32m         Normal    SuccessfulCreate              replicationcontroller/digital-gov-frontend-prod-7   Created pod: digital-gov-frontend-prod-7-fmjqb
32m         Normal    Pulling                       pod/digital-gov-frontend-prod-7-fmjqb               Pulling image "image-registry.openshift-image-registry.svc:5000/c0cce6-tools/digital-gov-frontend@sha256:xxx"
32m         Normal    Pulled                        pod/digital-gov-frontend-prod-7-fmjqb               Successfully pulled image "image-registry.openshift-image-registry.svc:5000/c0cce6-tools/digital-gov-frontend@sha256:xxx" in 101.716109ms
32m         Normal    Created                       pod/digital-gov-frontend-prod-7-fmjqb               Created container digital-gov-frontend-prod
32m         Normal    AddedInterface                pod/digital-gov-frontend-prod-7-fmjqb               Add eth0 [xxxx] from openshift-sdn
32m         Normal    Started                       pod/digital-gov-frontend-prod-7-fmjqb               Started container digital-gov-frontend-prod
27m         Normal    SuccessfulDelete              replicationcontroller/digital-gov-frontend-prod-6   Deleted pod: digital-gov-frontend-prod-6-492zq
27m         Normal    Killing                       pod/digital-gov-frontend-prod-6-492zq               Stopping container digital-gov-frontend-prod
27m         Normal    SuccessfulCreate              replicationcontroller/digital-gov-frontend-prod-7   Created pod: digital-gov-frontend-prod-7-twbng
27m         Normal    Scheduled                     pod/digital-gov-frontend-prod-7-twbng               Successfully assigned c0cce6-prod/digital-gov-frontend-prod-7-twbng to crc-sjtnl-master-0
27m         Normal    AddedInterface                pod/digital-gov-frontend-prod-7-twbng               Add eth0 [xxxx] from openshift-sdn
27m         Normal    Pulling                       pod/digital-gov-frontend-prod-7-twbng               Pulling image "image-registry.openshift-image-registry.svc:5000/c0cce6-tools/digital-gov-frontend@sha256:xxx"
27m         Normal    Created                       pod/digital-gov-frontend-prod-7-twbng               Created container digital-gov-frontend-prod
27m         Normal    Pulled                        pod/digital-gov-frontend-prod-7-twbng               Successfully pulled image "image-registry.openshift-image-registry.svc:5000/c0cce6-tools/digital-gov-frontend@sha256:xxx" in 120.374554ms
27m         Normal    Started                       pod/digital-gov-frontend-prod-7-twbng               Started container digital-gov-frontend-prod
22m         Normal    Killing                       pod/digital-gov-frontend-prod-6-7w2kc               Stopping container digital-gov-frontend-prod
22m         Normal    SuccessfulDelete              replicationcontroller/digital-gov-frontend-prod-6   Deleted pod: digital-gov-frontend-prod-6-7w2kc
22m         Normal    SuccessfulCreate              replicationcontroller/digital-gov-frontend-prod-7   Created pod: digital-gov-frontend-prod-7-jhkck
22m         Normal    Scheduled                     pod/digital-gov-frontend-prod-7-jhkck               Successfully assigned c0cce6-prod/digital-gov-frontend-prod-7-jhkck to crc-sjtnl-master-0
22m         Normal    Pulled                        pod/digital-gov-frontend-prod-7-jhkck               Successfully pulled image "image-registry.openshift-image-registry.svc:5000/c0cce6-tools/digital-gov-frontend@sha256:xxx" in 66.674173ms
22m         Normal    Created                       pod/digital-gov-frontend-prod-7-jhkck               Created container digital-gov-frontend-prod
22m         Normal    AddedInterface                pod/digital-gov-frontend-prod-7-jhkck               Add eth0 [xxxx] from openshift-sdn
22m         Normal    Pulling                       pod/digital-gov-frontend-prod-7-jhkck               Pulling image "image-registry.openshift-image-registry.svc:5000/c0cce6-tools/digital-gov-frontend@sha256:xxx"
22m         Normal    Started                       pod/digital-gov-frontend-prod-7-jhkck               Started container digital-gov-frontend-prod
16m         Normal    Killing                       pod/digital-gov-frontend-prod-6-mnjqd               Stopping container digital-gov-frontend-prod
16m         Normal    SuccessfulDelete              replicationcontroller/digital-gov-frontend-prod-6   Deleted pod: digital-gov-frontend-prod-6-mnjqd
```

To view the list of replication controllers:

`oc get replicationcontrollers`

We can also view status of a particular replication controller:

`oc describe replicationcontrollers/digital-gov-frontend-prod-7`

In production the rollover looks like the following (`oc get replicationcontrollers`):

```
NAME                           DESIRED   CURRENT   READY   AGE
digital-gov-frontend-prod-xxx   0         0         0       33d   
digital-gov-frontend-prod-xxy   0         0         0       12d   
digital-gov-frontend-prod-xxz   3         3         3       12d   
```

While on local it looks like this (`oc get replicationcontrollers`):
```
NAME                          DESIRED   CURRENT   READY   AGE
digital-gov-frontend-prod-5   0         0         0       79m
digital-gov-frontend-prod-6   0         0         0       70m
digital-gov-frontend-prod-7   3         3         3       48m
```

Note that in production we have two entries for "12d", suggesting two deploys. However, there was only 1. This indicates that a new replication controller failed to start, but already killed off the original controller. Then it took it a while to start a second new one, which is why it goes down.

Viewing `oc describe replicationcontrollers/...` yields:

- For xxx - deployment.phase: Complete, deployment.status-reason: image change, deployer-pod.created-at: 2022-07-06 16:32:00 +0000 UTC, deployer-pod.completed-at: 2022-07-06 16:50:32 +0000 UTC, 
- For xxy - deployment.phase: Failed, deployment.status-reason: newer deployment was found running, deployer-pod.created-at: 2022-07-27 17:19:19 +0000 UTC, deployer-pod.completed-at: 2022-07-27 17:20:20 +0000 UTC
- For xxz - deployment.phase: Complete, deployment.status-reason: image change, deployer-pod.created-at: 2022-07-27 17:20:23 +0000 UTC, pod.completed-at: 2022-07-27 17:38:02 +0000 UTC

log for xxz is available (for xxy was deleted, likely because it failed and got cleaned up):
```
--> Scaled older deployment digital-gov-frontend-prod-xxy down
--> Scaling up digital-gov-frontend-prod-80 from 0 to 3, scaling down digital-gov-frontend-prod-xxx from 3 to 0 (keep 3 pods available, don't exceed 4 pods)
    Scaling digital-gov-frontend-prod-xxz up to 1
    Scaling digital-gov-frontend-prod-xxx down to 2
    Scaling digital-gov-frontend-prod-xxz up to 2
    Scaling digital-gov-frontend-prod-xxx down to 1
    Scaling digital-gov-frontend-prod-xxz up to 3
    Scaling digital-gov-frontend-prod-xxx down to 0
--> Success
```

Note the presence of `Scaled older deployment digital-gov-frontend-prod-xxy down` and the fact that it's scaling down `digital-gov-frontend-prod-xxx`

The events cannot be viewed as they expired. Will need to re-publish to see the events for more clues, but it's clear it's a failure of a replication controller caused by "newer deployment was found running".


## Useful commands

View imagestream:

`oc get imagestream`

To view info about imagestrea/imagestreamtag:

`oc describe is/caddy-s2i-builder`

`oc describe istag/caddy-s2i-builder:2.4.5`

See node status, such as memory allocation for a particular build process:

`oc describe nodes`