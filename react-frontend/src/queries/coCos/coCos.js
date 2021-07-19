import gql from 'graphql-tag';

const COCOS_QUERY = gql`
  query CoCos {
    coCos(sort: "Name:asc") {
      uid
      Name
      ShortDescription
      ProjectStatus {
        Maintenance
        Status
      }
      TeamNameAndMinistry
      Tags {
        name
      }
      CostStructure {
        Cost
      }
      NumberOfUsers
      OnboardingTime
      SupportSchedule
    }
  }
`;

export default COCOS_QUERY;
