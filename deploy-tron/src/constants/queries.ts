export const LATEST_STATUS_QL_QUERY = `
query latestStatus($owner: String!, $repo: String!, $env: String!, $maxLookup: Int = 10) 
{
  repository(name:$repo, owner:$owner) {
    deployments(orderBy: {field: CREATED_AT, direction: DESC}, first:$maxLookup, environments:[$env]) {
      edges {
        node {
          latestStatus {
            state
          }
          ref {
            name
          }
        }
      }
    }
  }
}  
`;
