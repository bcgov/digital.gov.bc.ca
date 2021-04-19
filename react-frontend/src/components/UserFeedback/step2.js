import React from 'react';
import {
  FormError,
  FormInputButton,
  FormText,
  FormInputTextArea,
  FormInputText,
} from '../StyleComponents/modalAndForms';

import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';

import ADD_FEEDBACK from '../../queries/feedback/feedback';

// Regex for valid emails
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function Step2({ setFormStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle submission of form to strapi
  const [createUserFeedback] = useMutation(ADD_FEEDBACK);

  const onSubmit = (data) => {
    createUserFeedback({
      variables: { email: data.email, feedback: data.feedback },
    })
      .then(({ data }) => {
        setFormStep('ThankYou');
      })
      .catch((e) => {
        setFormStep('Error');
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '24px' }}>
      <FormText>Would you mind sharing what were you looking for?</FormText>
      <FormInputTextArea {...register('feedback')} />
      <FormText>
        Please provide your email (in case we need to follow up)
      </FormText>
      <FormInputText
        placeholder="E-mail"
        {...register('email', { pattern: re })}
      />
      {errors.email && <FormError>Please enter a valid email.</FormError>}
      <FormInputButton type="submit" />
    </form>
  );
}

export default Step2;
