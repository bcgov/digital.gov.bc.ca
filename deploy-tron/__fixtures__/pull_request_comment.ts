export const pullRequestComment = {
  name: 'issue_comment',
  id: 'baa93500-dd8d-11ea-94ef-eec1009a92aa',
  payload: {
    action: 'created',
    issue: {
      url: 'https://api.github.com/repos/patricksimonian/strapi-demo/issues/10',
      repository_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo',
      labels_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/10/labels{/name}',
      comments_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/10/comments',
      events_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/10/events',
      html_url: 'https://github.com/patricksimonian/strapi-demo/pull/10',
      id: 656063589,
      node_id: 'MDExOlB1bGxSZXF1ZXN0NDQ4NDI4MDQy',
      number: 10,
      title: 'Test Deployment PR (use this PR to sample ansible scripts)',
      user: {
        login: 'patricksimonian',
        id: 21046727,
        node_id: 'MDQ6VXNlcjIxMDQ2NzI3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21046727?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/patricksimonian',
        html_url: 'https://github.com/patricksimonian',
        followers_url: 'https://api.github.com/users/patricksimonian/followers',
        following_url:
          'https://api.github.com/users/patricksimonian/following{/other_user}',
        gists_url:
          'https://api.github.com/users/patricksimonian/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/patricksimonian/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/patricksimonian/subscriptions',
        organizations_url: 'https://api.github.com/users/patricksimonian/orgs',
        repos_url: 'https://api.github.com/users/patricksimonian/repos',
        events_url:
          'https://api.github.com/users/patricksimonian/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/patricksimonian/received_events',
        type: 'User',
        site_admin: false,
      },
      labels: [],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 23,
      created_at: '2020-07-13T18:49:22Z',
      updated_at: '2020-08-13T17:52:18Z',
      closed_at: null,
      author_association: 'OWNER',
      active_lock_reason: null,
      pull_request: {
        url:
          'https://api.github.com/repos/patricksimonian/strapi-demo/pulls/10',
        html_url: 'https://github.com/patricksimonian/strapi-demo/pull/10',
        diff_url: 'https://github.com/patricksimonian/strapi-demo/pull/10.diff',
        patch_url:
          'https://github.com/patricksimonian/strapi-demo/pull/10.patch',
      },
      body:
        'The pr is kept open to sample the anisble scripts\r\n> follow pre requisites as described in the `ansible/README.md`\r\n\r\n1. build strapi `ansible-playbook build-strapi.yaml -e PR=10`\r\n2. deploy mongo `ansible-playbook deploy-mongo.yaml -e PR=10`\r\n> wait for mongo to be ready by viewing logs `oc logs pod/mongo-ha-pr-10-0` and look for readiness of replicas\r\n> you will be looking for messages like `Member mongo-ha-pr-10-2.mongo-ha-pr-10-internal.<namespace>.svc.cluster.local:27017 is now in state SECONDARY` and\r\n> `Member mongo-ha-pr-10-1.mongo-ha-pr-10-internal.va3azs-patricksimonian-ocp201-tst-dev.svc.cluster.local:27017 is now in state SECONDARY`\r\n> when ready\r\n3. deploy strapi `ansible-playbook deploy-strapi.yaml -e PR=10`\r\n> when strapi is ready\r\n4. backup restore check `ansible-playbook backup-restore-mongo.yaml -e PR=10`\r\n> if there is no thrown errors the backup and restore was succesful\r\n\r\n\r\nFixes #8 ',
      performed_via_github_app: null,
    },
    comment: {
      url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/comments/673622186',
      html_url:
        'https://github.com/patricksimonian/strapi-demo/pull/10#issuecomment-673622186',
      issue_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/10',
      id: 673622186,
      node_id: 'MDEyOklzc3VlQ29tbWVudDY3MzYyMjE4Ng==',
      user: {
        login: 'patricksimonian',
        id: 21046727,
        node_id: 'MDQ6VXNlcjIxMDQ2NzI3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21046727?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/patricksimonian',
        html_url: 'https://github.com/patricksimonian',
        followers_url: 'https://api.github.com/users/patricksimonian/followers',
        following_url:
          'https://api.github.com/users/patricksimonian/following{/other_user}',
        gists_url:
          'https://api.github.com/users/patricksimonian/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/patricksimonian/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/patricksimonian/subscriptions',
        organizations_url: 'https://api.github.com/users/patricksimonian/orgs',
        repos_url: 'https://api.github.com/users/patricksimonian/repos',
        events_url:
          'https://api.github.com/users/patricksimonian/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/patricksimonian/received_events',
        type: 'User',
        site_admin: false,
      },
      created_at: '2020-08-13T17:52:18Z',
      updated_at: '2020-08-13T17:52:18Z',
      author_association: 'OWNER',
      body: '/test deploy blarb to test',
      performed_via_github_app: null,
    },
    repository: {
      id: 278504039,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNzg1MDQwMzk=',
      name: 'strapi-demo',
      full_name: 'patricksimonian/strapi-demo',
      private: false,
      owner: {
        login: 'patricksimonian',
        id: 21046727,
        node_id: 'MDQ6VXNlcjIxMDQ2NzI3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21046727?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/patricksimonian',
        html_url: 'https://github.com/patricksimonian',
        followers_url: 'https://api.github.com/users/patricksimonian/followers',
        following_url:
          'https://api.github.com/users/patricksimonian/following{/other_user}',
        gists_url:
          'https://api.github.com/users/patricksimonian/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/patricksimonian/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/patricksimonian/subscriptions',
        organizations_url: 'https://api.github.com/users/patricksimonian/orgs',
        repos_url: 'https://api.github.com/users/patricksimonian/repos',
        events_url:
          'https://api.github.com/users/patricksimonian/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/patricksimonian/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/patricksimonian/strapi-demo',
      description:
        'A demonstration of Strapi in Openshift with a HA mongo replica set',
      fork: false,
      url: 'https://api.github.com/repos/patricksimonian/strapi-demo',
      forks_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/forks',
      keys_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/teams',
      hooks_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/hooks',
      issue_events_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/events',
      assignees_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/branches{/branch}',
      tags_url: 'https://api.github.com/repos/patricksimonian/strapi-demo/tags',
      blobs_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/languages',
      stargazers_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/stargazers',
      contributors_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/contributors',
      subscribers_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/subscribers',
      subscription_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/subscription',
      commits_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/merges',
      archive_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/downloads',
      issues_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/labels{/name}',
      releases_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/deployments',
      created_at: '2020-07-10T00:55:14Z',
      updated_at: '2020-07-13T18:57:42Z',
      pushed_at: '2020-07-14T16:18:31Z',
      git_url: 'git://github.com/patricksimonian/strapi-demo.git',
      ssh_url: 'git@github.com:patricksimonian/strapi-demo.git',
      clone_url: 'https://github.com/patricksimonian/strapi-demo.git',
      svn_url: 'https://github.com/patricksimonian/strapi-demo',
      homepage: null,
      size: 2201,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 4,
      license: null,
      forks: 0,
      open_issues: 4,
      watchers: 0,
      default_branch: 'master',
    },
    sender: {
      login: 'patricksimonian',
      id: 21046727,
      node_id: 'MDQ6VXNlcjIxMDQ2NzI3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21046727?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/patricksimonian',
      html_url: 'https://github.com/patricksimonian',
      followers_url: 'https://api.github.com/users/patricksimonian/followers',
      following_url:
        'https://api.github.com/users/patricksimonian/following{/other_user}',
      gists_url: 'https://api.github.com/users/patricksimonian/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/patricksimonian/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/patricksimonian/subscriptions',
      organizations_url: 'https://api.github.com/users/patricksimonian/orgs',
      repos_url: 'https://api.github.com/users/patricksimonian/repos',
      events_url:
        'https://api.github.com/users/patricksimonian/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/patricksimonian/received_events',
      type: 'User',
      site_admin: false,
    },
    installation: {
      id: 11217370,
      node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMTEyMTczNzA=',
    },
  },
  github: {
    log: {},
    actions: {},
    activity: {},
    apps: {},
    checks: {},
    codesOfConduct: {},
    emojis: {},
    gists: {},
    git: {},
    gitignore: {},
    interactions: {},
    issues: {},
    licenses: {},
    markdown: {},
    meta: {},
    migrations: {},
    oauthAuthorizations: {},
    orgs: {},
    projects: {},
    pulls: {},
    rateLimit: {},
    reactions: {},
    repos: {},
    search: {},
    teams: {},
    users: {},
    retry: {},
  },
};
