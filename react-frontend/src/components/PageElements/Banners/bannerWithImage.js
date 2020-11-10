import React from 'react';
import { Grid } from 'react-flexbox-grid';

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
          <Grid>
            <BannerTitle>{title}</BannerTitle>
            <BannerSubTitle>{content}</BannerSubTitle>
          </Grid>
        </BannerHorizontalContainer>
      </BannerTextWrapper>
    </BannerWithImageWrapper>
  );
};

export default BannerWithImage;
