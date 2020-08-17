import {  Probot, Octokit } from 'probot';
import nock from 'nock';
import { pullRequestComment } from '../../__fixtures__/pull_request_comment';
import { github, replaceCommentBodyWithCommand } from '../helpers';
import { adminUser } from '../../__fixtures__/collaborator';
import app from '../../src';

describe('As a user I can ask the bot to deploy my microservice', () => {
  let probot: Probot;

  beforeEach(() => {
    probot = new Probot({
      id: 1,
      githubToken: 'test',
      Octokit,
    })
    probot.load(app)
  });

  afterEach(() => {
    // https://github.com/nock/nock#memory-issues-with-jest
    nock.restore();
  });

  
  test('When I ask to deploy to dev but the deployment command is malformed, it does not create the deployment', async () => {
    const prComment = replaceCommentBodyWithCommand(pullRequestComment, 'deploy invalidservice to prod');
    const {
      issue: {
        user: { login: user },
      },
      repository: { name: repo, owner: {login: owner}},
    } = prComment.payload;
    const mock = nock('https://api.github.com')
      .get(`/repos/${owner}/${repo}/collaborators/${user}/permission`)
      .reply(200, adminUser)
      .get(`/repos/${owner}/${repo}/deployments`)
      .reply(201);

    github.repos.getCollaboratorPermissionLevel.mockReturnValueOnce(
      Promise.resolve({ data: adminUser }),
    );
    
    await probot.receive(prComment)
    // the deployments api should have not been called
    expect(mock.activeMocks()).toStrictEqual([`GET https://api.github.com:443/repos/${owner}/${repo}/deployments`])
  });
});
