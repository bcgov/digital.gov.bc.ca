import { Context } from 'probot';
import { MESSAGES } from '../constants/messages';

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
    auto_merge: false,
  })
};
