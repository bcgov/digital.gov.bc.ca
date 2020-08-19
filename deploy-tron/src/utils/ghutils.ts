import { Context } from 'probot';
import { CONFIG as config } from '../constants';;

interface repoOwner {
  repo: string;
  owner: string;
}
/**
 * returns the repo and owner from the context
 * @param context
 * @returns {Object}
 */
export const getRepoAndOwnerFromContext = (context: Context): repoOwner => {
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
}
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
}