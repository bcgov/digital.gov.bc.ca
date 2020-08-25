export const MESSAGES = {
  badDeployCommand: (user: string , comment: string): string => `${user} attempted to deploy using the command '${comment}', it was ignored due to being malformed`,
  deploying: (user: string, microservice: string, environment: string, ref: string): string => 
    `${user} initiated a deployment for ${microservice} to the ${environment} environment with the ref ${ref}`
};
