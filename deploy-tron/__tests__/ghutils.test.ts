import {isCommentFromPr, isCommenterAllowedToAction} from '../src/utils/ghutils';
import {Context} from 'probot';
import {pullRequestComment} from '../__fixtures__/pull_request_comment';
import {issueComment} from '../__fixtures__/issue_comment';
import {github} from './helpers';
import {adminUser, readUser, writeUser, maintainUser} from '../__fixtures__/collaborator';
import config from '../__fixtures__/config.json';

describe('Gh Utilities', () => {
  test('returns true if comment came from pr', () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    expect(isCommentFromPr(context)).toBe(true);
  });

  test('returns false if comment came from issue', () => {
    const context = new Context(issueComment, github as any, {} as any);
    expect(isCommentFromPr(context)).toBe(false);
  });

  test('return true if user permission is allowable', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(Promise.resolve({data: adminUser}));
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(Promise.resolve({data: writeUser}));
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(Promise.resolve({data: maintainUser}));
    expect(await isCommenterAllowedToAction(context, config.validGithubRoles)).toBe(true);
    expect(await isCommenterAllowedToAction(context, config.validGithubRoles)).toBe(true);
    expect(await isCommenterAllowedToAction(context, config.validGithubRoles)).toBe(true);
  });

  test('return false if user permission is not allowable', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(Promise.resolve({data: readUser}));
    expect(await isCommenterAllowedToAction(context, config.validGithubRoles)).toBe(false);
  });
});
