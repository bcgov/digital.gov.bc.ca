import gql from 'graphql-tag';

const BLOGLIST_QUERY = gql`
  query BlogPosts {
    blogPosts(sort: "published_at:desc") {
      uid
    }
  }
`;

export default BLOGLIST_QUERY;
