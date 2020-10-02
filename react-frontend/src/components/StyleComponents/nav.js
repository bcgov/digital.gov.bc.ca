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
    font-size: 16px;
    margin: 0px 5px 0px -5%;
  }
`;

export const SkipToMainContent = styled.a.attrs({
  className: 'skipToMainContent',
  accesskey: '0',
  href: '#main-content-anchor',
  'aria-label': 'Skip to main content',
})`
  position: absolute;
  left: -10000px;
  width: 120px;
  color: #fcba19;
  :hover {
    color: #fcba19;
  }
  :focus {
    position: static;
    height: auto;
  }
`;
