# deploy-tron

> A simplified PR bot that creates github deployments

## Available Commands

The base command are:
- `<botCommand> help`
- `<botCommand> deploy <microservice> to <env>`


## Future Commands
Future development should support:
- `<botCommand> status` to get the status of environments for a pull request
- `<botCommand> cancel <microservice> to <env>` to abort a deployment to an environment

## Installation

This is a Github App and requires enough access in your organization/repo to install it.


## Setup
1. Firstly create a Github App in your organization by following [these instructions](https://probot.github.io/docs/development/#configuring-a-github-app). Depending on whether you are testing this for local development or setting up a production server you will need to take additional steps as described below. 

### Bot Permissions

The Github App will require the following permissions at a minimum to do its work. If you add more capabilities to the bot you will first need to update permissions for the Github App and then have the repository __accept the permission changes__ (you can do this by navigating to your organizations installations page and configuring the github app). 

The following permissions are required:

| Object | Permission |
| --------------- | -------------------------------------- |
| Deployments     | Read & Write |
| Contents        | Read |
| Issues          | Read & Write |
| Pull Requests   | Read & Write |


The following events are required:

| Event   |
| --------------- |
| Issue Comment   |
| Pull Request    |

### Local Setup
 1. Create the Github App so that you can retrieve the app id and other important information to populate the `.env` file
 2. In the local project directory copy env vars `cp .env.example .env` 
 3. Install packages `npm install`
 4. Run dev server `npm run dev`
 5. In order to accept webhook requests you will need to register a `smee.io` channel as described in the [probot getting started docs](https://probot.github.io/docs/development/#configuring-a-github-app)

## Configuration

The App is configured by `src/config/index.json`. This is transpiled to `lib/config/index.json` on prod runtime. This can be overwritten via a volume mounted file if need be for runtime config changes.

### Configuration Values
- `environments: string[]`: This is a list of the valid github deployment environments your app supports. This will prevent deploy commands to unsupported environments from triggering a workflow. The available environments are __production__, __staging__, __qa__, __development__. Take a look at github deployment docs for more info.
- `environmentSynonyms: object`: To make deploy commands easier to write you can config a table of synonyms that should map to a valid deployment. 
For example: 
```json
{
  "environmentSynonyms": {
    "prod": "production"
  }
}
```
- `validGithubRoles: string[]`: This is a list of valid github permission roles a user can have. This will validate that a command issued by a user __will run__. By __default__ the valid roles are `['maintain', 'admin', 'write']`

- `botCommand: string`: This is the issuing command that the bot will look for to prepend every command. This can be any __single word__. Recommend prepending a `/` to the command to seperate it from english text. __Defaults__ to `/deploy-tron`

- `microservices: string[]`: This is a list of 'microservices' that your repositories codebase supports. This passed into any __create deployment__ as a `payload` which will allow your ci/cd tool of choice to filter github deployments. The microservice list is also used to validate the deploy command `deploy <microservice> to <env>`

- `requiredEnvironments: { [env]: string[] }`: This creates dependencies between environments for a github ref/branch. For example you can configure that the `test` environment is only deployable if the same `ref/branch` was deployed to `dev` first. It's usage:
```json
{
  "requiredEnvironments": {
    "development": [],
    "staging": ["development"],
    "production": ["staging"]
  }
}
```
> take note that required environments uses the __valid github deployment environment__ nomenclature and not __your synonyms__. 

- `environmentsThatAllowConcurrentDeploys: string[]`: A list of github deployment environments that allow requests from different refs/branches to create deployments to the same environment. For example in a PR based pipeline every PR may deploy code to a development environment. Usage is: `"environmentsThatAllowConcurrentDeploys": ["development"]`

- `maxDeploymentsToLookupForPending: int`: By default when checking for previous pending deployments for a ref/branch. Only the last 10 deployments are checked. The others are assumed to be inactive. This can be configured to look further back if needed.

- `requiredContexts: { [env]: string[] }`: This is a environment mapping to the `required_contexts` property of a github deployment.

## Contributing

If you have suggestions for how deploy-tron could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Patrick Simonian <patricksimonian@gmail.com>
