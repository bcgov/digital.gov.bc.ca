import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

export const BreadcrumbContainer = styled.div.attrs({
  className: 'breadcrumb',
})`
  padding-top: 133px;
  position: relative;
  margin: auto;
  margin-bottom: -133px;
  width: 1045px;
  z-index: 5;
  @media only screen and (max-width: 800px) {
    margin-left: -13px;
    padding-left: 0;
    padding-top: 80px;
    width: 100%;
  }
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

export const SimpleTextContainer = styled.div.attrs({
  className: 'pageContainer',
  id: 'main-content-anchor',
})`
  font-size: 2rem;
  max-width: 80rem;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

//TODO Delete page content old when the refactor is complete.
export const PageContainerOld = styled.div.attrs({
  className: 'pageContainer',
  id: 'main-content-anchor',
})`
  background-color: #f2f2f2;
  padding-bottom: 70px;
  z-index: -2;
  @media only screen and (max-width: 800px) {
    padding-top: 65px;
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
  background-color: #355992;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const CovidTextStyle = styled.table`
  background-color: #355992;
  color: white;
  font-family: 'BC Sans';
  font-size: 18px;
  width: 100%;
`;

export const EmptyBannerStyle = styled.div`
    height:0%;
    padding: 0;
    z-index=0;
`;

export const CovidButtonStyle = styled.a`
  background-color: #355992;
  border: 0;
  float: right;
  font-weight: bold;
  vertical-align: top;
  width: 20%;
  :focus {
    outline-offset: 4px;
    outline: 4px solid #3b99fc;
  }
`;

const Link = ({ className, children, href }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const CovidLinkStyle = styled.a.attrs({
  className: 'AlertLink',
})`
  color: #fff;
  font-weight: bold;
  text-decoration: underline;
  :focus {
    outline-offset: 4px;
    outline: 4px solid #3b99fc;
    text-decoration: underline;
  }
  :hover {
    color: #b1bfd3 !important;
    text-decoration: underline;
  }
`;
