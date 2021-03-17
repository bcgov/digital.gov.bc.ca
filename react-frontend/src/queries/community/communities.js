import gql from 'graphql-tag';

const COMMUNITIES_QUERY = gql`
  query Community {
    communityPages {
      uid
      Title
      Description
    }
  }
`;

export default COMMUNITIES_QUERY;
