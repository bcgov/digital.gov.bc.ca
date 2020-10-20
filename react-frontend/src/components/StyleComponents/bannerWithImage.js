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
  max-width: 960px;
  text-align: center;
`;

export const BannerTextWrapper = styled.div.attrs({
  className: 'bannerTextWrapper',
})`
  background: rgba(0, 51, 102, 0.7);
  padding: 16px;
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

export const BannerWithImageWrapper = styled.div.attrs({
  className: 'banner',
})`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 0 60px;
  padding: 230px 0 120px;
  width: 100%;
  @media only screen and (max-width: 800px) {
    padding: 170px 0 10px;
  }
`;
