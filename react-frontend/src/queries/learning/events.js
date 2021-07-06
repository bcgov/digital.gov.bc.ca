import gql from 'graphql-tag';

const EVENTS_QUERY = gql`
  query EventbriteEvents($isClass: Boolean!) {
    eventbriteEvents(where: { IsCourse: $isClass }, sort: "StartTime:asc") {
      Name
      Description
      Url
      ImageUrl
      IsCourse
      IsSeries
      SeriesUID
      EventID
      StartTime
    }
  }
`;

export default EVENTS_QUERY;
