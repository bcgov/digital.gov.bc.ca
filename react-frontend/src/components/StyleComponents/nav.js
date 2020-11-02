import styled from 'styled-components';
import { Drawer, Menu } from 'antd';
import { useMediaQuery } from 'react-responsive';

export const BannerContainer = styled.div.attrs({
  className: 'bannerContainer',
})`
  margin-top: 200px;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    margin-top: 150px;
  }
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
  padding: 0 30px 0 0px;
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
    margin: 0 0 20px auto;
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

  @media screen and (max-width: 400px) {
    margin-right: 25px;
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
  min-height: 50px;
  position: fixed;
  top: 112px;
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
  font-weight: normal;
  margin: 0px 5px 0px 25px;

  @media screen and (min-width: 900px) {
    font-size: 28px;
    visibility: visible;
  }
  @media screen and (min-width: 400px) and (max-width: 899px) {
    font-size: 18px;
    visibility: visible;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
    margin: 0px 5px 0px -5%;
  }
  @media screen and (max-width: 318px) {
    font-size: 14px;
    margin: 0px 5px 0px -5%;
  }
  @media screen and (max-width: 280px) {
    font-size: 12px;
    margin: 0px 5px 0px -5%;
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

export const CenterBanner = styled.div.attrs({
  className: 'centerBanner',
})`
  width: 1115px;
  line-height: 25px;
  @media screen and (max-width: 800px) {
    .centerBanner {
      display: flex;
    }
  }
  @media screen and (min-width: 1205px) and (max-width: 1440px) {
    margin-left: 1.5%;
  }
`;

export const TopHeader = styled.div.attrs({
  className: 'Banner',
})`
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  background-color: #38598a;
  justify-content: space-between;
  height: 50px;
  @media screen and (min-width: 1305px) and (max-width: 1440px) {
    margin-left: -1%;
  }
`;

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 24px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
    background-color: #38598a;
  }
  height: 130px;
  margin-top: ${(props) =>
    !props.breadCrumb
      ? props.isSmallScreen
        ? '189px'
        : props.IsScreen
        ? '168px'
        : props.isTablet
        ? '168px'
        : props.isTabletScreen
        ? '133px'
        : '69px'
      : '69px'};
`;

export const MenuItem = styled(Menu)`
  background-color: #38598a;
`;

export const MenuItemHome = styled(Menu.Item)`
  left: 80px;
  border-bottom-style: none;
`;

export const MenuItemResources = styled(Menu.Item)`
  left: 48px;
  border-bottom-style: none;
`;

export const MenuItemProducts = styled(Menu.Item)`
  left: 16px;
  border-bottom-style: none;
  color: #fff;
`;
