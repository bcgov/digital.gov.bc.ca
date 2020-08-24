import config from '../config/index.json';

export const COMMANDS = {
  help: 'help',
  deploy: 'deploy',
  architecture: 'architecture',
  configuration: 'configuration'
};

export const ULTRA_SECRET_COMMANDS = {
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

export const BASE_CONFIG = {
  requiredContexts: {},
  environmentSynonyms: {},
  maxDeploymentsToLookupForPending: 10,
  validGithubRoles: ["maintain", "admin", "write"],
  environmentsThatAllowConcurrentDeploys: [],
  botCommand: '/deploy-tron'
};

export const CONFIG = {
  ...BASE_CONFIG,
  ...config,
};
