import React from 'react';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import CardList from './cardList';
import DocumentTitle from 'react-document-title';
import BCLivestream from './bcLivesteam';

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

const homeImage =
  require('../../images/pngIllustrations/digitalHomePageWhite.png').default;

function Home() {
  return (
    <DocumentTitle title="Home - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          content={bannerContent}
          title={bannerTitle}
          image={homeImage}
        />
        <BCLivestream />
        <CardList />
      </div>
    </DocumentTitle>
  );
}

export default Home;
