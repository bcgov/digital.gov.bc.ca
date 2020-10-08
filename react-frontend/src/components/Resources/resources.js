import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import Guides from './guides';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import Standards from './standards';

import {
  PageContainerResource,
  SimplePageBody,
} from '../StyleComponents/pageContent';

function Resources() {
  return (
    <PageContainerResource>
      <SimpleBanner
        title="Resources"
        description=" Policy, standards, guides, and tools you can use right now to
        deliver excellent digital services."
      />
      <SimplePageBody>
        <DigitalCards />
        <Standards />
        <Guides />
        <ForDesigners />
        <ForDevelopers />
      </SimplePageBody>
    </PageContainerResource>
  );
}

export default Resources;
