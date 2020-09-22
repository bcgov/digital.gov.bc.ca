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

export const PageContainer = styled.div`
  background-color: #f2f2f2;
  z-index: -2;
  @media only screen and (max-width: 800px) {
    padding-top: 65px;
  }
`;

//TODO: Fix padding top maybe
export const PageContainerCaseStudies = styled.div`
  background-color: #f2f2f2;
  z-index: -2;
  padding-bottom: 70px;
  padding-top: 100px;
  @media only screen and (max-width: 800px) {
    padding-top: 65px;
  }
`;

export const RouteBody = styled.div`
  background-color: #f2f2f2;
  z-index: -2;
  @media only screen and (max-width: 800px) {
    padding-bottom: 60px;
  }
`;

export const ContentBlock = styled.div`
  padding-bottom: 120px;
  @media only screen and (max-width: 800px) {
    padding-bottom: 60px;
  }
`;
