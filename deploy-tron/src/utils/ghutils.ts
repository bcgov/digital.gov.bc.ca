import { Context } from 'probot';

// export const getRoleFromCommenter = (context: Context): boolean => {
//   // get user name and see if they are a member
//   const { login: user } = context.payload.comment.user;

// }


/**
 * checks if comment came froma pull request
 * @param context
 * @returns {Boolean}
 */
export const isCommentFromPr = (context: Context): boolean => {
  const { issue } = context.payload;

  return Object.prototype.hasOwnProperty.call(issue, 'pull_request');
}