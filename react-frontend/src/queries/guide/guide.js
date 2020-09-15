import gql from 'graphql-tag';

const GUIDE_QUERY = gql`
  query Guides($uid: String!) {
    guides(where: { uid: $uid }) {
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export default GUIDE_QUERY;
