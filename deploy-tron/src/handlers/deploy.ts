import { Context } from 'probot';
import { extractDeployCommandValues, getEnvFromSynonym } from '../utils/stringutils';
import { getRepoAndOwnerFromContext, getHeadRefFromPr, createComment } from '../utils/ghutils';
import { createDeployment, isTherePendingDeploymentForEnvironment, getLatestEnvironmentStatusesForRef, isEnvironmentAllowedToDeploy } from '../utils/deployment';
import { MESSAGES } from '../constants/messages';
import { CONFIG as config } from '../constants';

export const deploy = async (context: Context): Promise<void> => {
  const commentBody = context.payload.comment.body;
  const commentOwner = context.payload.comment.user.login;
  const deployValues = extractDeployCommandValues(commentBody);

  if (deployValues === null) {
    context.log(MESSAGES.badDeployCommand(commentOwner, commentBody));
    return;
  }
    
  const environment: string = getEnvFromSynonym(deployValues.environment);
  const { repo, owner } = getRepoAndOwnerFromContext(context);
  // check for pending deployments in that environment for another ref
  // get head ref from pr
  const ref = await getHeadRefFromPr(context);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const allowsMultipleDeploysToEnv = config.environmentsThatAllowConcurrentDeploys.findIndex(env => env === environment) > -1;
  
  const pendingDeploymentsExist = await isTherePendingDeploymentForEnvironment(context, ref, environment, repo, owner);
  const deploymentStatuses = await getLatestEnvironmentStatusesForRef(context, ref, repo, owner);

  if(pendingDeploymentsExist && !allowsMultipleDeploysToEnv) {
    await createComment(context, 'There is already a pending deployment to this environment, unable to deploy until that one completes');
    return;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const requiredEnvironments = config.requiredEnvironments[environment]
  const canDeploy = isEnvironmentAllowedToDeploy(requiredEnvironments, deploymentStatuses);
    
  if(!canDeploy) {
    const body = `
      Unable to create a deployment :(
      Deploying to ${environment} requires **${requiredEnvironments.join()}** to be deployed for this ref before you can deploy to **${environment}**.
    `
    await createComment(context, body);
    return;
  }
  // check if previous deployments in train have completed
  await createDeployment(
    context,
    repo,
    owner,
    environment,
    deployValues.microservice,
    ref,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.requiredContexts[environment] || [],
  );

  await createComment(context, 'Deployment successfully created!');
};
