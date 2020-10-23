import styled from 'styled-components';

export const BannerImage = styled.img.attrs({
  className: 'bannerImage',
})`
  margin-left: -10%;
  max-width: 200%;
  min-height: 100%;
  min-width: 100%;
  pointer-events: none;
  position: absolute;
  @media only screen and (max-width: 800px) {
    margin-left: -50%;
    max-width: 500%;
  }
`;

export const BannerSubTitle = styled.div.attrs({
  className: 'bannerSubTitle',
})`
  p {
    color: white;
    font-size: 22px;
    position: relative;
  }

  @media only screen and (max-width: 800px) {
    font-size: 10pt;
    text-align: justify;
    p {
      font-size: 16px;
      text-align: center;
      width: 100%;
    }
  }
`;

export const BannerText = styled.div.attrs({
  className: 'bannerText',
})`
  margin: auto;
  padding-top: 10px;
  text-align: center;
  width: 975px;
  @media only screen and (max-width: 800px) {
    margin-left: 8%;
    padding-top: 80px;
    width: 84%;
  }
`;

export const BannerTextWrapper = styled.div.attrs({
  className: 'bannerTextWrapper',
})`
  background: rgba(0, 51, 102, 0.7);
  margin-bottom: 120px;
  margin-top: 260px;
  padding: 25px;
  position: absolute;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 800px) {
    margin-top: 60px;
    padding-top: 0;
  }
`;

export const BannerTitle = styled.h1.attrs({
  className: 'bannerTitle',
})`
  color: white;
  font-size: 37px;
  font-weight: bold;
  line-height: 37px;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  @media only screen and (max-width: 800px) {
    font-size: 31px;
  }
`;

export const BannerSideImageImg = styled.img.attrs({
  className: 'sideImage',
})`
  background: transparent;
  background-color: #f2f2f2;
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

export const BannerWithImageWrapper = styled.div.attrs({
  className: 'banner',
})`
  height: 600px;
  margin-bottom: 120px;
  overflow: hidden;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 800px) {
    height: 520px;
    margin-bottom: 60px;
    margin-top: -50px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
`;
