import styled from 'styled-components';

export const navBarResize = 1200;

export const NavBarWrapper = styled.div.attrs({
  className: 'styled-nav-bar-wrapper',
})`
&.styled-nav-bar-wrapper{
  border: none;
  position: '-webkit-sticky';
  position: sticky;
  top: 0;
  z-index: 2;
}
`;

export const NavBanner = styled.div.attrs({
  className: 'navBanner styled-nav-banner',
})`
&.styled-nav-banner{
  align-items: center;
  color: #fff;
  display: flex;
  height: 65px;
  justify-content: flex-start;
  margin: auto;
}
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-banner{
      padding: 13px 0;
    }
  }
`;

export const NavBarHeader = styled.header.attrs({
  className: 'styled-nav-bar-header',
  id: 'navheader',
})`
&.styled-nav-bar-header{
  -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
  -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
  background-color: #036;
  border-bottom: 2px solid #fcba19;
  box-shadow: 0 6px 8px -4px #b3b1b3;
  color: #fff;
}
`;

export const NavHamburgerButton = styled.div.attrs({
  className: 'navButton styled-nav-ham-btn',
})`
&.styled-nav-ham-btn{
  cursor: pointer;
  display: block;
  font-size: 18pt;
  margin: 0 0 0 auto;
  width: auto;
}
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-ham-btn{
      cursor: pointer;
      display: none;
      margin: 0 0 0 auto;
      padding-right: 25px;
      width: auto;
    }
  }
`;

export const NavImage = styled.img.attrs({
  className: 'navImage styled-nav-img',
})`
&.styled-nav-img{
  height: 65px;
  width: auto;
}
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-img{
      height: 100%;
      width: 175px;
    }
  }
`;

export const NavMain = styled.nav.attrs({
  className: 'navigation-main styled-nav-main',
  id: 'navbar',
})`
&.styled-nav-main{
  -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
  -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
  background-color: #38598a;
  box-shadow: 0 6px 8px -4px #b3b1b3;
  color: #fcba19;
  display: none;
  min-height: 40px;
  width: 100%;
}
  @media screen and (min-width: ${navBarResize}px) {
    &.styled-nav-main{
      display: block;
    }
  }
`;

export const NavTitle = styled.p.attrs({
  className: 'navTitle styled-nav-title',
})`
&.styled-skip-to-main-cnt{
  color: white;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0px 5px 0px 0px;
}
  @media screen and (min-width: 401px) {
    &.styled-skip-to-main-cnt{
      font-size: 20px;
    }
  }
`;

export const SkipToMainContent = styled.a.attrs({
  className: 'skipToMainContent styled-skip-to-main-cnt',
  accesskey: '0',
  href: '#main-content-anchor',
  'aria-label': 'Skip to main content',
})`
&.styled-skip-to-main-cnt{
  color: #fcba19;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 5px 0 0 -5000px;
  padding: 0 5px;
  width: 120px;
}
  &.styled-skip-to-main-cnt:hover {
    color: #fcba19;
    text-decoration: underline;
  }
  &.styled-skip-to-main-cnt:focus {
    margin-left: 5px;
    outline: -webkit-focus-ring-color auto 5px;
    text-decoration: underline;
  }
`;
