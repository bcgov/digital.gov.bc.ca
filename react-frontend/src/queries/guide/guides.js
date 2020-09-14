import gql from 'graphql-tag';

const GUIDES_QUERY = gql`
  query Guides {
    guides {
      Title
      Summary
      UID
      createdAt
      updatedAt
    }
  }
`;

export default GUIDES_QUERY;
