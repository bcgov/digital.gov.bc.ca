# Strapi application

This will be a quick guide to devloping and deploying the strapi app

## Deploying new content types

Whenever a content type is deployed to an environment for the first time it defaults to no public permission and non-super-admins cannot see it in the strapi admin panel.

### To allow 

### To expose endpoints to the internet

The public roles can be found here in the strapi admin panel.

`Settings -> USERS & PERMISSIONS PLUGIN -> Roles -> Public`

Each content type's roles default to no permissions when created. It is the admin's responsibility to expose the needed apis.

## Deployment to new Namespaces

There are some 



## Development of Plugins 
When building new plugins for the strapi app there will be multiple package.json files in the strapi container.  To ensure these libraries get installed add a version of this command to the strapi Dockerfile.  (note use yarn instead of npm for consistency with package manager in the route of the project.)

`
RUN cd plugins/wysiwyg/ && \
    npm install && \
    cd ../../ && \
    npm install pg --save && \
    npm install && \
    npm run build
`