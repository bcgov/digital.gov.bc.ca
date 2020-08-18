/* eslint-disable @typescript-eslint/no-explicit-any */
import {  Context } from 'probot';
import { pullRequestComment } from '../__fixtures__/pull_request_comment';
import { github } from './helpers';
import { deploymentStatusesPending, deploymentStatusesPendingWithSameRef, deploymentsForRef, deploymentStatusForDeployment, deploymentStatusesSuccess } from '../__fixtures__/deployments';
import { isTherePendingDeploymentForEnvironment, getLatestEnvironmentStatusesForRef, isEnvironmentAllowedToDeploy } from '../src/utils/deployment';
import config from '../__fixtures__/config.json';


describe('Deployment Helpers', () => {


  test('isTherePendingDeploymentForEnvironment returns true when there is a pending deployent', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);

    github.graphql.mockReturnValueOnce(Promise.resolve(deploymentStatusesPending));
    const isPending = await isTherePendingDeploymentForEnvironment(context,'master', 'development', '123123', 'bar')
    expect(isPending).toBe(true);
  });

  test('isTherePendingDeploymentForEnvironment returns false when there is a pending deployent and ref is the same', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    
    github.graphql.mockReturnValueOnce(Promise.resolve(deploymentStatusesPendingWithSameRef));
    const isPending = await isTherePendingDeploymentForEnvironment(context, deploymentStatusesPendingWithSameRef.repository.deployments.edges[0].node.ref.name, 'development', 'bar', 'owner');
    expect(isPending).toBe(false);
  });

  test('isTherePendingDeploymentForEnvironment returns false when there is a non pending deployent', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);
    
    github.graphql.mockReturnValueOnce(Promise.resolve(deploymentStatusesSuccess));
    const isPending = await isTherePendingDeploymentForEnvironment(context,'master', 'development', 'foo', 'bar')
    expect(isPending).toBe(false);
  });

  test('getLatestEnvironmentStatusesForRef returns statuses grouped by env', async () => {
    const context = new Context(pullRequestComment, github as any, {} as any);

    github.repos.listDeployments.mockReturnValue(Promise.resolve({data: deploymentsForRef}));
    github.repos.listDeploymentStatuses.mockReturnValue(Promise.resolve({data: deploymentStatusForDeployment}))

    const statuses = await getLatestEnvironmentStatusesForRef(context, 'foo', 'bar', 'baz');
    expect(statuses).toMatchSnapshot();
  });


  test('isEnvironmentAllowedToDeploy returns true when required env is empty', () => {
    expect(isEnvironmentAllowedToDeploy([], { production: { state: 'success' }})).toBe(true);
  });

  test('isEnvironmentAllowedToDeploy returns true when required env are met', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const environments = config.requiredEnvironments['prod'];
    const statuses = { 
      production: { state: 'success' },
      staging: { state: 'success' },
      development: { state: 'success' },
    };

    expect(isEnvironmentAllowedToDeploy(environments, statuses)).toBe(true);
  });
});
