import gql from 'graphql-tag';

const GUIDE_QUERY = gql`
  query Guides($UID: String!) {
    guides(where: { UID: $UID }) {
      Title
      Content
      createdAt
      updatedAt
    }
  }
`;

export default GUIDE_QUERY;
