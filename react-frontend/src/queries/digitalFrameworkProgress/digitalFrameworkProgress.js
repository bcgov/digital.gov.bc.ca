import gql from 'graphql-tag';

const COCO_QUERY = gql`
  query CoCos($uid: String!) {
    digitalFrameworkProgresses(where: { Category: "ServiceDelivery" }) {
      Name
      Description
      ProblemStatement
      ReportingPeriod
      MoreInformation
      Achievements
      Milestones
      FuturePlans
      ministry {
        MinistryAcronym
      }
    }
  }
`;

export default COCO_QUERY;
