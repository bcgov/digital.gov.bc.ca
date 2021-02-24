import gql from 'graphql-tag';

const FRAMEWORK_PROGRESS_QUERY = gql`
  query CoCos($category: String!) {
    digitalFrameworkProgresses(where: { Category: $category }) {
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

export default FRAMEWORK_PROGRESS_QUERY;
