import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';

// This file contains styling for Link, a, ul, li, col, row html tags

export const HrefLink = styled.a.attrs({
  className: 'productCardLink',
})`
  color: #1a5a96;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  text-decoration: underline;
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
  padding-left: 0;
`;

export const NavBarUl = styled.ul.attrs({
  className: 'navBarUl',
})`
  color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 5px 0;
  padding-left: 0;
  .active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
