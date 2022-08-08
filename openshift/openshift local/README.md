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
Example flow to setup infrastructure for react-frontend:

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

`buildconfig.build.openshift.io/digital-gov-frontend-prod created
imagestream.image.openshift.io/digital-gov-frontend created`


then we need to run (as described in caddy-deployment.md file in docs/openshift):

`oc process -n c0cce6-tools -f openshift/s2i-caddy-nodejs-2.4.5/openshift/templates/build.yaml -p GIT_REPO_URL=https://github.com/bcgov/digital.gov.bc.ca -p SOURCE_CONTEXT_DIR=openshift/s2i-caddy-nodejs-2.4.5 -p GIT_REF=develop -p OUTPUT_IMAGE_TAG=2.4.5 | oc apply -f -`

we should get:

`imagestream.image.openshift.io/caddy-s2i-builder created
buildconfig.build.openshift.io/caddy-s2i-builder created`


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

### Useful commands

View imagestream:

`oc get imagestream`

To view info about imagestrea/imagestreamtag:

`oc describe is/caddy-s2i-builder`

`oc describe istag/caddy-s2i-builder:2.4.5`

See node status, such as memory allocation for a particular build process:

`oc describe nodes`