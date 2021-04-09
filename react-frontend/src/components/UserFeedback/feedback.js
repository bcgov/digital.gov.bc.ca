import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { Mutation } from 'react-apollo';
import ADD_FEEDBACK from '../../queries/feedback/feedback';

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [addFeedback] = useMutation(ADD_FEEDBACK);

  const onSubmit = (data) => {
    console.log(data);

    // return (<Mutation mutation={ADD_FEEDBACK}, variables={{ email: data.email, feedback: data.feedback }} />)
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
