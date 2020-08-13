import { Context } from 'probot';

/**
 * checks if commenter can perform action
 * @param context 
 * @param allowedRoles 
 */
export const isCommenterAllowedToAction = async (context: Context, allowedRoles: String[]): Promise<boolean> => {
  // get user name and see if they are a member
  const {  user: username } = context.payload.comment.user;
  const { repository } = context.payload;
  const { name: repo, owner: { login: owner } } = repository;
  // get their permissions for this repo 
  const { data } = await context.github.repos.getCollaboratorPermissionLevel({ username, repo, owner });
  // get allowable permissions to perform the action
  return allowedRoles.includes(data.permission);
}


/**
 * checks if comment came froma pull request
 * @param context
 * @returns {Boolean}
 */
export const isCommentFromPr = (context: Context): boolean => {
  const { issue } = context.payload;

  return Object.prototype.hasOwnProperty.call(issue, 'pull_request');
}


/**
 * checks if comment is a bot command
 * @param context 
 * @returns {Boolean}
 */
export const isBotCommand = (context: Context, botCommand: String): boolean => {
  const { body } = context.payload.comment;
  const re = new RegExp(`^${botCommand}`);

  return re.test(body.trim());
}