import React from 'react';
import BannerWithImage from '../PageElements/BannerWithImage/bannerWithImage';
import BannerSideImage from '../PageElements/BannerSideImage/bannerSideImage';
import CardList from './cardlist';
import DocumentTitle from 'react-document-title';

import { PageContainer } from '../StyleComponents/pageContent';
import { BannerSideImgSubTitle } from '../StyleComponents/bannerWithImage';

const bannerContent = (
  <BannerSideImgSubTitle>
    In this digital age, people expect fast and easy access to information and
    services.
    <br />
    Learn how the British Columbia Public Service is building teams and using
    modern technology to meet those expectations and deliver better government
    services.
  </BannerSideImgSubTitle>
);

const bannerTitle = 'Digital Government';

const homeImage = require('../../images/pngIllustrations/digitalHomePage.png');

function Home() {
  return (
    <DocumentTitle title="Home - Digital Government - Province of British Columbia">
      <PageContainer>
        <BannerSideImage
          content={bannerContent}
          title={bannerTitle}
          image={homeImage}
        />
        <CardList />
      </PageContainer>
    </DocumentTitle>
  );
}

export default Home;
