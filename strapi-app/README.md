# Strapi application

This will be a quick guide to devloping and deploying the strapi app

## Deploying new collection types

Whenever a collection type is deployed to an environment for the first time it defaults to no public permission and non-super-admins cannot see it in the strapi admin panel.

### To allow Authors and Editors to view the collection types.

New collection types are not visible to Authors and Editors by default. The super admin must navigate to the roles panel to change this.

`Settings -> ADMINISTRATION PANEL -> Roles ->`

### To expose endpoints to the internet

The public roles can be found here in the strapi admin panel.

`Settings -> USERS & PERMISSIONS PLUGIN -> Roles -> Public`

Each collection type's roles default to no permissions when created. It is the admin's responsibility to expose the needed APIs.

## Deployment to new Namespaces

When deploying to a new namespace the deployment of strapi requires a jwt secret.  See details in the file:

`openshift/docs/strapi-configuration.md`

## Development of Plugins 

When building new plugins for the strapi app there will be multiple package.json files in the strapi container.  To ensure these libraries get installed when deploying the app in Openshift, the Dockerfile for strapi must be modified. The following command:


```
RUN cd plugins/wysiwyg/ && \

    yarn install && \

    cd ../../ && \
```

enters the specific plugin folder and installs the needed packages before returning to the root of the project.  Any new pluging requires a similar install line in the strapi docker file.