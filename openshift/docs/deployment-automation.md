## Github Flow Based Deployments

The deployment pipeline of the microservices in this project are of the Github Flow Type. 

__TL;DR__ 
- All PRs should be relatively short lived
- PR code is pushed into a production environment
- Prior to being merged into master, the source code in master therefor can be defined as always 100% working
and deployable code. 
- Each PR will deploy a running instance of the code in the development openshift namespace
- Each PR's is subsequently promoted to test/prod
- Not more than 1 PR may be promoted to an environment at the same time


## Mantra
> 'To create the fastest and simplest way to deploy code into production that minimizes toil and jumping through hoops, therefor,
the utilization of automation will be used at extremes to fast track things that don't or shouldn't require humans to do work'

### Continuos Integration

All continuos integration will be done asynchronously. This means that unit, integration, functional, or lint tests will run and not hinder __deployments to dev__. Each one of these tests then are __a singular github action__

As promotion of code into more sensitive environments occur, deployments into these environments will take pass/failures of CI based github actions into account prior to deploying. 

### Continuos Deployment

> The hope is that a team will have enough skills and the product owner enough confidence to trust that code can go straight into production automatically. This is not something that can be immediately done. A lot of work needs to be put into designing code in a way that allows it to placed into sensitive environments with minimal risk. 

Only deployments to dev are fully automated. Deployments to test or prod will require a manual button press. 

## How it works

The workflow for deploying is a mix between process and technology. The process would be __Github Flow__. 
The technology is __Github Actions__, __Github Apps__, __Ansible__, and of course __oc__.

- 1. Stage 1: Build and Deploy to Dev. The build and deploy to dev will happen regardless whether or not ci github action checks pass or fail. 
- 2. Stage 2: A developer will trigger the promotion event by creating a Github Deployment for that respective environment
- 3. Stage 3: The event will trigger the promotion github action. This event will only trigger if:
  - a. No pending deployments to that environment already exist
  - b. The codebase is up to date with master
  - c. The CI (unit/integration tests etc) checks are passing
- 4. Stage 4: on PR close. If a PR is closed another action will fire to clean up environments.
> pr closed actions can be triggered with 
> 
  ```yaml
  on:
    pull_request:
      types: [closed]
  ```
  - if the  PR was closed and the PR was deployed into production
    - delete the dev instance of the app in the dev namespace
    - delete the build config of the app in tools namespace
  - if the PR was closed and it was __not deployed into production__
     - delete the dev instance of the app in the dev namespace
    - delete the build config of the app in tools namespace


## Service Account Roles

The service account that is responsible for building and deploying has __very specific__ roles for each
namespace, this provides it with the minimum amount of access it needs to do its work. The template `cicd.yaml` provides
insight into what `Role` is created for each namespace.