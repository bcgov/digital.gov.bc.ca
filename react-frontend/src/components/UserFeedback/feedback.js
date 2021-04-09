import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';

import ADD_FEEDBACK from '../../queries/feedback/feedback';

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [createUserFeedback] = useMutation(ADD_FEEDBACK);

  const onSubmit = (data) => {
    console.log(data);
    createUserFeedback({
      variables: { email: 'test@email.com', feedback: 'The rain in spain' },
    })
      .then(({ data }) => {
        // you can do something with the response here
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        // you can do something with the error here
      });
    // createUserFeedback(data.email, data.feedback)
    // .then(({ data }) => {
    //   // you can do something with the response here
    //   console.log(data)
    // })
    // .catch(e => {
    //   console.log(e)
    //   // you can do something with the error here
    // })

    // addFeedback({ variables: data })
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <p>Would you mind sharing what were you looking for?</p>
      <input placeholder="E-mail" {...register('feedback')} />
      <p>Please provide your email (in case we need to follow up)</p>
      <input {...register('email')} />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
