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
      AdditionalTechnicalInfo {
        Header
        Link
      }
      RequirementsAndRestrictions {
        Heading
        Link
      }
      GetStartedURL
      SupportContact {
        ContatactUsCallToAction
        PhoneURLorEmail
      }
      CoCoWebsite
      GetStartedSteps
      ServiceLevelSupport
    }
  }
`;

export default COCO_QUERY;
