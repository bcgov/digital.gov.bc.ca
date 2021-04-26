import gql from 'graphql-tag';

const ADD_FEEDBACK = gql`
  mutation createUserFeedback($email: String!, $feedback: String!) {
    createUserFeedback(
      input: { data: { UserEmail: $email, Feedback: $feedback } }
    ) {
      userFeedback {
        UserEmail
        Feedback
      }
    }
  }
`;

export default ADD_FEEDBACK;
