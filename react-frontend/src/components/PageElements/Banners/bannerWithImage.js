import React from 'react';

import {
  BannerSubTitle,
  BannerTextWrapper,
  // BannerText,
  BannerTitle,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';
import { BannerWithImageTextContainer } from '../../StyleComponents/pageContent';
const BannerWithImage = ({ content, image, title }) => {
  return (
    <BannerWithImageWrapper backgroundImage={image}>
      <BannerTextWrapper>
        <BannerWithImageTextContainer>
          <BannerTitle>{title}</BannerTitle>
          <BannerSubTitle>{content}</BannerSubTitle>
        </BannerWithImageTextContainer>
      </BannerTextWrapper>
    </BannerWithImageWrapper>
  );
};

export default BannerWithImage;
