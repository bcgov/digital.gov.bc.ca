import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { Row, Col } from 'react-flexbox-grid';
import { navBarResize } from './nav';
// This file contains styling for Link, a, ul, li, col, row, p html tags

export const BreadcrumbChevron = styled.span.attrs({
  'aria-hidden':"true",
  'className': 'styled-breadcrumb-chevron',
})`
&.styled-breadcrumb-chevron{
  color: grey;
  display: flex;
  font-size: 16px;
  font-weight: normal;
  padding: 0 6px 0 6px;
  text-decoration: none;
}
  @media only screen and (max-width: 800px) {
    &.styled-breadcrumb-chevron{
      font-size: 14px;
    }
  }
`;

export const BreadcrumbLI = styled.li.attrs({
  'className': 'styled-breadcrumb-li',
})`
&.styled-breadcrumb-li{
  color: black;
  display: flex;
  font-size: 16px;
  font-weight: normal;
  padding: 0 6px 0 6px;
  text-decoration: none;
}
  @media only screen and (max-width: 800px) {
    &.styled-breadcrumb-li{
      font-size: 14px;
    }
  }
`;

export const BreadcrumbUL = styled.ol.attrs({
  'className': 'styled-breadcrumb-ol',
})`
&.styled-breadcrumb-ol{
  color: #fff;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 16px;
}
`;

