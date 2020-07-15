import React from 'react';
import CaseStudiesBanner from './casestudiesbanner';
import CardList from './cardlist';

import '../../css/casestudies.css';

function CaseStudies() {
  return (
    <div className="caseStudyContainer">
      <CaseStudiesBanner />
      <div className="caseStudyBody">
        <CardList />
      </div>
    </div>
  );
}

export default CaseStudies;
