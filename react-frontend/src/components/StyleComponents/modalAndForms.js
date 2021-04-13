import styled from 'styled-components';

import { Button, Modal } from 'antd';

export const FormButton = styled(Button)`
  background: #39598c;
  color: #fff;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
  :hover {
    background: #39598c;
    color: #fff;
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const FormContainer = styled.div`
  background: #f2f2f2;
  text-align: center;
`;

export const FormInputButton = styled.input`
  background: #39598c;
  border-style: none;
  color: #fff;
  float: right;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
  height: 32px;
  padding: 4px 15px 4px 15px;
  :hover {
    background: #39598c;
    color: #fff;
    text-decoration: underline;
    opacity: 0.8;
  }
`;
export const FormInputTextArea = styled.textarea`
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  height: 80px;
  margin-bottom: 16px;
  width: 100%;
`;

export const FormInputText = styled.input`
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  margin-bottom: 16px;
  width: 100%;
`;

export const FormText = styled.p`
  font-weight: 700;
`;
export const ModalButton = styled.button`
  border: none;
  border-radius: 8px 0 0 8px;
  background: #003366;
  height: 70px;
  width: 30px;
  position: fixed;
  right: 0;
  bottom: 24px;
  z-index: 1;
  :hover {
    background: #39598c;
    color: #fff;
    opacity: 0.8;
  }
`;

export const ModalStyled = styled(Modal)`
  .ant-modal-body {
    background: #f2f2f2;
  }
`;
