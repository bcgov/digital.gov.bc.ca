import React from 'react';
import CoCoCards from './coCoCards.js';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

const coCoImage = require('../../images/pngIllustrations/CoCoWhite.png')
  .default;

function CoCos() {
  return (
    <DocumentTitle title="Common Components - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={
            'Re-use existing common components to create your product or service.'
          }
          content={
            'Common components are re-usable building blocks, used together, or separately.'
          }
          image={coCoImage}
        />
        <CoCoCards />
      </div>
    </DocumentTitle>
  );
}

export default CoCos;
