import { Context } from "probot";
import { extractDeployCommandValues } from "../utils/stringutils";
import { getRepoAndOwnerFromContext } from "../utils/ghutils";
import { createDeployment } from "../utils/deployment";
import { DEFAULT_SYNONYMS, ENVIRONMENTS } from "../constants";
import config from '../config/index.json';

export const deploy = (context: Context): void => {
  const commentBody = context.payload.comment.body;
  const deployValues = extractDeployCommandValues(commentBody);
  if(deployValues !== null) {
    interface synonyms {
      [key: string]: string;
    }
    
    const deploymentEnvSynonyms: synonyms  = {
      ...DEFAULT_SYNONYMS,
      ...ENVIRONMENTS,
      ...config.environmentSynonyms
    }

    const environment:string = deploymentEnvSynonyms[deployValues.environment];
    const { repo, owner } = getRepoAndOwnerFromContext(context);
    // check for pending deployments in that environment for another ref
    console.log('is there a pending deployment to this environement for another ref and do we allow multiple deploys there');

    // check if previous deployments in train have completed
    console.log('check if previous environments in train have succeeded');
    createDeployment(context, repo, owner, environment, deployValues.microservice, []);
  }
}