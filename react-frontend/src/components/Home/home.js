import React from 'react';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import CardList from './cardlist';
import DocumentTitle from 'react-document-title';

import { PageContainer } from '../StyleComponents/pageContent';

const bannerContent = (
  <div>
    In this digital age, people expect fast and easy access to information and
    services.
    <br />
    Learn how the British Columbia Public Service is building teams and using
    modern technology to meet those expectations and deliver better government
    services.
  </div>
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
