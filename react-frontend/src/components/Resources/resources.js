import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import Guides from './guides';
import SimpleBanner from '../BannerSimple/bannerSimple';
import Standards from './standards';

import '../../css/resources.css';
import '../../css/global.css';

function Resources() {
  return (
    <div className="pageContainer">
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
    </div>
  );
}

export default Resources;
