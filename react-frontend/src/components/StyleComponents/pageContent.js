import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Alert } from 'antd';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

export const BreadcrumbContainer = styled.div.attrs({
  className: 'breadcrumb',
})`
  margin: auto;
  width: 1045px;
`;

// Used for the Digital Framework page
export const DigitalBlock = styled.div.attrs({
  className: 'digitalBlock',
})`
  padding-top: 60px;
  margin-bottom: 25px;
  @media only screen and (max-width: 400px) {
    margin-bottom: 40px;
  }
`;

export const FooterContainer = styled.div.attrs({
  className: 'footerContainer',
})`
  display: flex;
  max-width: 1115px; /* keeps footer inline with navbar; remove this and the padding styles below when we refactor containers */
  padding-left: 30px;
  @media screen and (min-width: 800px) {
    padding-left: 107px;
  }

  @media screen and (max-width: 800px) {
    padding-left: 15px;
  }
`;

export const FooterStyled = styled.footer.attrs()`
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
`;

export const SimplePageBody = styled.div.attrs({
  id: 'content-body',
})`
  margin: auto;
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
`;

//TODO This will be the new standard for Page containers.
// When refactor complete there should be a single pageContainer
// That resizes properly with the navbar and site logo
export const PageContainer = styled.div.attrs({
  className: 'pageContainer',
  id: 'main-content-anchor',
})`
  background-color: #f2f2f2;
  padding: 10px 20px 70px 30px;
  margin: auto;
  max-width: 1065px;
  z-index: -2;
  @media screen and (min-width: 800px) {
    padding-left: 107px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 15px;
  }

  @media only screen and (max-width: 800px) {
    padding-top: 65px;
  }
`;

export const NavBarContainer = styled.div.attrs({
  className: 'navBar',
})`
  display: flex;
  padding-left: 30px;
  width: 1115px;
  @media screen and (min-width: 800px) {
    padding-left: 107px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 15px;
  }
`;

export const RouteBody = styled.div.attrs({
  className: 'routeBody',
})`
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

export const CovidBannerStyle = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const CovidAlert = styled(Alert)`
  background-color: #355992;
  border: none;
  textalign: center;
  width: 100%;
`;
