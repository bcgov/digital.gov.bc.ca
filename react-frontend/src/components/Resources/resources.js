import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import Guides from './guides';
import SimpleBanner from '../SimpleBanner/simpleBanner';
import Standards from './standards';

import { PageContainer } from '../StyleComponents/pageContent';
import '../../css/resources.css';

function Resources() {
  return (
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
  );
}

export default Resources;
