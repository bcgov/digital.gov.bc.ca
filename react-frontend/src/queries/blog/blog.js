import gql from 'graphql-tag';

const BLOG_QUERY = gql`
  query BlogPosts($uid: String!) {
    blogPosts(where: { uid: $uid }) {
      Title
      SubTitle
      published_at
      blog_author {
        Name
        Title
      }
      CoverImage {
        url
      }
      Content
    }
  }
`;

export default BLOG_QUERY;
