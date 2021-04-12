import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'antd';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Handle state of form.
  const [formStep, setFormStep] = useState('Initial');

  //  Handle state of modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={null}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {formContent}
      </Modal>
    </>
  );
}
