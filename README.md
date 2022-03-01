[![img](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# digital.gov.bc.ca
Learn how the Government of British Columbia is building teams and using modern technology to deliver better services.


## Contents
- [What's happening?](#what-is-happening-here)
- [Locally Running the project](#how-to-run-the-project-locally)
- [Components](#components)
- [Quick Start, Local Deployment](#how-to-run-the-project-locally)
- [Local Development](#local-development)
    - [Front-end](#react-frontend)
    - [Back-end](#strapi)
        - [Create admin user](#create-the-first-admin-user)
        - [Set permissions](#set-the-permissions-on-the-content-types)
- [Other Documentation](#other-docs)

## What is happening here?
We are building the next version of [Digital.gov.bc.ca](https://digital.gov.bc.ca/) based on user research and in alignment with directives to support the BC Public Service to improve service delivery using digital methods and tools.

The Exchange Lab Operations team has been deployed to build this website and associated resources, in collaboration with partners across the public service. We are taking an Agile Scrum product delivery approach.

You can see our backlog in the open by clicking on the issues tab above.

Contact the product owner, Steve.Chapman@gov.bc.ca, if you have questions.


## Components
- React: This is the digital.gov public facing front end
- Strapi: This is a headless CMS microservice that the React front end will leverage to source all of its dynamic content
- Mongo: This is a Highly Available Mongo Replica Set that supports Strapi

## How to run the project locally

NOTE: For full local development see [next section](#local-development).
NOTE 2: Often the first time these commands are run the images take too long to download and the commands can time out.  You may need to run the `build` and `up` command multiple times to get everything working. 

> requires Docker (or Podman) and docker-compose
1. Environment variables, adjust as necessary for your environment. At the root of the project run the following: 
```
cp .env.example .env
cp strapi-app/.env.example strapi-app/.env
```

2. Build, (re)create, start and attach containers:

`docker-compose up`

To run without a console log (detached mode) add the `-d` flag. When new npm/yarn packages have been installed the project may need to be rebuilt using:

```
docker-compose build --no-cache
docker-compose up
```

3. To stop and remove containers, networks and images created by `up`

`docker-compose down`

## Local development

### React Frontend

To have access to the testing features locally (and not in containers), ensure your Node version matches what is used in `react-frontend/Dockerfile` and `package.json` and run:

```bash
cd react-frontend
rm -R node_modules/ 
npm install
```

This will install the npm packages outside the frontend container, where tests can be run locally in the terminal/IDE.

### Strapi

We will not document how to work with strapi here. The strapi [docs](https://docs.strapi.io/) are far more complete. They cover how to create graphql queries, how to create new content types, ets.  We recommend following any one of the many tutorials or introductions to strapi found online to become comfortable with the development/configuration techniques used.

However two things must be done before the local strapi development environment can mimic the deployments in dev, test and prod.

#### Create the first admin user

When the strapi and react containers are all running, navigate to [http://localhost:1337/admin/](http://localhost:1337/admin/).  You will be prompted to create a first admin user.  The strapi app will prompt the steps to take.

#### Set the permissions on the content types

When creating content types the permissions for `count`, `create`, `delete`, `find`, `findone`, and `update` are set to false.  You will need to set these before the front end is able to render them.  To do this, navigate to settings->USERS & PERMISSIONS PLUGIN -> roles -> public. (Strapi docs go into more detail on these permissions). If you are unsure of which permissions are needed for the app to work properly, navigate to the same screen in  the`dev` or `test` strapi instance and copy them.

TODO:  These steps could be automated by creating a script to seed the local database.  

## Other docs

There is more documentation in the following places

- `/docs/` folder
- `/react-frontend/README.md` 
- `/strapi-app/README.md`
- `/ansible/README.md`

### Build, Deploy and Operation of this Project

- [Building and Deploying React](./docs/react-frontend-startup.md)
- [Building and Deploying Strapi](./docs/strapi-startup.md)
- [Sysdig template docs](./openshift/templates/sysdig/Readme.md)

### Action docs

- Zap scanner docs can be found [Here](docs/zapScanning.md)
- Broken Link Checker documentation [Here](docs/BrokenLinkCheckerDocs.md) 
