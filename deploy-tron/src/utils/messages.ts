import { Context } from 'probot';
import Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import path from 'path';
import { extractPrsThatArePendingForComment, getRepoAndOwnerFromContext, createComment } from './ghutils';
import {  deploymentStatus } from '../constants/types';
import { CONFIG } from '../constants';

export const pendingDeploymentsExist = (context: Context, deployments: deploymentStatus[]): Promise<unknown> => {
  const pullRequests = extractPrsThatArePendingForComment(deployments);
  const prStatusContent = readFileSync(path.join(__dirname, '../../content/prStatus.md.handlebars')).toString();
  const cannotDeployContent = readFileSync(path.join(__dirname, '../../content/cannotDeploy.md.handlebars')).toString();
  const { repo, owner } = getRepoAndOwnerFromContext(context);

  Handlebars.registerPartial('prStatus', Handlebars.compile(prStatusContent));

  const template = Handlebars.compile(cannotDeployContent);

  return createComment(context, template({ repo, owner, pullRequests }));
}

export const helpMessage = (context: Context): Promise<unknown> => {
  const buffer = readFileSync(path.join(__dirname, '../../content/help.md.handlebars'));
  const template = Handlebars.compile(buffer.toString());

  return createComment(context, template({
    botCommand: CONFIG.botCommand,
    microserviceExample: CONFIG.microservices[0],
    environmentExample: Object.keys(CONFIG.environmentSynonyms)[0],
  }));
}