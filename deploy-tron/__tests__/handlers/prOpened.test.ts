import {  Probot, Octokit } from 'probot';
import nock from 'nock';
import { pullRequestEvent } from '../../__fixtures__/pull_request';
import app from '../../src';

describe('As a user I can ask the bot to deploy my microservice', () => {
  let probot: Probot;

  beforeEach(() => {
    nock.disableNetConnect();
    probot = new Probot({
      id: 1,
      githubToken: 'test',
      Octokit,
    });
    probot.load(app);
  });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  
  test('When I ask to deploy to dev but the deployment command is malformed, it does not create the deployment', async () => {

    const {
      number,
      pull_request: {
        head: {
          repo: {
          name: repo,
          owner: {
            login: owner,
          }
        }
        }
      }
    } = pullRequestEvent.payload;

    const mock = nock('https://api.github.com')
    .post(`/repos/${owner}/${repo}/issues/${number}/comments`)
    .reply(200);
    
    
    await probot.receive(pullRequestEvent);
    // the deployments api should have not been called
    expect(mock.activeMocks()).toStrictEqual([]);
  });

});
