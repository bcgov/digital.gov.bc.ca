# React Front End Infrastructure
This directory houses all the infrastructure components for the React Front End Microservice

## Abstract

The React front end is a __Caddy NodeJS S2I. 
In other words

The deployment is fairly simple, caddy2 will recieve a __Caddyfile__ configmap and a deployment config manages its lifecycle. 


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
