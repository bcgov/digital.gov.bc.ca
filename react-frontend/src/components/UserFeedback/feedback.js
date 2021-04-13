import React, { useState } from 'react';
import { ModalStyled, ModalButton } from '../StyleComponents/modalAndForms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import StepError from './stepError';

export default function FeedbackForm() {
  // Handle state of form.
  const [formStep, setFormStep] = useState('Initial');

  //  Handle state of modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setFormStep('Initial');
  };

  let formContent;
  if (formStep == 'Initial') {
    formContent = (
      <Step1 setFormStep={setFormStep} data-testid="InitialState" />
    );
  } else if (formStep == 'FeedBack') {
    formContent = <Step2 setFormStep={setFormStep} data-testid="InputForm" />;
  } else if (formStep == 'ThankYou') {
    formContent = <Step3 data-testid="Thankyou" />;
  } else if (formStep == 'Error') {
    formContent = <StepError data-testid="Error" />;
  }

  return (
    <>
      <ModalButton type="primary" onClick={showModal}>
        <FontAwesomeIcon icon={faSmile} style={{ color: '#fcba19' }} />
        <FontAwesomeIcon icon={faSmile} style={{ color: '#fcba19' }} />
      </ModalButton>
      <ModalStyled
        title={null}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {formContent}
      </ModalStyled>
    </>
  );
}
