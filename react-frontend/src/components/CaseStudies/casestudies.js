import React from 'react';
import CaseStudiesBanner from './casestudiesbanner';
import CardList from './cardlist';
import MiningStudy from './mining';
import FarmingStudy from './farmers';
import MedicalStudy from './medicalservices';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import '../../css/casestudies.css';

function CaseStudies() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div className="caseStudyContainer">
            <CaseStudiesBanner />
            <div className="caseStudyBody">
              <CardList />
            </div>
          </div>
        </Route>
        <Route path={path + '/mining-study'} component={MiningStudy} />
        <Route path={path + '/medical-study'} component={MedicalStudy} />
        <Route path={path + '/farming-study'} component={FarmingStudy} />
      </Switch>
    </div>
  );
}

export default CaseStudies;
