import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import DocumentTitle from 'react-document-title';
import Guides from './guides';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import Standards from './standards';

import { PageContainer } from '../StyleComponents/pageContent';

const resourcesImage = require('../../images/pngIllustrations/resourcesWhite.png');

function Resources() {
  return (
    <DocumentTitle title="Resources - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Resources'}
          content={
            'Policy, standards, guides, and tools you can use right now to deliver excellent digital services.'
          }
          image={resourcesImage}
        />
        <DigitalCards />
        <Standards />
        <Guides />
        <ForDesigners />
        <ForDevelopers />
      </div>
    </DocumentTitle>
  );
}

export default Resources;
