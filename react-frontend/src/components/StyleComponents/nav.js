import styled from 'styled-components';

export const NavBanner = styled.div.attrs({
  className: 'navBanner',
})`
  align-items: center;
  color: #fff;
  display: flex;
  height: 65px;
  justify-content: flex-start;
  margin: auto;
  @media screen and (min-width: 800px) {
    padding: 13px 0;
  }
`;

export const NavContentOnRight = styled.div.attrs({
  className: 'navContentOnRight',
})`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  @media screen and (min-width: 800px) {
    margin-left: -10px;
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
  display: flex;
  padding: 0 15px 0 0px;
  position: fixed;
  top: 45px;
  width: 100%;
  z-index: 1000;
  @media screen and (max-width: 1120px) {
    top: 64px;
  }
  @media screen and (min-width: 280px) and (max-width: 430px) {
    top: 121px;
  }
  @media screen and (min-width: 430px) and (max-width: 596px) {
    top: 100px;
  }
`;

export const NavHamburgerButton = styled.div.attrs({
  className: 'navButton',
})`
  cursor: pointer;
  display: block;
  font-size: 18pt;
  margin: 0 0 0 auto;
  width: auto;
  @media screen and (min-width: 800px) {
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
  @media screen and (min-width: 800px) {
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    height: 60px;
    margin-right: 0px;
    margin-top: -5px;
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
  position: fixed;
  top: 111px;
  width: 100%;
  z-index: 1000;
  @media screen and (min-width: 800px) {
    display: block;
  }

  @media screen and (max-width: 1120px) {
    top: 130px;
  }
`;

export const NavTitle = styled.p.attrs({
  className: 'navTitle',
})`
  color: white;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 0;
  @media screen and (min-width: 400px) {
    font-size: 18px;
    margin-left: 8px;
  }
  @media screen and (min-width: 800px) {
    font-size: 28px;
    margin-left: 16px;
  }
`;

export const SkipToMainContent = styled.a.attrs({
  className: 'skipToMainContent',
  accesskey: '0',
  href: '#main-content-anchor',
  'aria-label': 'Skip to main content',
})`
  color: #fcba19;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
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
    outline: 5px auto -webkit-focus-ring-color;
    text-decoration: underline;
  }
`;
