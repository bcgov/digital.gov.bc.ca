import styled from 'styled-components';

export const BannerImage = styled.img.attrs({
  className: 'bannerImage styled-banner-image',
})`
&.styled-banner-image{
  margin-left: -10%;
  max-width: 200%;
  min-height: 100%;
  min-width: 100%;
  pointer-events: none;
  position: absolute;
}
  @media only screen and (max-width: 800px) {
    &.styled-banner-image{
      margin-left: -50%;
      max-width: 500%;
    }
  }

`;

export const BannerSubTitle = styled.div.attrs({
  className: 'bannerSubTitle styled-banner-sub-title',
})`
  &.styled-banner-sub-title p {
    color: white;
    font-size: 22px;
    margin: 0;
    position: relative;
  }

  @media only screen and (max-width: 800px) {
    &.styled-banner-sub-title{
      font-size: 10pt;
      text-align: justify;
    }
    &.styled-banner-sub-title p {
      font-size: 16px;
      text-align: center;
      width: 100%;
    }
  }
`;

export const BannerTextWrapper = styled.div.attrs({
  className: 'bannerTextWrapper styled-banner-text-wrapper',
})`
&.styled-banner-text-wrapper{
  background: rgba(0, 51, 102, 0.7);
  padding: 35px 0 35px 0;
  width: 100%;
  z-index: 1;
}
`;

export const BannerTitle = styled.h1.attrs({
  className: 'bannerTitle styled-banner-title',
})`
&.styled-banner-title{
  color: white;
  font-size: 37px;
  font-weight: 700;
  line-height: 37px;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
}
  @media only screen and (max-width: 800px) {
    &.styled-banner-title{
      font-size: 31px;
    }
  }

`;

export const BannerSideImageImg = styled.img.attrs({
  className: 'sideImage styled-banner-side-img-img',
})`
&.styled-banner-side-img-img{
  background: transparent;
  background-color: #f2f2f2;
  display: block;
  max-width: 100%;
  max-height: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
}
`;

export const BannerSideImgText = styled.div.attrs({
  className: 'sideImageText styled-banner-side-img-text',
})`
&.styled-banner-side-img-text{
  padding-bottom: 20px;
  padding-right: 25px;
  padding-top: 20px;
}
`;

export const BannerSideImgTitle = styled.h1.attrs({
  className: 'bannerTitle styled-banner-side-img-title',
})`
  &.styled-banner-side-img-title {
    color: #313132;
    font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
    font-size: 37px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
    text-align: left;
  }
    @media only screen and (max-width: 800px) {
      &.styled-banner-side-img-title{
        font-size: 31px;
        text-align: center;
      }
    }
  
`

export const BannerSideImgSubTitle = styled.div.attrs({
  className: 'subTitle styled-banner-side-img-subtitle',
})`
  &.styled-banner-side-img-subtitle {
    color: #313132;
    font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
    font-size: 19px;
    text-align: left;
  }
    @media only screen and (max-width: 800px) {
      &.styled-banner-side-img-subtitle {
        text-align: center;
      }
    }
`;

export const BannerWithImageWrapper = styled.div.attrs({
  className: 'banner styled-banner-with-image-wrapper',
})`
  &.styled-banner-with-image-wrapper {
    background-image: url(${(props) => props.backgroundImage});
    background-position: center center;
    background-size: cover;
    margin-bottom: 120px;
    overflow: hidden;
    padding-bottom: 60px;
    padding-top: 60px;
    position: relative;
    width: 100%;
  }

    @media only screen and (max-width: 800px) {
      &.styled-banner-with-image-wrapper {
        margin-bottom: 60px;
      }
    }
  
`;
