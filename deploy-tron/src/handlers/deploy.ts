import { Context } from 'probot';
import { extractDeployCommandValues } from '../utils/stringutils';
import { getRepoAndOwnerFromContext, getHeadRefFromPr } from '../utils/ghutils';
import { createDeployment, isTherePendingDeploymentForEnvironment } from '../utils/deployment';
import { DEFAULT_SYNONYMS, ENVIRONMENTS } from '../constants';
import { MESSAGES } from '../constants/messages';
import config from '../config/index.json';

interface synonyms {
  [key: string]: string;
}

export const deploy = async (context: Context): Promise<void> => {
  const commentBody = context.payload.comment.body;
  const commentOwner = context.payload.comment.user.login;
  const deployValues = extractDeployCommandValues(commentBody);
  if (deployValues !== null) {
    

    const deploymentEnvSynonyms: synonyms = {
      ...DEFAULT_SYNONYMS,
      ...ENVIRONMENTS,
      ...config.environmentSynonyms,
    };

    const environment: string = deploymentEnvSynonyms[deployValues.environment];
    const { repo, owner } = getRepoAndOwnerFromContext(context);
    // check for pending deployments in that environment for another ref
    // get head ref from pr
    const ref = await getHeadRefFromPr(context);

    console.log('ref', ref);
    console.log(
      'is there a pending deployment to this environement for another ref and do we allow multiple deploys there',
    );
      await isTherePendingDeploymentForEnvironment(context, environment, repo, owner);
    // check if previous deployments in train have completed
    console.log('check if previous environments in train have succeeded');
    createDeployment(
      context,
      repo,
      owner,
      environment,
      deployValues.microservice,
      [],
    );
  } else {
    context.log(MESSAGES.badDeployCommand(commentOwner, commentBody));
  }
};
