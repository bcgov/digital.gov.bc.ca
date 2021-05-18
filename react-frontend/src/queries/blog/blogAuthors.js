import gql from 'graphql-tag';

const BLOGAUTHORS_QUERY = gql`
  query BlogAuthors {
    blogAuthors {
      Name
      Title
      Image {
        formats
      }
    }
  }
`;

export default BLOGAUTHORS_QUERY;
