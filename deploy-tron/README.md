# deploy-tron

> A GitHub App built with [Probot](https://github.com/probot/probot) that A custom CI-CD bot

## Setup

```sh
# Install dependencies
npm install

# Run with hot reload
npm run build:watch

# Compile and run
npm run build
npm run start
```

## Configuration
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

## Contributing

If you have suggestions for how deploy-tron could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Patrick Simonian <patricksimonian@gmail.com>
