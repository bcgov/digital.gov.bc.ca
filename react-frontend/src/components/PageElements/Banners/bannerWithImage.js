import React from 'react';

import {
  BannerSubTitle,
  BannerTextWrapper,
  BannerTitle,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';
import { BannerHorizontalContainer } from '../../StyleComponents/pageContent';
const BannerWithImage = ({ content, image, title }) => {
  return (
    <BannerWithImageWrapper backgroundImage={image}>
      <BannerTextWrapper>
        <BannerHorizontalContainer>
          <BannerTitle>{title}</BannerTitle>
          <BannerSubTitle>{content}</BannerSubTitle>
        </BannerHorizontalContainer>
      </BannerTextWrapper>
    </BannerWithImageWrapper>
  );
};

export default BannerWithImage;
