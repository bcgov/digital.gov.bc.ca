import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

export const SimpleTextContainer = styled.div`
  padding-top: 120px;
  font-size: 2rem;
  font-family: BC Sans;
  max-width: 80rem;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const PageContainer = styled.div.attrs({
  className: 'pageContainer',
})`
  background-color: #f2f2f2;
  padding-bottom: 70px;
  z-index: -2;
  @media only screen and (max-width: 800px) {
    padding-top: 65px;
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

export const CovidLinkStyle = styled(Link)`
  color: white;
  font-weight: 700;
  :hover {
    color: grey;
  }
  text-decoration: underline;
  }
`;
