import gql from 'graphql-tag';

// mutation {
// 	createUserFeedback(input:{data:{UserEmail:"Jon@gmail.com",Feedback:"You're doin awesome!",FoundWhatYouNeed:true}}) {
//     userFeedback {
//       UserEmail,
//       Feedback,
//       FoundWhatYouNeed
//     }
//   }
// }

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
