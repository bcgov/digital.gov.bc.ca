export const deploymentStatusesPending = {
  "repository": {
    "deployments": {
      "edges": [
        {
          "node": {
            "latestStatus": "PENDING",
            "ref": {
              "name": "foo"
            }
          }
        }
      ]
    }
  }
}

export const deploymentStatusesPendingWithSameRef = {
  "repository": {
    "deployments": {
      "edges": [
        {
          "node": {
            "latestStatus": "PENDING",
            "ref": {
              "name": "foo"
            }
          }
        }
      ]
    }
  }
}

export const deploymentStatusesSuccess = {
  "repository": {
    "deployments": {
      "edges": [
        {
          "node": {
            "latestStatus": "SUCCESS",
            "ref": {
              "name": "foo"
            }
          }
        }
      ]
    }
  }
}

export const deploymentsForRef = [
  {
    "url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments/4",
    "id": 12,
    "node_id": "MDEwOkRlcGxveW1lbnQyNTk1MzE2ODQ=",
    "sha": "038dade51d78ccf77d396793410d54af438ca7ae",
    "ref": "patricksimonian-patch-1",
    "task": "deploy",
    "payload": "{\"microservice\":\"react\",\"pr\":11,\"user\":\"patricksimonian\"}",
    "original_environment": "development",
    "environment": "development",
    "description": "deploy request from ci-cd",
    "creator": {
      "login": "digital-gov-bc-ca-cicd-dev[bot]",
      "id": 343,
      "node_id": "MDM6Qm90Njk2MDIyOTY=",
      "avatar_url": "https://avatars0.githubusercontent.com/in/76688?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D",
      "html_url": "https://github.com/apps/digital-gov-bc-ca-cicd-dev",
      "followers_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/followers",
      "following_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/following{/other_user}",
      "gists_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/subscriptions",
      "organizations_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/orgs",
      "repos_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/repos",
      "events_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/events{/privacy}",
      "received_events_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/received_events",
      "type": "Bot",
      "site_admin": false
    },
    "created_at": "2020-08-17T21:47:07Z",
    "updated_at": "2020-08-17T21:47:07Z",
    "statuses_url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments/259531684/statuses",
    "repository_url": "https://api.github.com/repos/patricksimonian/strapi-demo",
    "performed_via_github_app": null
  },
  {
    "url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments/4",
    "id": 12,
    "node_id": "MDEwOkRlcGxveW1lbnQyNTk1MzE2ODQ=",
    "sha": "038dade51d78ccf77d396793410d54af438ca7ae",
    "ref": "patricksimonian-patch-1",
    "task": "deploy",
    "payload": "{\"microservice\":\"react\",\"pr\":11,\"user\":\"patricksimonian\"}",
    "original_environment": "development",
    "environment": "staging",
    "description": "deploy request from ci-cd",
    "creator": {
      "login": "digital-gov-bc-ca-cicd-dev[bot]",
      "id": 343,
      "node_id": "MDM6Qm90Njk2MDIyOTY=",
      "avatar_url": "https://avatars0.githubusercontent.com/in/76688?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D",
      "html_url": "https://github.com/apps/digital-gov-bc-ca-cicd-dev",
      "followers_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/followers",
      "following_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/following{/other_user}",
      "gists_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/subscriptions",
      "organizations_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/orgs",
      "repos_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/repos",
      "events_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/events{/privacy}",
      "received_events_url": "https://api.github.com/users/digital-gov-bc-ca-cicd-dev%5Bbot%5D/received_events",
      "type": "Bot",
      "site_admin": false
    },
    "created_at": "2020-08-17T21:47:07Z",
    "updated_at": "2020-08-17T21:47:07Z",
    "statuses_url": "https://api.github.com/repos/patricksimonian/strapi-demo/deployments/259531684/statuses",
    "repository_url": "https://api.github.com/repos/patricksimonian/strapi-demo",
    "performed_via_github_app": null
  }
]

