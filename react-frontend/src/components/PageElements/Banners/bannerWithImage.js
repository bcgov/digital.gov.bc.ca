import React from 'react';
import { Grid } from 'react-flexbox-grid';

import {
  BannerSubTitle,
  BannerTextWrapper,
  BannerTitle,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';
import { BannerWithImageTextContainer } from '../../StyleComponents/pageContent';
const BannerWithImage = ({ content, image, title }) => {
  return (
    <BannerWithImageWrapper backgroundImage={image}>
      <BannerTextWrapper>
        <BannerWithImageTextContainer>
          <Grid>
            <BannerTitle>{title}</BannerTitle>
            <BannerSubTitle>{content}</BannerSubTitle>
          </Grid>
        </BannerWithImageTextContainer>
      </BannerTextWrapper>
    </BannerWithImageWrapper>
  );
};

export default BannerWithImage;
