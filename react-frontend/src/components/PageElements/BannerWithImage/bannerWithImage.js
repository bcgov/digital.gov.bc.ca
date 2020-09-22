import React from 'react';

import {
  BannerImage,
  BannerSubTitle,
  BannerTextWrapper,
  BannerTitle,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';

const BannerWithImage = (content, image, title) => {
  return (
    <BannerWithImageWrapper>
      <BannerImage alt="" src={image} />
      {/* <div className="pageTextBanner"> */}
      <BannerTextWrapper>
        {/* <div> */}
        <BannerTitle>{title}</BannerTitle>
        {/* </div> */}
        <BannerSubTitle>{content}</BannerSubTitle>
      </BannerTextWrapper>
      {/* </div> */}
    </BannerWithImageWrapper>
  );
};

export default BannerWithImage;
