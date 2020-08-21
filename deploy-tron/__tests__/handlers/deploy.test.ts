import {  Probot, Octokit } from 'probot';
import nock from 'nock';
import { pullRequestComment } from '../../__fixtures__/pull_request_comment';
import { deploymentStatusesPending, deploymentStatusesSuccess, deploymentsForRef, deploymentStatusForDeploymentWhereAllSuccessful } from '../../__fixtures__/deployments';
import { pullRequest } from '../../__fixtures__/pull_request';
import {  replaceCommentBodyWithCommand } from '../helpers';
import { adminUser } from '../../__fixtures__/collaborator';
import app from '../../src';

describe('As a user I can ask the bot to deploy my microservice', () => {
  let probot: Probot;

  beforeEach(() => {
    nock.disableNetConnect();
    probot = new Probot({
      id: 1,
      githubToken: 'test',
      Octokit,
    })
    probot.load(app)
  });

  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
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
    .reply(201)
    
    
    await probot.receive(prComment)
    // the deployments api should have not been called
    expect(mock.activeMocks()).toStrictEqual([`GET https://api.github.com:443/repos/${owner}/${repo}/deployments`])
  });

  test('When I ask to deploy but there is already a pending deployment to that environment it does not create the deployment', async () => {
    const prComment = replaceCommentBodyWithCommand(pullRequestComment, 'deploy postgres to test');
    const {
      issue: {
        user: { login: user },
        number,
      },
      repository: { name: repo, owner: {login: owner}},
    } = prComment.payload;

    const statusesRegExp = new RegExp(`/repos/${owner}/${repo}/deployments/[0-9]+/statuses`);

    const mock = nock('https://api.github.com')
      .get(`/repos/${owner}/${repo}/collaborators/${user}/permission`)
      .reply(200, adminUser)
      .get(`/repos/${owner}/${repo}/pulls/${number}`)
      .reply(200, pullRequest)
      .post(`/graphql`)
      .reply(200, {data: deploymentStatusesPending})
      .post(`/repos/${owner}/${repo}/issues/${number}/comments`)
      .reply(200)
      .get(`/repos/${owner}/${repo}/deployments`)
      .reply(201)
      .persist()
      .get(`/repos/${owner}/${repo}/deployments\?ref=${deploymentsForRef[0].ref}`)
      .reply(201, deploymentsForRef)
      .get(statusesRegExp)
      .reply(201, deploymentStatusForDeploymentWhereAllSuccessful);

    await probot.receive(prComment)
    // the deployments api should have not been called
    expect(mock.pendingMocks()).toStrictEqual([`GET https://api.github.com:443/repos/${owner}/${repo}/deployments`])
  });
  
  test('It can create a deployment', async () => {
    const prComment = replaceCommentBodyWithCommand(pullRequestComment, 'deploy postgres to test');
    const {
      issue: {
        user: { login: user },
        number,
      },
      repository: { name: repo, owner: {login: owner}},
    } = prComment.payload;


    const statusesRegExp = new RegExp(`/repos/${owner}/${repo}/deployments/[0-9]+/statuses`);
    const mock = nock('https://api.github.com')
      .get(`/repos/${owner}/${repo}/collaborators/${user}/permission`)
      .reply(200, adminUser)
      .get(`/repos/${owner}/${repo}/pulls/${number}`)
      .reply(200, pullRequest)
      .post(`/graphql`)
      .reply(200, {data: deploymentStatusesSuccess})
      .post(`/repos/${owner}/${repo}/issues/${number}/comments`)
      .reply(200)
      .persist()
      .get(`/repos/${owner}/${repo}/deployments\?ref=${deploymentsForRef[0].ref}`)
      .reply(201, deploymentsForRef)
      .get(statusesRegExp)
      .reply(201, deploymentStatusForDeploymentWhereAllSuccessful)
      .post(`/repos/${owner}/${repo}/deployments`)
      .reply(200, deploymentsForRef[0]);

    await probot.receive(prComment)

    expect(mock.pendingMocks()).toEqual([]);
  })
});
