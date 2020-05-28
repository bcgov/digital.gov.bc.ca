# digital.gov.bc.ca
Learn how the Government of British Columbia is building teams and using modern technology to deliver better services.

## Contents
- [Locally Running the project](#how-to-run-the-project-locally)
## What is happening here?
We are building the next version of [Digital.gov.bc.ca](https://digital.gov.bc.ca/) based on user research and in alignment with directives to support the BC Public Service to improve service delivery using digital methods and tools.

The Exchange Lab Operations team has been deployed to build this website and associated resources, in collaboration with partners across the public service. We are taking an Agile Scrum product delivery approach.

You can see our backlog in the open by clicking on the issues tab above, or visiting our [ZenHub](https://app.zenhub.com/workspaces/digitalgovbcca-5c586bed93a5605cab276e9c/board?repos=223664506).

Contact the product owner, Heather.Remacle@gov.bc.ca, if you have questions.

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