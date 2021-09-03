import gql from 'graphql-tag';

const LEARNING_ADMINS_QUERY = gql`
  query LearningAdmins {
    learningAdmins(limit: 2) {
      Name
      Role
      Email
      Office
      HeadShot {
        url
      }
    }
  }
`;

export default LEARNING_ADMINS_QUERY;
