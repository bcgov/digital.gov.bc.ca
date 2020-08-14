import { Context } from 'probot';

export const createDeployment = (context: Context, repo: string, owner: string, environment: string, microservice: string, requiredContexts = []) => {
  context;
  console.log('DEPLOYING', repo, owner, microservice, environment, requiredContexts);
}