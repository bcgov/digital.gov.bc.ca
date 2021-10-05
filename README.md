[![img](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)
Blah Blah
# digital.gov.bc.ca
Learn how the Government of British Columbia is building teams and using modern technology to deliver better services.


## Contents
- [Locally Running the project](#how-to-run-the-project-locally)

## What is happening here?
We are building the next version of [Digital.gov.bc.ca](https://digital.gov.bc.ca/) based on user research and in alignment with directives to support the BC Public Service to improve service delivery using digital methods and tools.

The Exchange Lab Operations team has been deployed to build this website and associated resources, in collaboration with partners across the public service. We are taking an Agile Scrum product delivery approach.

You can see our backlog in the open by clicking on the issues tab above.

Contact the product owner, Heather.Remacle@gov.bc.ca, if you have questions.


## Components
- React: This is the digital.gov public facing front end
- Strapi: This is a headless CMS microservice that the React front end will leverage to source all of its dynamic content
- Mongo: This is a Highly Available Mongo Replica Set that supports Strapi

## How to run the project locally

NOTE: for full local development see next section.
NOTE 2: Often the first time these commands are run the images take too long to download and the commands can time out.  You may need to run the `build` and `up` command multiple times to get everything working. 

> requires docker
1. `cp .env.example .env` and fill in details as needed
2. In the root of the project run the command:

`docker-compose pull`

3. Then to build the project

`docker-compose build`

4. To successfully build the pluggins in the strapi project, we must install the plugins' node modules in the running strapi container.
To enter the container run:

`docker-compose up`

`docker exec -it strapi /bin/bash`

Inside the container navigate to the pluggin directory and install them using yarn. (at the time of writing there is only a single pluggin)

`cd plugins/wysiwyg/`

`yarn`

5. If you want to run the containers in the background:

`docker-compose up -d`

6. To bring down the containers

`docker-compose down`

## Local development

To have access to the testing features locally go to the react-frontend folder and run

`rm -R node_modules/` 
`npm install`

This will install the npm packages outside the frontend container, allowing the user to access tests in their terminal and IDE without using `docker exec` to run the tests in the frontend container.  

New npm packages they must be installed in the docker container.  Use the command:

`docker exec -it frontend /bin/bash`

to enter the container.  Then run `npm install`.

If new npm packages have been installed by another developer the project may need to be rebuilt using.

`docker-compose build --no-cache`

to insure that all npm packages are up to date.


## Build, Deploy and Operation of this Project

- [Building and Deploying React](./docs/react-frontend-startup.md)
- [Building and Deploying Strapi](./docs/strapi-startup.md)
