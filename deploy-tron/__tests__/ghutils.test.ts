/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isCommentFromPr,
  isCommenterAllowedToAction,
  isBotCommand,
  getHeadRefFromPr,
} from '../src/utils/ghutils';
import { Context } from 'probot';
import { pullRequestComment } from '../__fixtures__/pull_request_comment';
import { issueComment } from '../__fixtures__/issue_comment';
import { github } from './helpers';
import {
  adminUser,
  readUser,
  writeUser,
  maintainUser,
} from '../__fixtures__/collaborator';
import config from '../__fixtures__/config.json';
import { pullRequest } from '../__fixtures__/pull_request';

describe('Gh Utilities', () => {
  test('returns true if comment came from pr', () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    expect(isCommentFromPr(context)).toBe(true);
  });

  test('returns false if comment came from issue', () => {
    const context = new Context(issueComment, github as any, {} as any);
    expect(isCommentFromPr(context)).toBe(false);
  });

  test('returns true if user permission is allowable', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(
      Promise.resolve({ data: adminUser }),
    );
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(
      Promise.resolve({ data: writeUser }),
    );
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(
      Promise.resolve({ data: maintainUser }),
    );
    expect(await isCommenterAllowedToAction(context)).toBe(true);
    expect(await isCommenterAllowedToAction(context)).toBe(true);
    expect(await isCommenterAllowedToAction(context)).toBe(true);
  });

  test('returns false if user permission is not allowable', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(
      Promise.resolve({ data: readUser }),
    );
    expect(await isCommenterAllowedToAction(context)).toBe(false);
  });

  test('returns true if the pull request comment starts with expected bot command', () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    expect(isBotCommand(context, config.botCommand)).toBe(true);
  });

  test('returns false if the pull request comment starts with not expected bot command', () => {
    const context = new Context(
      {
        ...pullRequestComment,
        payload: {
          ...pullRequestComment.payload,
          comment: { ...pullRequestComment.payload.comment, body: 'foo' },
        },
      },
      github as any,
      {} as any,
    );
    expect(isBotCommand(context, config.botCommand)).toBe(false);
  });

  test('returns head ref from pull request', async () => {
    const context = new Context(
      pullRequestComment,
      github as any,
      {} as any,
    );

    github.pulls.get.mockReturnValue(Promise.resolve({data: pullRequest}));

    expect(await getHeadRefFromPr(context)).toBe(pullRequest.head.ref);
  })
});
