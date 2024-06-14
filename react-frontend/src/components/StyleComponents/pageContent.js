import styled, { createGlobalStyle } from 'styled-components';
import { Alert } from 'antd';
import { Grid } from 'react-flexbox-grid';

export const GlobaStyleSize = createGlobalStyle`
 html {
  font-size: 10px;
 }
`;

export const Callout = styled.div.attrs({
  className: 'callout styled-callout',
})`
&.styled-callout{
  border-left: 8px solid #fdb917;
  font-style: italic;
  font-weight: bold;
  margin: 36px 0;
  padding: 0 24px;
}
`;

// Used for the Digital Framework page
export const DigitalBlock = styled.div.attrs({
  className: 'digitalBlock styled-digital-block',
})`
&.styled-digital-block{
  padding-top: 60px;
  margin-bottom: 25px;
}
  @media only screen and (max-width: 400px) {
    &.styled-digital-block{
      margin-bottom: 40px;
    }
  }
`;

export const FooterStyled = styled.footer.attrs({
  className: 'styled-footer-styled',
})`
&.styled-footer-styled{
  background-color: #036;
  border-top: 2px solid #fcba19;
  color: #fff;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
}
`;

export const SimplePageBody = styled.div.attrs({
  className: 'styled-simple-page-body',
  id: 'content-body',
})`
&.styled-simple-page-body{
  margin: auto;
}
  @media only screen and (max-width: 800px) {
    &.styled-simple-page-body{
      width: 85%;
    }
  }
`;

// This will is the base style for horizontal alignment of page content
// all resposive elements must be in some kind of container object.
const HorizontalContainer = styled(Grid).attrs({
  className: 'horizontalAlignment styled-hor-cont',
})`
&.styled-hor-cont{
  margin: auto;
  max-width: 1065px;
  padding-left: 30px;
  padding-right: 20px;
  z-index: -2;
}
  @media screen and (min-width: 800px) {
    &.styled-hor-cont{
      padding-left: 107px;
    }
  }
  @media screen and (max-width: 800px) {
    &.styled-hor-cont{
      padding-left: 15px;
    }
  }
`;

const HorizontalNavContainer = styled.nav.attrs({
  className: 'horizontalAlignment styled-hor-nav-cont',
})`
&.styled-hor-nav-cont{
  margin: auto;
  max-width: 1065px;
  padding-left: 30px;
  padding-right: 20px;
  z-index: -2;
}
  @media screen and (min-width: 800px) {
    &.styled-hor-nav-cont{
      padding-left: 107px;
    }
  }
  @media screen and (max-width: 800px) {
    &.styled-hor-nav-cont{
      padding-left: 15px;
    }
  }
`;

export const BannerHorizontalContainer = styled(HorizontalContainer).attrs({
  className: 'bannerCenterText styled-banner-hor-cont',
})`
&.styled-banner-hor-cont{
  text-align: center;
}
`;

export const BreadcrumbContainer = styled(HorizontalNavContainer).attrs({
  className: 'breadcrumb styled-breadcrumb-cont',
  "aria-label":'breadcrumbs'
})`
&.styled-breadcrumb-cont{
  background-color: #f2f2f2;
}
`;

export const ContentBlockContainer = styled(HorizontalContainer).attrs({
  className: 'contentBlockContainer styled-content-block-cont',
})`
&.styled-content-block-cont{
  padding-bottom: 60px;
}
`;

export const FooterContainer = styled(HorizontalContainer).attrs({
  className: 'footerContainer styled-footer-cont',
})``;

export const PageContainer = styled(HorizontalContainer).attrs({
  className: 'pageContainer styled-page-cont',
})`
&.styled-page-cont{
  background-color: #f2f2f2;
  padding-top: 10px;
  padding-bottom: 70px;
}
  @media only screen and (max-width: 800px) {
    &.styled-page-cont{
      padding-top: 65px;
    }
  }
`;

export const NavBarContainer = styled(HorizontalContainer).attrs({
  className: 'navBar styled-nav-bar-cont',
})`
&.styled-nav-bar-cont{
  z-index: 0;
  max-width: 1200px;
}
`;

export const RouteBody = styled.div.attrs({
  className: 'routeBody styled-route-body',
})`
&.styled-route-body{
  background-color: #f2f2f2;
  z-index: -2;
}
  @media only screen and (max-width: 800px) {
    &.styled-route-body{
      padding-bottom: 60px;
    }
  }
`;

export const CovidBannerStyle = styled.div.attrs({
  className: 'styled-covid-bnr-stl',
})`
&.styled-covid-bnr-stl{
  position: fixed;
  width: 100%;
  z-index: 1000;
}
`;

export const CovidAlert = styled(Alert).attrs({
  className: 'styled-covid-alrt',
})`
&.styled-covid-alrt{
  background-color: #355992;
  border: none;
  text-align: center;
  width: 100%;
}
`;

// Learning Page
export const LearningSideImageTextBox = styled.div.attrs({
  className: 'styled-learn-side-img-txtb',
})`
&.styled-learn-side-img-txtb{
  text-align: left;
  padding-bottom: 20px;
  padding-right: 25px;
  padding-top: 20px;
}
`;
