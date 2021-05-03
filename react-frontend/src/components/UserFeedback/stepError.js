import React from 'react';
import { FormText, FormContainer } from '../StyleComponents/modalAndForms';

function StepError({}) {
  return (
    <FormContainer>
      <FormText>Something went wrong! Feel free to contact us at:</FormText>
      <a href="mailto:digital.government@gov.bc.ca">
        digital.government@gov.bc.ca
      </a>
    </FormContainer>
  );
}

export default StepError;
