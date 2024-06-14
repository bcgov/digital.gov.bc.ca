import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import DocumentTitle from 'react-document-title';
import Guides from './guides';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import Standards from './standards';
import { HrefLinkInternal } from '../StyleComponents/htmlTags';
import { Col, Row } from 'react-flexbox-grid';
import {
  HrefLinkStandalone,
  ResourceLinkRow,
} from '../StyleComponents/htmlTags';
import { ResourcePageSubHeading } from '../StyleComponents/headings';
import { ContentBlockContainer } from '../StyleComponents/pageContent';

const resourcesImage =
  require('../../images/pngIllustrations/resourcesWhite.png').default;

function Resources() {
  return (
    <DocumentTitle title="Resources - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Resources'}
          content={
            'Guides and tools you can use right now to deliver excellent digital services.'
          }
          image={resourcesImage}
        />
        {/* <DigitalCards /> */}
        <Standards />
        <ForDesigners />

        

        <Guides />
        <ForDevelopers />
      </div>
    </DocumentTitle>
  );
}

export default Resources;
