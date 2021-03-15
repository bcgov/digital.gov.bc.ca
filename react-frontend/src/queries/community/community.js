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
      ExternalLink {
        WebsiteName
        Url
      }
      CommunityImage {
        url
      }
      KeyResources
    }
  }
`;

export default COMMUNITY_QUERY;
