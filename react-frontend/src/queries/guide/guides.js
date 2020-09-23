import gql from 'graphql-tag';

const GUIDES_QUERY = gql`
  query Guides {
    guides {
      title
      summary
      uid
      createdAt
      updatedAt
    }
  }
`;

export default GUIDES_QUERY;
