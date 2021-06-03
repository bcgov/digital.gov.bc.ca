# React Front End Infrastructure
This directory houses all the infrastructure components for the React Front End Microservice

## Abstract

The React front end is a __Caddy NodeJS S2I__. 
In other words

The deployment is fairly simple, caddy2 will recieve a __Caddyfile__ configmap and a deployment config manages its lifecycle. 

## Reverse Proxy

Reverse proxy's are configured in the `./dc.yaml` file.

### Digital Marketplace

The route `/marketplace` redirects to the digital marketplace app.  This behaves defferently in the 3 nampaces.
- dev: Current Digintal.gov dev deployements proxy to the Marketplace dev deployment. Marketplace's dev deployment is currently configured in a way that does not render the site from this url. Though the user will be prompted to login.
- test: The Digintal.gov test deployement is proxied to the Marketplace test deployment.
The current configuration of the marketplace app will work properly when accessed from `https://digital-gov-frontend-test-c0cce6-test.apps.silver.devops.gov.bc.ca/marketplace` (once they log in, contact Digital Marketplace admins for credentials).
- prod: Only users from digital.gov.bc.ca/marketplace will be able to access the marketplace app.

#### Configuring Marketplace App 

To allow the marketplace app proxy to function the marketplace app must have environment variables set in three places.
1) The env variable `PATH_PREFIX='marketplace'` must be added to relevant build in the marketplace tools namspace. Then the project needs to be re-built.
2) In the relevant namespace the Config Map  `app-digmkt-${NAMESPACE}-config` must have the variables `ORIGIN` and `PATH_PREFIX='marketplace'` set.  `ORIGIN=https://digital-gov-frontend-test-c0cce6-test.apps.silver.devops.gov.bc.ca/marketplace` for test.
3) In order for Keycloak autentication to work, the digital gov url has to be whitelisted in the Marketplace keycloak test realm.  

## Labels

### Generic Labels
- `group`: a generic label to group all instantiations of `bc.yaml`

- `version`: a label that isolates a particular version of an object this value is set to the image stream tag

- `pr`: a label to version each object against the Pull Request
### Build Related Objects

- `build`: a label that isolates a particular version of a buildconfig and its output image stream


### Deploy Related Objects

- `app`: this is a special openshift selector that creates a UI grouping in the console. This also isolates a particular
version of the deployment config and related objects against other versions


## Useful Queries

### Get Tasks

- `Getting a specific object`:
  - Querying deploy objects: `oc get all,configmap,secret -l app=<>`
  - Querying build objects: `oc get all,configmap,secret -l build=<>`
- `Getting group`
  - Querying deploy objects: `oc get all,configmap,secret -l group=<>`
  - Querying build objects: `oc get all,configmap,secret -l group=<>`

### Pruning Tasks

With the `pr` label you can do a quick shell script to clean up all version below a certain number.

`for i in $(seq 1 $PR); do oc delete all,configmap,secret -l PR="${i}"; done`
