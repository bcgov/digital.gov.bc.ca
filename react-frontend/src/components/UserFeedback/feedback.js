import React, { useState } from 'react';
import {
  ModalButton,
  ModalButtonClose,
  modalBodyStyleProps,
  modalStyleProps,
} from '../StyleComponents/modalAndForms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';
import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

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
  if (formStep === 'Initial') {
    formContent = (
      <Step1 setFormStep={setFormStep} data-testid="InitialState" />
    );
  } else if (formStep === 'FeedBack') {
    formContent = <Step2 setFormStep={setFormStep} data-testid="InputForm" />;
  } else if (formStep === 'ThankYou') {
    formContent = <Step3 data-testid="Thankyou" />;
  } else if (formStep === 'Error') {
    formContent = <StepError data-testid="Error" />;
  }

  return (
    <>
      <ModalButton
        type="primary"
        onClick={showModal}
        alt="Provide feedback on this site"
      >
        <FontAwesomeIcon icon={faSmile} style={{ color: '#fcba19' }} />
        <FontAwesomeIcon icon={faFrown} style={{ color: '#fcba19' }} />
      </ModalButton>
      <Modal
        closable={false}
        title={null}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={modalStyleProps}
        centered={false}
        bodyStyle={modalBodyStyleProps}
      >
        <ModalButtonClose onClick={handleCancel} style={{ float: 'right' }}>
          <CloseOutlined />
        </ModalButtonClose>
        {formContent}
      </Modal>
    </>
  );
}
