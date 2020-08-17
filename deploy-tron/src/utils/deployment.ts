import { Context } from 'probot';
import { MESSAGES } from '../constants/messages';
import { ENVIRONMENTS } from '../constants';
import config from '../config/index.json';

export const createDeployment = (
  context: Context,
  repo: string,
  owner: string,
  environment: string,
  microservice: string,
  requiredContexts = [],
) => {
  const ref = `pull/${context.payload.issue.number}/head`;
  const user = context.payload.issue.user.login;
  context.log(MESSAGES.deploying(user, microservice, environment, ref));

  return context.github.repos.createDeployment({
    repo,
    owner,
    ref, 
    environment,
    description: 'deploy request from ci-cd',
    payload: JSON.stringify({
      microservice,
      pr: context.payload.issue.number,
      user ,
    }),
    required_contexts: requiredContexts,
    transient_environment: environment !== ENVIRONMENTS.production,
    headers: {
      'Accept': 'application/vnd.github.ant-man-preview+json',
    }
  })
};


interface latestStatus {
  node: {
    latestStatus: string
  }
}

export const isTherePendingDeploymentForEnvironment = async (context: Context, env: string, repo: string, owner: string): Promise<boolean> => {

  const data = await context.github.graphql(`
  query latestStatus($owner: String!, $repo: String!, $env: String!, $maxLookup: Int = 10) 
  {
    repository(name:$repo, owner:$owner) {
      deployments(orderBy: {field: CREATED_AT, direction: DESC}, first:$maxLookup, environments:[$env]) {
        edges {
          node {
            latestStatus {
              state
            }
          }
        }
      }
    }
  }  
  `,
  {
    repo,
    owner,
    maxLookup: config.maxDeploymentsToLookupForPending,
    env
  });

  // @ts-ignore
  return data.repository.deployments.edges.findIndex((edge: latestStatus) => edge.node.latestStatus === 'PENDING') > -1;
}
