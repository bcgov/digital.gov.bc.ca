export const issueComment = {
  name: 'issue_comment',
  id: '343',
  payload: {
    action: 'created',
    issue: {
      url: 'https://api.github.com/repos/patricksimonian/strapi-demo/issues/9',
      repository_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo',
      labels_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/9/labels{/name}',
      comments_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/9/comments',
      events_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/9/events',
      html_url: 'https://github.com/patricksimonian/strapi-demo/issues/9',
      id: 123,
      node_id: 'id',
      number: 9,
      title:
        'Deploy strapi playbook fails if you run it twice quickly on the first deploy',
      user: {
        login: 'patricksimonian',
        id: 123,
        node_id: 'id',
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
      comments: 2,
      created_at: '2020-07-13T18:38:25Z',
      updated_at: '2020-08-13T17:52:56Z',
      closed_at: null,
      author_association: 'OWNER',
      active_lock_reason: null,
      body:
        'If the strapi deployment was just triggered. Running it again will cause the error:\r\n\r\n```\r\nfatal: [localhost]: FAILED! => {"changed": true, "cmd": "oc rollout latest strapi-pr-6 -n va3azs-patricksimonian-ocp201-tst-dev", "delta": "0:00:00.370958", "end": "2020-07-13 11:37:38.516262", "msg": "non-zero return code", "rc": 1, "start": "2020-07-13 11:37:38.145304", "stderr": "error: #1 is already in progress (Pending).", "stderr_lines": ["error: #1 is already in progress (Pending)."], "stdout": "", "stdout_lines": []}\r\n``` \r\n\r\nbecause it attempts to cancel the first rollout',
      performed_via_github_app: null,
    },
    comment: {
      url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/comments/673622509',
      html_url:
        'https://github.com/patricksimonian/strapi-demo/issues/9#issuecomment-673622509',
      issue_url:
        'https://api.github.com/repos/patricksimonian/strapi-demo/issues/9',
      id: 123,
      node_id: 'id',
      user: {
        login: 'patricksimonian',
        id: 123,
        node_id: 'id',
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
      created_at: '2020-08-13T17:52:56Z',
      updated_at: '2020-08-13T17:52:56Z',
      author_association: 'OWNER',
      body: 'yarg',
      performed_via_github_app: null,
    },
    repository: {
      id: 123,
      node_id: 'id',
      name: 'strapi-demo',
      full_name: 'patricksimonian/strapi-demo',
      private: false,
      owner: {
        login: 'patricksimonian',
        id: 123,
        node_id: 'id',
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
      id: 123,
      node_id: 'id',
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
      id: 123,
      node_id: 'id',
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
