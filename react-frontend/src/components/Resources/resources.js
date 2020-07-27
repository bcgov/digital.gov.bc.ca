import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import Guides from './guides';
import ResourceBanner from './resourcebanner';
import Standards from './standards';

import '../../css/resources.css';
import '../../css/global.css';

function Resources() {
  return (
    <div className="pageContainer">
      <ResourceBanner />
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
