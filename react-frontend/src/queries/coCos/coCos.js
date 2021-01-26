import gql from 'graphql-tag';

const COCOS_QUERY = gql`
  query CoCos {
    coCos {
      uid
      Name
      Description
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
