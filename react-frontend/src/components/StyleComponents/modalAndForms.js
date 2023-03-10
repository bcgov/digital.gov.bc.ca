import styled from 'styled-components';

import { Button } from 'antd';

export const FormButton = styled(Button).attrs({
  className: 'styled-form-button',
})`
&.styled-form-button{
  background: #39598c;
  color: #fff;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
}
  &.styled-form-button:hover {
    background: #39598c;
    color: #fff;
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const FormContainer = styled.div.attrs({
  className: 'styled-form-container',
})`
&.styled-form-container{
  background: #f2f2f2;
  text-align: center;
}
`;

export const FormError = styled.p.attrs({
  className: 'styled-form-error',
})`
&.styled-form-error{
  color: red;
  font-weight: 700;
  margin-bottom: 0;
}
`;

export const FormInputButton = styled.input.attrs({
  className: 'styled-form-input-button',
})`
&.styled-form-input-button{
  background: #39598c;
  border-style: none;
  color: #fff;
  float: right;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
  height: 32px;
  margin-top: 16px;
  padding: 4px 15px 4px 15px;
}
  &.styled-form-input-button:hover {
    background: #39598c;
    color: #fff;
    text-decoration: underline;
    opacity: 0.8;
  }
`;
export const FormInputTextArea = styled.textarea.attrs({
  className: 'styled-form-input-textarea',
})`
&.styled-form-input-textarea{
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  height: 80px;
  margin-bottom: 16px;
  width: 100%;
}
`;

export const FormInputText = styled.input.attrs({
  className: 'styled-form-input-text',
})`
&.styled-form-input-text{
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  width: 100%;
}
`;

export const FormText = styled.p.attrs({
  className: 'styled-form-text',
})`
&.styled-form-text{
  font-weight: 700;
}
`;

const buttonWidth = '30px';
const modalBottom = '24px';

export const ModalButton = styled.button.attrs({
  className: 'styled-modal-button',
  'aria-label': 'Provide feedback on this site',
})`
&.styled-modal-button{
  border: none;
  border-radius: 8px 0 0 8px;
  background: #003366;
  height: 70px;
  width: ${buttonWidth};
  position: fixed;
  right: 0;
  bottom: ${modalBottom};
  z-index: 1;
}
  &.styled-modal-button:hover {
    background: #39598c;
    color: #fff;
    opacity: 0.8;
  }
`;

export const ModalButtonClose = styled.button.attrs({
  className: 'styled-modal-button-close',
})`
&.styled-modal-button-close{
  border: none;
  background: #f2f2f2;
  position: relative;
  top: -10px;
  right: -10px;
}
  &.styled-modal-button-close:hover {
    background: #f2f2f2;
    color: #000;
  }
`;

// The antd modal expect style props to be passed in as an object.
// To prevent some edge cases with the opening and closing of the
// modal, we avoid styled components in this case.
export const modalStyleProps = {
  position: 'fixed',
  bottom: '0',
  right: '0',
  margin: '0',
  paddingBottom: '0',
};

export const modalBodyStyleProps = {
  background: '#f2f2f2',
  position: 'fixed',
  bottom: modalBottom,
  right: buttonWidth,
  marginRight: '4px',
  marginLeft: '4px',
  borderRadius: '8px',
};
