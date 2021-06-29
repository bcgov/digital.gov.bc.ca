import gql from 'graphql-tag';

const PODCASTS_QUERY = gql`
  query Podcasts {
    podcasts(limit: 3, sort: "AirDate:desc") {
      Title
      Link
      AirDate
      Description
      EpisodeNumber
      CoverImage {
        url
      }
    }
  }
`;

export default PODCASTS_QUERY;
