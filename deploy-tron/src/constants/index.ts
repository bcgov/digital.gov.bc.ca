export const COMMANDS = {
  help: 'help',
  deploy: 'deploy',
  knockknock: 'knockknock',
};

export const ENVIRONMENTS = {
  staging: 'staging',
  production: 'production',
  development: 'development',
};

export const DEFAULT_SYNONYMS = {
  test: ENVIRONMENTS.staging,
  prod: ENVIRONMENTS.production,
  dev: ENVIRONMENTS.development,
};