export const deploymentStatusForDeploymentWhereAllSuccessful = [
  {
    "url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/123/statuses/23434",
    "id": 1312,
    "node_id": "MDE2OkRlcGxveW1lbnRTdGF0dXMzNjMzOTA1MzQ=",
    "state": "success",
    "creator": {
      "login": "patricksimonian",
      "id": 3434,
      "node_id": "MDQ6VXNlcjIxMDQ2NzI3",
      "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/patricksimonian",
      "html_url": "https://github.com/patricksimonian",
      "followers_url": "https://api.github.com/users/patricksimonian/followers",
      "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
      "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
      "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
      "repos_url": "https://api.github.com/users/patricksimonian/repos",
      "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
      "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
      "type": "User",
      "site_admin": false
    },
    "description": "",
    "environment": "production",
    "target_url": "",
    "created_at": "2020-08-07T22:24:20Z",
    "updated_at": "2020-08-07T22:24:20Z",
    "deployment_url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/3434",
    "repository_url": "https://api.github.com/repos/bcgov/devhub-app-web",
    "performed_via_github_app": null
  },
  {
    "url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/3434/statuses/34434",
    "id": 34434,
    "node_id": "MDE2OkRlcGxveW1lbnRTdGF0dXMzNjMzOTA1MjA=",
    "state": "success",
    "creator": {
      "login": "patricksimonian",
      "id": 123,
      "node_id": "MDQ6VXNlcjIxMDQ2NzI3",
      "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/patricksimonian",
      "html_url": "https://github.com/patricksimonian",
      "followers_url": "https://api.github.com/users/patricksimonian/followers",
      "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
      "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
      "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
      "repos_url": "https://api.github.com/users/patricksimonian/repos",
      "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
      "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
      "type": "User",
      "site_admin": false
    },
    "description": "",
    "environment": "staging",
    "target_url": "",
    "created_at": "2020-08-07T22:24:16Z",
    "updated_at": "2020-08-07T22:24:16Z",
    "deployment_url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/343",
    "repository_url": "https://api.github.com/repos/bcgov/devhub-app-web",
    "performed_via_github_app": null
  }
]

export const deploymentStatusForDeployment = [
  {
    "url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/123/statuses/23434",
    "id": 1312,
    "node_id": "MDE2OkRlcGxveW1lbnRTdGF0dXMzNjMzOTA1MzQ=",
    "state": "success",
    "creator": {
      "login": "patricksimonian",
      "id": 3434,
      "node_id": "MDQ6VXNlcjIxMDQ2NzI3",
      "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/patricksimonian",
      "html_url": "https://github.com/patricksimonian",
      "followers_url": "https://api.github.com/users/patricksimonian/followers",
      "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
      "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
      "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
      "repos_url": "https://api.github.com/users/patricksimonian/repos",
      "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
      "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
      "type": "User",
      "site_admin": false
    },
    "description": "",
    "environment": "production",
    "target_url": "",
    "created_at": "2020-08-07T22:24:20Z",
    "updated_at": "2020-08-07T22:24:20Z",
    "deployment_url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/3434",
    "repository_url": "https://api.github.com/repos/bcgov/devhub-app-web",
    "performed_via_github_app": null
  },
  {
    "url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/3434/statuses/34434",
    "id": 34434,
    "node_id": "MDE2OkRlcGxveW1lbnRTdGF0dXMzNjMzOTA1MjA=",
    "state": "pending",
    "creator": {
      "login": "patricksimonian",
      "id": 123,
      "node_id": "MDQ6VXNlcjIxMDQ2NzI3",
      "avatar_url": "https://avatars1.githubusercontent.com/u/21046727?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/patricksimonian",
      "html_url": "https://github.com/patricksimonian",
      "followers_url": "https://api.github.com/users/patricksimonian/followers",
      "following_url": "https://api.github.com/users/patricksimonian/following{/other_user}",
      "gists_url": "https://api.github.com/users/patricksimonian/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/patricksimonian/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/patricksimonian/subscriptions",
      "organizations_url": "https://api.github.com/users/patricksimonian/orgs",
      "repos_url": "https://api.github.com/users/patricksimonian/repos",
      "events_url": "https://api.github.com/users/patricksimonian/events{/privacy}",
      "received_events_url": "https://api.github.com/users/patricksimonian/received_events",
      "type": "User",
      "site_admin": false
    },
    "description": "",
    "environment": "development",
    "target_url": "",
    "created_at": "2020-08-07T22:24:16Z",
    "updated_at": "2020-08-07T22:24:16Z",
    "deployment_url": "https://api.github.com/repos/bcgov/devhub-app-web/deployments/343",
    "repository_url": "https://api.github.com/repos/bcgov/devhub-app-web",
    "performed_via_github_app": null
  }
]