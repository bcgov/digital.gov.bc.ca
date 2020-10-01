import React from 'react';

import {
  BannerImage,
  BannerSubTitle,
  BannerTextWrapper,
  BannerText,
  BannerTitle,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';

const BannerWithImage = ({ content, image, title }) => {
  return (
    <BannerWithImageWrapper>
      <BannerImage alt="" src={image} />
      <BannerTextWrapper>
        <BannerText>
          <a id="main-content-anchor"></a>
          <BannerTitle>{title}</BannerTitle>
          <BannerSubTitle>{content}</BannerSubTitle>
        </BannerText>
      </BannerTextWrapper>
    </BannerWithImageWrapper>
  );
};

export default BannerWithImage;
