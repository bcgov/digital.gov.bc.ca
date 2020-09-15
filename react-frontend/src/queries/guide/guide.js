import gql from 'graphql-tag';

const GUIDE_QUERY = gql`
  query Guides($UID: String!) {
    guides(where: { uid: $UID }) {
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export default GUIDE_QUERY;
