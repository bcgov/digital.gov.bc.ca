import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { Row, Col } from 'react-flexbox-grid';

// This file contains styling for Link, a, ul, li, col, row, p html tags

export const BreadcrumbLI = styled.li`
  display: flex;
  font-size: 16px;
  font-weight: normal;
  padding: 0 6px 0 6px;
  text-decoration: none;
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const BreadcrumbUL = styled.ul`
  color: #fff;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 0 0 -8px; /* negative left margin aligns breadcrumb with page elements */
  padding-left: 0;
  padding-top: 16px;
`;

export const CovidCol = styled(Col)`
  color: #fff;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 18px;
`;

export const CovidLinkStyle = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: white;
  font-size: 18px;
  font-weight: 700;
  :hover {
    color: grey;
  }
  text-decoration: underline;
  }
`;

export const CovidLinkStyleButton = styled(CovidLinkStyle)`
  font-weight: bold;
  text-decoration: none;
`;

export const DigitalFrameworkP = styled.p.attrs({
  className: 'digitalParagraph',
})`
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  position: relative;
`;

export const DigitalFrameworkRow = styled(Row).attrs({
  className: 'digitalRow',
})`
  border-bottom: ${(props) => (props.underlined ? 'solid thin black' : '')};
  padding-bottom: 25px;
  padding-top: 20px;
  @media only screen and (max-width: 800px) {
    padding-top: 15px;
  }
`;

export const FooterLink = styled.a.attrs({
  className: 'internalLink',
})`
  color: #fff;
  font-size: 14px;
  padding: 0 4px;
  :hover {
    color: white;
    text-decoration: underline;
  }
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const FooterLinkInternal = styled(Link).attrs({
  className: 'internalLink',
})`
  color: #fff;
  font-size: 14px;
  padding: 0 4px;
  :hover {
    color: white;
    text-decoration: underline;
  }
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const FooterListItem = styled.li`
  align-items: center;
  border-right: 1px solid #4b5e7e;
  display: flex;
  padding: 0 9px;
  text-align: center;
`;

export const FooterUL = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 46px; /* from Design System */
  list-style: none;
  padding-left: 0 !important; /* cancels default padding-inline-start for unordered lists */
`;

export const HrefLink = styled.a.attrs({
  className: 'productCardLink',
})`
  color: #1a5a96;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  text-decoration: underline;
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  :hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkStandalone = styled.a.attrs({
  className: 'externalLink',
})`
  color: #1a5a96;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-decoration: underline;
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  :hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkStandaloneInternal = styled(Link).attrs({
  className: 'internalLink',
})`
  color: #1a5a96;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-decoration: underline;
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  :hover {
    color: blue;
    text-decoration: none;
  }
`;

export const HrefLinkScrollTo = styled(ScrollTo).attrs({
  activeClass: 'active',
})`
  color: #1a5a96;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  text-decoration: underline;
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  :hover {
    color: blue;
    text-decoration: none;
  }
`;

export const NavBarHeaderLink = styled.a.attrs({
  className: 'navBarHeaderLink',
})`
  -webkit-font-smoothing: antialiased;
  color: white;
  font-size: 1.4em;
  font-style: bold;
  line-height: 1;
  padding: 5px;
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

export const NavBarLi = styled.li.attrs({
  className: 'navBarLi',
})`
  margin: 5px 0;
  @media screen and (min-width: 800px) {
    margin: 0;
  }
`;

export const NavBarLink = styled(Link).attrs({
  className: 'navBarLink',
})`
  color: #fff;
  display: flex;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal; /* 400 */
  padding: 0 15px 0 15px;
  text-decoration: none;
  :focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
  :hover {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: 800px) {
    border-right: 1px solid #9b9b9b;
  }
`;

export const NavBarLinkFirst = styled(NavBarLink).attrs({
  className: 'navBarLinkFirst',
})`
  @media (min-width: 800px) {
    padding-left: 0;
  }
`;

export const NavBarUl = styled.ul.attrs({
  className: 'navBarUl',
})`
  color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 8px;
  .active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
