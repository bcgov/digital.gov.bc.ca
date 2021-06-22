import gql from 'graphql-tag';

const EVENTS_QUERY = gql`
  query EventbriteEvents {
    eventbriteEvents {
      Name
      Description
      Url
      ImageUrl
      IsCourse
      IsSeries
      SeriesUID
    }
  }
`;

export default EVENTS_QUERY;
