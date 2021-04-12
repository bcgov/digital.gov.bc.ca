import React from 'react';
import {
  FormInputButton,
  FormText,
  FormInputTextArea,
  FormInputText,
} from '../StyleComponents/modalAndForms';

import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';

import ADD_FEEDBACK from '../../queries/feedback/feedback';

function Step2({ setFormStep }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Handle submission of form to strapi
  const [createUserFeedback] = useMutation(ADD_FEEDBACK);

  const onSubmit = (data) => {
    console.log(data);
    createUserFeedback({
      variables: { email: data.email, feedback: data.feedback },
    })
      .then(({ data }) => {
        // you can do something with the response here
        setFormStep('ThankYou');
        console.log(data);
      })
      .catch((e) => {
        setFormStep('Error');
        console.log(e);
        // you can do something with the error here
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '24px' }}>
      {/* register your input into the hook by invoking the "register" function */}
      <FormText>Would you mind sharing what were you looking for?</FormText>
      <FormInputTextArea {...register('feedback')} />
      <FormText>
        Please provide your email (in case we need to follow up)
      </FormText>
      <FormInputText placeholder="E-mail" {...register('email')} />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      {/* <FormInputButton type="submit">Submit</FormInputButton> */}
      <FormInputButton type="submit" />
    </form>
  );
}

export default Step2;
