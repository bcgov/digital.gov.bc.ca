import React from 'react';
import DocumentTitle from 'react-document-title';

import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer } from '../StyleComponents/pageContent';
import { HrefLinkScrollTo } from '../StyleComponents/htmlTags';
import { DigitalBlock } from '../StyleComponents/pageContent';
import Strategy from './strategy';

const digitalFrameworkImage = require('../../images/pngIllustrations/digitalFrameworkWhite.png');

const DigitalFramework = () => {
  return (
    <DocumentTitle title="Digital Framework - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Digital Framework'}
          content={
            'This is the Digital Framework: our plan for becoming a digital government. We consider it a draft – an “alpha” version – that reserves the flexibility to learn and adapt as we go.'
          }
          image={digitalFrameworkImage}
        />
        <Strategy />
      </div>
    </DocumentTitle>
  );
};

export default DigitalFramework;
