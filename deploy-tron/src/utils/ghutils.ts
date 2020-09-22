import { Context } from 'probot';
import { CONFIG as config } from '../constants';
import {  PrStatusMessage, DeploymentStatus, RepoOwner } from '../constants/types';

/**
 * returns the repo and owner from the context
 * @param context
 * @returns {Object}
 */
export const getRepoAndOwnerFromContext = (context: Context): RepoOwner => {
  const { repository } = context.payload;
  const {
    name: repo,
    owner: { login: owner },
  } = repository;

  return { repo, owner };
};

export const getHeadRefFromPr = async (context: Context): Promise<string> => {
  const { repo, owner } = getRepoAndOwnerFromContext(context);

  const res = await context.github.pulls.get({owner,
    repo,
    pull_number: context.payload.issue.number
  });

  return res.data.head.ref;
};
/**
 * checks if commenter can perform action
 * @param context
 * @param allowedRoles
 */
export const isCommenterAllowedToAction = async (
  context: Context,
): Promise<boolean> => {
  const { repo, owner } = getRepoAndOwnerFromContext(context);
  // get user name and see if they are a member
  const { login: username } = context.payload.comment.user;
  // get their permissions for this repo
  const { data } = await context.github.repos.getCollaboratorPermissionLevel({
    username,
    repo,
    owner,
  });
  // get allowable permissions to perform the action
  // no matter what, read users should never be allowed to trigger changes
  return (
    config.validGithubRoles.includes(data.permission) &&
    data.permission !== 'read'
  );
};

/**
 * checks if comment came froma pull request
 * @param context
 * @returns {Boolean}
 */
export const isCommentFromPr = (context: Context): boolean => {
  const { issue } = context.payload;

  return Object.prototype.hasOwnProperty.call(issue, 'pull_request');
};

/**
 * checks if comment is a bot command
 * @param context
 * @returns {Boolean}
 */
export const isBotCommand = (context: Context, botCommand: string): boolean => {
  const { body } = context.payload.comment;
  const re = new RegExp(`^${botCommand}`);

  return re.test(body.trim());
};


export const createComment = (context: Context, body: string): Promise<unknown> => {
  const params = context.issue({ body });
  return context.github.issues.createComment(params);
};


export const extractPrsThatArePendingForComment = (deployments: DeploymentStatus[]): PrStatusMessage[] => {
  // group deployment by ref
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prs = deployments.reduce((group: any, deployment) => {
    const branch = deployment.node.ref.name;
    if(!group[branch]) {
      let payload;
      try {
        // for some reason the graphql api returns the json string with way more \ then is needed
        // VERY VERY wierd but this is the only way this works
        payload = JSON.parse(JSON.parse(JSON.parse(deployment.node.payload)));
      } catch (e) {
        payload = {
          pr: null,
        };
      }
      group[branch] = {
        ...deployment.node, 
        payload
      };
    }
    return group;
  }, {});

  return Object.keys(prs).map(branch => {
    return ({
      pr: prs[branch].payload.pr,
      branch,
      state: prs[branch].latestStatus !== null ? prs[branch].latestStatus.state : 'no status found'
    });
  });
};


