import gql from 'graphql-tag';

const BLOGS_QUERY = gql`
  query BlogPosts {
    blogPosts(sort: "published_at:desc") {
      uid
      Title
      SubTitle
      published_at
      blog_author {
        Name
        Title
      }
    }
  }
`;

export default BLOGS_QUERY;
