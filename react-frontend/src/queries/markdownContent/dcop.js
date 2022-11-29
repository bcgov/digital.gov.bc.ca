import gql from 'graphql-tag';

const DCOP_QUERY = gql`
  query markdownContent($Path: String!) {
    markdownContents(where: { Path: $Path }) {
      Path
      Markdown
    }
  }
`;

export default DCOP_QUERY;