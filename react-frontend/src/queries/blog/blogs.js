import gql from 'graphql-tag';

const BLOGS_QUERY = gql`
  query BlogPosts {
    blogPosts(sort: "published_at:desc") {
      uid
      Title
      SubTitle
      published_at
      CoverImage {
        formats
      }
      blog_author {
        Name
        Title
        Image {
          formats
        }
      }
    }
  }
`;

export default BLOGS_QUERY;
