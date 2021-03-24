import gql from 'graphql-tag';

const COMMUNITIES_QUERY = gql`
  query Community {
    communityPages(sort: "Title:asc") {
      uid
      Title
      Description
    }
  }
`;

export default COMMUNITIES_QUERY;
