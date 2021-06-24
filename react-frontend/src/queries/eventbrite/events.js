import gql from 'graphql-tag';

const EVENTS_QUERY = gql`
  query EventbriteEvents($isClass: Boolean!) {
    eventbriteEvents(where: { IsCourse: $isClass }) {
      Name
      Description
      Url
      ImageUrl
      IsCourse
      IsSeries
      SeriesUID
      EventID
    }
  }
`;

export default EVENTS_QUERY;
