import React from 'react';
import DigitalCards from './digitalcards';
import ForDesigners from './fordesigners';
import ForDevelopers from './fordevelopers';
import Guides from './guides';
import ResourceBanner from './resourcebanner';
import Standards from './standards';

import '../../css/resources.css';

function Resources() {
  return (
    <div className="resourceContainer">
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