export const LinkExternalButton = styled.a.attrs({
  className: 'ExternalLinkButton styled-line-external-button',
})`
&.styled-line-external-button{
  background-color: #003366;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 18px;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
}
&.styled-line-external-button:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-line-external-button:hover {
    color: #fff;
    opacity: 0.8;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;

export const LinkInternalButton = styled(Link).attrs({
  className: 'ExternalLinkButton styled-line-external-button',
})`
&.styled-line-external-button{
  background-color: #003366;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 18px;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
}
&.styled-line-external-button:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-line-external-button:hover {
    color: #fff;
    opacity: 0.8;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;


export const CovidCol = styled(Col).attrs({
  className: 'styled-covid-col',
})`
&.styled-covid-col{
  color: #fff;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 18px;
}
`;

export const CovidLinkStyle = styled.a.attrs({
  target: '_blank',
  className: 'styled-covid-link-style',
  rel: 'noopener noreferrer'
})`
&.styled-covid-link-style{
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-decoration: underline;
}
&.styled-covid-link-style:hover {
    color: grey;
  }
`;

export const CovidLinkStyleButton = styled(CovidLinkStyle).attrs({
  className: 'styled-covid-link-style-btn',
})`
&.styled-covid-link-style-btn{
  font-weight: 700;
  text-decoration: none;
}
`;

export const DigitalFrameworkHeading = styled.h4.attrs({
  className: 'styled-digital-framework-heading',
})`
&.styled-digital-framework-heading{
  font-size: 21.6px;
  padding-top: 20px;
}
`;

export const DigitalFrameworkRow = styled(Row).attrs({
  className: 'digitalRow styled-digital-framework-row',
})`
&.styled-digital-framework-row{
  border-bottom: ${(props) => (props.underlined ? 'solid thin black' : '')};
  padding-bottom: 25px;
  padding-top: 20px;
}
  @media only screen and (max-width: 800px) {
    &.styled-digital-framework-row{
      padding-top: 15px;
    }
  }
`;

export const DigitalFrameworkToggle = styled.button.attrs({
  className: 'strategyProgressToggle styled-digital-framework-toggle',
})`
&.styled-digital-framework-toggle{
  background-color: #f2f2f2;
  border: none;
  border-bottom: ${(props) => (props.underlined ? 'solid thick #1A5A96' : '')};
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin: 30px 20px 30px 20px;
  padding-left: 0;
  padding-right: 0;
}
`;

export const FloatParagraphRight = styled.p.attrs({
  className: 'styled-floating-paragraph-right',
})`
&.styled-floating-paragraph-right{
  float: right;
  margin-top: 1em;
}
`;

export const FooterLink = styled.a.attrs({
  className: 'internalLink styled-footer-link',
})`
&.styled-footer-link{
  color: #fff;
  font-size: 14px;
  padding: 0 4px;
}
&.styled-footer-link:hover {
    color: white;
    text-decoration: underline;
  }
  &.styled-footer-link:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  @media only screen and (max-width: 900px) {
    &.styled-footer-link{
      font-size: 12px;
    }
  }
`;

export const FooterLinkInternal = styled(Link).attrs({
  className: 'internalLink styled-footer-link-internal',
})`
&.styled-footer-link-internal{
  color: #fff;
  font-size: 14px;
  padding: 0 4px;
}
&.styled-footer-link-internal:hover {
    color: white;
    text-decoration: underline;
  }
  &.styled-footer-link-internal:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  @media only screen and (max-width: 900px) {
    &.styled-footer-link-internal{
      font-size: 12px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export const FooterListItem = styled.li.attrs({
  className: 'styled-footer-list-item'
})`
&.styled-footer-list-item{
  align-items: center;
  border-right: 1px solid #4b5e7e;
  display: flex;
  padding: 0 9px;
  text-align: center;
}
`;

export const FooterUL = styled.ul.attrs({
  className: 'styled-footer-ul'
})`
&.styled-footer-ul{
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 46px; /* from Design System */
  list-style: none;
  margin: 0;
  padding-left: 0 !important; /* cancels default padding-inline-start for unordered lists */
}
`;

export const HrefLink = styled.a.attrs({
  className: 'externalLink styled-href-link',
})`
&.styled-href-link{
  color: #1a5a96;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  text-decoration: underline;
}
&.styled-href-link:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-href-link:hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkStandalone = styled.a.attrs({
  className: 'externalLink styled-href-link-standalone',
})`
&.styled-href-link-standalone{
  color: #1a5a96;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  text-decoration: underline;
}
&.styled-href-link-standalone:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-href-link-standalone:hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkStandaloneInternal = styled(Link).attrs({
  className: 'internalLink styled-href-link-standalone-internal',
})`
&.styled-href-link-standalone-internal{
  color: #1a5a96;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  text-decoration: underline;
}
&.styled-href-link-standalone-internal:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-href-link-standalone-internal:hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkInternal = styled(Link).attrs({
  className: 'internalLink styled-href-link-internal',
})`
&.styled-href-link-internal{
  color: #1a5a96;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
  text-decoration: underline;
}
&.styled-href-link-internal:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-href-link-internal:hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkScrollTo = styled(ScrollTo).attrs({
  className: 'styled-href-link-scroll-to',
  activeClass: 'active',
})`
&.styled-href-link-scroll-to{
  color: #1a5a96;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  text-decoration: underline;
}
&.styled-href-link-scroll-to:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-href-link-scroll-to:hover {
    color: blue;
    text-decoration: none;
  }
`;

export const NavBarHeaderLink = styled.a.attrs({
  className: 'navBarHeaderLink styled-nav-bar-header-link',
})`
&.styled-nav-bar-header-link{
  -webkit-font-smoothing: antialiased;
  color: white;
  font-size: 1.4em;
  font-style: bold;
  line-height: 1;
  padding: 5px;
}
&.styled-nav-bar-header-link:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

export const NavBarLi = styled.li.attrs({
  className: 'navBarLi styled-nav-bar-li',
})`
&.styled-nav-bar-li{
margin: 5px 0;
}
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-bar-li{
    margin: 0;
    }
  }
`;

export const NavBarLink = styled(Link).attrs({
  className: 'navBarLink styled-nav-bar-link',
})`
&.styled-nav-bar-link{
  color: #fff;
  display: flex;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal; /* 400 */
  padding: 0 15px 0 15px;
  text-decoration: none;
}
&.styled-nav-bar-link:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-nav-bar-link:hover {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-bar-link{
      border-right: 1px solid #9b9b9b;
    }
  }
`;

export const NavBarLinkExternal = styled.a.attrs({
  className: 'navBarLink styled-nav-bar-link-external',
})`
&.styled-nav-bar-link-external{
  color: #fff;
  display: flex;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal; /* 400 */
  padding: 0 15px 0 15px;
  text-decoration: none;
}
&.styled-nav-bar-link-external:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  &.styled-nav-bar-link-external:hover {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-bar-link-external{
      border-right: 1px solid #9b9b9b;
    }
  }
`;

export const NavBarLinkFirst = styled(NavBarLink).attrs({
  className: 'navBarLinkFirst styled-nav-bar-link-first',
})`
  @media (min-width: ${navBarResize}px) {
    
&.styled-nav-bar-link-first{
    padding-left: 0;
  }
}
`;

export const NavBarUl = styled.ul.attrs({
  className: 'navBarUl styled-nav-bar-ul',
})`
&.styled-nav-bar-ul{
  color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 8px;
}
&.styled-nav-bar-ul li::after {
  display: block;
  content: attr(title);
  font-weight: bold;
  height: 1px;
  color: transparent;
  overflow: hidden;
  visibility: hidden;
}
&.styled-nav-bar-ul .active {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-bar-ul{
      flex-direction: row;
    }
  }
`;

export const ResourceLinkRow = styled(Row).attrs({
  className: 'styled-resource-link-row',
})`
&.styled-resource-link-row{
  margin-left: 0;
  margin-right: 16px;
}
`;

export const StyledP = styled.p.attrs({
  className: 'digitalParagraph styled-styled-p',
})`
&.styled-styled-p{
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  position: relative;
}
`;
