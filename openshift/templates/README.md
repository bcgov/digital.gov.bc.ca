## Openshift Template

this houses all the infra code templates for the app


- react-frontend

the front end components

- mongo
a highly available mongo replica set

- strapi
the strapi CMS component (ties to mongo)

- rh-container-catalog

this is a pull secret we use so that we can pull rh catalog images


## Labeling

All components have a set of labels to organize seperate PR based deployments as well an easy way to group them up for cleaning. 

- app: identifies a label for a group of objects that belong to a Pull request. This includes the instance name plus a suffix. Such as `strapi-pr-3` and `mongo-pr-3`

- group: a generic label to get/delete all versions of an instance. Such as `strapi` and `mongo`

- pr: identifies all objects that share the same Pull Request (allows you to grab strapi and mongo objects to gether)
