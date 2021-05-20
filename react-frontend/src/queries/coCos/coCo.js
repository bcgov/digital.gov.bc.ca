import gql from 'graphql-tag';

const COCO_QUERY = gql`
  query CoCos($uid: String!) {
    coCos(where: { uid: $uid }) {
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
        PaymentStructure
      }
      NumberOfUsers
      OnboardingTime
      SupportSchedule
      CoverImage {
        url
      }
      WhyShouldIUseThis {
        Heading
        Details
      }
      WhoIsUsingThis {
        ministry {
          MinistryAcronym
        }
        Summary
      }
      ComponentCreationDate
      GetStartedURL
      CoCoWebsite
      GetStartedSteps
      ServiceLevelSupport
      AdditionalTechnicalInformation
      RequirementsAndRestrictions
      Support
      MonthAndYearCreated {
        Month
        Year
      }
    }
  }
`;

export default COCO_QUERY;
