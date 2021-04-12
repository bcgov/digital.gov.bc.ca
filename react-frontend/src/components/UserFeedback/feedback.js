import React, { useState } from 'react';
import { Button } from 'antd';
import { ModalStyled, ModalButton } from '../StyleComponents/modalAndForms';
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
    formContent = <Step1 setFormStep={setFormStep} />;
  } else if (formStep == 'FeedBack') {
    formContent = <Step2 setFormStep={setFormStep} />;
  } else if (formStep == 'ThankYou') {
    formContent = <Step3 />;
  } else if (formStep == 'Error') {
    console.log('Error was called');
    formContent = <StepError />;
  }

  return (
    <>
      <ModalButton type="primary" onClick={showModal}>
        Open Modal
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
