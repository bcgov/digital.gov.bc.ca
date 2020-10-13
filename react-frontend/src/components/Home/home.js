import React from 'react';
import BannerWithImage from '../PageElements/BannerWithImage/bannerWithImage';
import CardList from './cardlist';
import '../../css/home.css';

import { PageContainerOld } from '../StyleComponents/pageContent';

const bannerContent = (
  <p style={{ color: 'white' }}>
    In this digital age, people expect fast and easy access to information and
    services.
    <br />
    Learn how the British Columbia Public Service is building teams and using
    modern technology to meet those expectations and deliver better government
    services.
  </p>
);

const bannerTitle = 'Digital Government';

const homeImage = require('../../images/home-banner.png');

function Home() {
  return (
    <PageContainerOld>
      <BannerWithImage
        content={bannerContent}
        title={bannerTitle}
        image={homeImage}
      />
      <CardList />
    </PageContainerOld>
  );
}

export default Home;
