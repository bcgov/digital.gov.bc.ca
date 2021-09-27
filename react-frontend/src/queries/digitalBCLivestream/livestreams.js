import gql from 'graphql-tag';

const LIVESTREAM_QUERY = gql`
  query Livestream {
    digitalLivestreamContact {
      SubscriptionURL
      PastEpisodeURL
    }
    digitalBcLivestreams(limit: 1, sort: "BroadcastTime:desc") {
      Description
      BroadcastTime
      EventImage {
        url
      }
    }
  }
`;

export default LIVESTREAM_QUERY;
