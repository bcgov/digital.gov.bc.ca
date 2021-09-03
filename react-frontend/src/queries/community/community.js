import gql from 'graphql-tag';

const COMMUNITY_QUERY = gql`
  query Community($uid: String!) {
    communityPages(where: { uid: $uid }) {
      uid
      Title
      Description
      WhoWeAre
      HowToParticipate
      WhatWeDo
      CommunityEmail {
        Name
        Email
      }
      CommunityImage {
        url
      }
      RocketChatLink
      YammerLink
      MSTeamsLink
      Website
      KeyResources
    }
  }
`;

export default COMMUNITY_QUERY;
