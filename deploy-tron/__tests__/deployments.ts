import {  Context } from 'probot';
import { pullRequestComment } from '../__fixtures__/pull_request_comment';
import { github } from './helpers';
import { deploymentStatusesPending, deploymentStatusesSuccess } from '../__fixtures__/deployments';
import { isTherePendingDeploymentForEnvironment } from '../src/utils/deployment';


describe('Deployment Helpers', () => {

  
  test('isTherePendingDeploymentForEnvironment returns true when there is a pending deployent, false when its not', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);

      github.graphql.mockReturnValueOnce(Promise.resolve(deploymentStatusesPending))
      github.graphql.mockReturnValueOnce(Promise.resolve(deploymentStatusesSuccess))
    let isPending = isTherePendingDeploymentForEnvironment(context, 'development', 'foo', 'bar')

    expect(isPending).toBeTruthy();
    isPending = isTherePendingDeploymentForEnvironment(context, 'development', 'foo', 'bar')
    expect(isPending).toBeFalsy();
  });
});
