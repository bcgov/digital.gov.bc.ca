/* eslint-disable @typescript-eslint/no-explicit-any */
//
// Copyright © 2020 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2020-02-26.
//
import config from '../__fixtures__/config.json';

export const github = {
  graphql: jest.fn(),
  paginate: jest.fn().mockReturnValue([]),
  apps: {
    listRepos: {
      endpoint: {
        merge: jest.fn(),
      },
    },
  },
  git: {
    createRef: jest.fn(),
    getRef: jest.fn(),
  },
  gitdata: {
    createRef: jest.fn(),
    getRef: jest.fn(),
  },
  issues: {
    addAssignees: jest.fn(),
    addLabels: jest.fn(),
    createComment: jest.fn(),
    listLabelsForRepo: jest.fn(),
    update: jest.fn(),
    create: jest.fn(),
  },
  orgs: {
    checkMembership: jest.fn(),
  },
  pullRequests: {
    create: jest.fn(),
    getAll: jest.fn(),
    list: jest.fn(),
  },
  pulls: {
    get: jest.fn(),
    create: jest.fn(),
    getAll: jest.fn(),
    list: jest.fn(),
  },
  repos: {
    createDeployment: jest.fn(),
    createFile: jest.fn(),
    listDeployments: jest.fn(),
    listDeploymentStatuses: jest.fn(),
    createOrUpdateFile: jest.fn(),
    getContents: jest.fn(),
    listCollaborators: jest.fn(),
    listCommits: jest.fn(),
    listTopics: jest.fn(),
    getCollaboratorPermissionLevel: jest.fn(),
  },
  search: {
    issuesAndPullRequests: jest.fn(),
  },
};

/**
 * for testing it is useful to take the pr comment payload and modify the comment
 * @param {Object} commentEvent  the json payload
 * @param {String} command the actual command you want to replace with
 * @return {Object}
 */
export const replaceCommentBodyWithCommand = (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  commentEvent: any,
  command: string,
): any => {
  const fullCommand = `${config.botCommand} ${command}`;

  return {
    ...commentEvent,
    payload: {
      ...commentEvent.payload,
      comment: { ...commentEvent.payload.comment, body: fullCommand },
    },
  };
};
