import { Context } from 'probot';
import { readFileSync } from 'fs';
import path from 'path';
import { pullRequestComment } from '../../__fixtures__/pull_request_comment';
import { github, replaceCommentBodyWithCommand } from '../helpers';
import { handlePrComment } from '../../src/handlers';
import { adminUser } from '../../__fixtures__/collaborator';

describe('As a user I can ask the bot for help', () => {
  test('When I ask for help, I get the help documentation', async () => {
    const buffer = readFileSync(path.join(__dirname, '../../content/help.md'));
    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(
      Promise.resolve({ data: adminUser }),
    );
    const prComment = replaceCommentBodyWithCommand(pullRequestComment, 'help');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = new Context(prComment, github as any, {} as any);
    const {
      issue: {
        number,
        user: { login: owner },
      },
      repository: { name: repo },
    } = prComment.payload;
    await handlePrComment(context);

    expect(github.issues.createComment).toBeCalledWith({
      body: buffer.toString(),
      number,
      owner,
      repo,
    });
  });
});
