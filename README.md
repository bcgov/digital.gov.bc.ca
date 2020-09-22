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

> requires docker
1. `cp .env.example .env` and fill in details as needed
2. In the root of the project run the command:

`docker-compose pull`

3. Then to build the project

`docker-compose build`

4. If you want to run the containers in the background:

`docker-compose up -d`

5. To bring down the containers

`docker-compose down`


## Build, Deploy and Operation of this Project

- [Building and Deploying React](./docs/react-frontend-startup.md)
- [Building and Deploying Strapi](./docs/strapi-startup.md)
