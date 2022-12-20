import gql from 'graphql-tag';

const WORDPRESS_QUERY = gql`
  query wordpressContent($uid: String!) {
    wordpressContents(where: { uid: $uid }) {
      uid
      HTML
    }
  }
`;

export default WORDPRESS_QUERY;