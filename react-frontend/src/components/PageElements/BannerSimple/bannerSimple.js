import React from 'react';

import {
  BannerSubTitle,
  BannerText,
  BannerTextWrapper,
  BannerTitle,
  BannerSimpleWrapper,
} from '../../StyleComponents/bannerSimple';

const SimpleBanner = ({ title, description }) => {
  return (
    <BannerSimpleWrapper>
      <BannerTextWrapper>
        <BannerText>
          <a id="main-content-anchor"></a>
          <BannerTitle>{title}</BannerTitle>
          <BannerSubTitle>{description}</BannerSubTitle>
        </BannerText>
      </BannerTextWrapper>
    </BannerSimpleWrapper>
  );
};

export default SimpleBanner;
