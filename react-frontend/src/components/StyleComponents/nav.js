import styled from 'styled-components';

export const navBarResize = 1200;

export const NavBarWrapper = styled.div.attrs()`
  border: none;
  position: '-webkit-sticky';
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const NavBanner = styled.div.attrs({
  className: 'navBanner',
})`
  align-items: center;
  color: #fff;
  display: flex;
  height: 65px;
  justify-content: flex-start;
  margin: auto;
  @media screen and (min-width: ${navBarResize}px) {
    padding: 13px 0;
  }
`;

export const NavBarHeader = styled.header.attrs({
  id: 'navheader',
})`
  -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
  -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
  background-color: #036;
  border-bottom: 2px solid #fcba19;
  box-shadow: 0 6px 8px -4px #b3b1b3;
  color: #fff;
`;

export const NavHamburgerButton = styled.div.attrs({
  className: 'navButton',
})`
  cursor: pointer;
  display: block;
  font-size: 18pt;
  margin: 0 0 0 auto;
  width: auto;
  @media screen and (min-width: ${navBarResize}px) {
    cursor: pointer;
    display: none;
    margin: 0 0 0 auto;
    padding-right: 25px;
    width: auto;
  }
`;

export const NavImage = styled.img.attrs({
  className: 'navImage',
})`
  height: 65px;
  width: auto;
  @media screen and (min-width: ${navBarResize}px) {
    height: 100%;
    width: 175px;
  }
`;

export const NavMain = styled.nav.attrs({
  classNmae: 'navigation-main',
  id: 'navbar',
})`
  -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
  -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
  background-color: #38598a;
  box-shadow: 0 6px 8px -4px #b3b1b3;
  color: #fcba19;
  display: none;
  min-height: 40px;
  width: 100%;
  @media screen and (min-width: ${navBarResize}px) {
    display: block;
  }
`;

export const NavTitle = styled.p.attrs({
  className: 'navTitle',
})`
  color: white;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0px 5px 0px 0px;
  @media screen and (min-width: 401px) {
    font-size: 20px;
  }
`;

export const SkipToMainContent = styled.a.attrs({
  className: 'skipToMainContent',
  accesskey: '0',
  href: '#main-content-anchor',
  'aria-label': 'Skip to main content',
})`
  color: #fcba19;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 5px 0 0 -5000px;
  padding: 0 5px;
  width: 120px;
  :hover {
    color: #fcba19;
    text-decoration: underline;
  }
  :focus {
    margin-left: 5px;
    outline: -webkit-focus-ring-color auto 5px;
    text-decoration: underline;
  }
`;
