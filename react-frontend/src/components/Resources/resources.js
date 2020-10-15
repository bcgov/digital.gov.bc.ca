import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import DocumentTitle from 'react-document-title';
import Guides from './guides';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import Standards from './standards';

import { PageContainer } from '../StyleComponents/pageContent';

import '../../css/resources.css';

function Resources() {
  return (
    <DocumentTitle title="Resources - Digital Government - Province of British Columbia">
      <PageContainer>
        <SimpleBanner
          title="Resources"
          description=" Policy, standards, guides, and tools you can use right now to
        deliver excellent digital services."
        />
        <div className="resourcesBody">
          <DigitalCards />
          <Standards />
          <Guides />
          <ForDesigners />
          <ForDevelopers />
        </div>
      </PageContainer>
    </DocumentTitle>
  );
}

export default Resources;
