import React from 'react';

import Courses from './courses';
import Events from './events';
// import DigitalCards from './digitalcards';
// import ForDesigners from './fordesigners';
// import ForDevelopers from './fordevelopers';
import DocumentTitle from 'react-document-title';
// import Guides from './guides';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
// import Standards from './standards';

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
        {/* <DigitalCards />
        <Standards />
        <Guides />
        <ForDesigners />
        <ForDevelopers /> */}
      </div>
    </DocumentTitle>
  );
}

export default Learning;
