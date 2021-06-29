import React from 'react';

import ContactUs from './contactUs';
import Courses from './courses';
import Events from './events';
import Podcast from './podcast';

import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

const learningImage = require('../../images/pngIllustrations/learningWhite.png')
  .default;

function Learning() {
  return (
    <DocumentTitle title="Learning - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Learning'}
          content={
            'Understand and adopt new approaches to teamwork and technology.'
          }
          image={learningImage}
        />
        <Courses />
        <Events />
        <ContactUs />
        <Podcast />
      </div>
    </DocumentTitle>
  );
}

export default Learning;
