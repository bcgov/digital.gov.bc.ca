import { Context } from 'probot';
import Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import path from 'path';
import { extractPrsThatArePendingForComment, getRepoAndOwnerFromContext, createComment } from './ghutils';
import {  DeploymentStatus } from '../constants/types';
import { CONFIG } from '../constants';

export const pendingDeploymentsExistMessage = (context: Context, deployments: DeploymentStatus[]): Promise<unknown> => {
  const pullRequests = extractPrsThatArePendingForComment(deployments);
  const prStatusContent = readFileSync(path.join(__dirname, '../../content/prStatus.md.handlebars')).toString();
  const cannotDeployContent = readFileSync(path.join(__dirname, '../../content/cannotDeploy.md.handlebars')).toString();
  const { repo, owner } = getRepoAndOwnerFromContext(context);

  Handlebars.registerPartial('prStatus', Handlebars.compile(prStatusContent));

  const template = Handlebars.compile(cannotDeployContent);

  return createComment(context, template({ repo, owner, pullRequests }));
};

export const helpMessage = (context: Context): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/help.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());

  return createComment(context, template({
    botCommand: CONFIG.botCommand,
    microserviceExample: CONFIG.microservices[0],
    environmentExample: Object.keys(CONFIG.environmentSynonyms)[0],
  }));
};

export const dependantDeploymentsMessage = (context: Context, environment: string): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/requiredEnvironments.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return createComment(context, template({environment, requiredEnvironments: CONFIG.requiredEnvironments[environment] }));
};

export const deploymentCreatedMessage = (context: Context, deployment: any): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/deploymentCreated.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());
  const {environment, id, payload} = deployment;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return createComment(context, template({ environment, id, payload }));
};


export const architectureMessage = (context: Context): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/architecture.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());

  return createComment(context, template({
    botCommand: CONFIG.botCommand,
    microservice: CONFIG.microservices[0],
    environment: Object.keys(CONFIG.environmentSynonyms)[0],
  }));
};


export const configurationMessage = (context: Context): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/configuration.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());

  return createComment(context, template({}));
};


export const welcomeMessage = (context: Context): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/welcome.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());

  return createComment(context, template({ botCommand: CONFIG.botCommand }));
};
