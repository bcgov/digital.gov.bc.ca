import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

export const SimpleTextContainer = styled.div`
  padding-top: 120px;
  font-size: 2rem;
  max-width: 80rem;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
