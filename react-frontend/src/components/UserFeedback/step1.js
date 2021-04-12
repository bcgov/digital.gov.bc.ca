import React from 'react';
import {
  FormButton,
  FormText,
  FormContainer,
} from '../StyleComponents/modalAndForms';

function Step1({ setFormStep }) {
  return (
    <FormContainer>
      <FormText>Did you find what you were looking for?</FormText>
      <FormButton onClick={() => setFormStep('ThankYou')}>Yes</FormButton>
      <FormButton onClick={() => setFormStep('FeedBack')}>No</FormButton>
    </FormContainer>
  );
}

export default Step1;
