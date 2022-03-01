The react build config uses a s2i (source to image) method for creating new builds.  To create the base image for the Caddy server, run the following commmand in the root of the project:

```
oc process -n c0cce6-tools \
-f openshift/s2i-caddy-nodejs-2.4.5/openshift/templates/build.yaml \
-p GIT_REPO_URL=https://github.com/bcgov/digital.gov.bc.ca \
-p SOURCE_CONTEXT_DIR=openshift/s2i-caddy-nodejs-2.4.5 \
-p GIT_REF=develop \
-p OUTPUT_IMAGE_TAG=2.4.5 | oc apply -f -
```

This will generate the `caddy-s2i-builder` Build Config, for Caddy version 2.4.5. If a more recent version of Caddy is required, go to `openshift/s2i-caddy-nodejs-2.4.5/Dockerfile` and modify the version.