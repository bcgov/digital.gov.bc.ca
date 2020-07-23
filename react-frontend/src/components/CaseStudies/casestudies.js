import React from 'react';
import CaseStudiesBanner from './casestudiesbanner';
import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Template from './template';
import { MiningContent, FarmerContent, MedicalContent } from './content';

import '../../css/casestudies.css';

const CaseStudies = () => {
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
        <Route path={path + '/mining-study'}>
          <Template content={MiningContent} />
        </Route>
        <Route path={path + '/medical-study'}>
          <Template content={MedicalContent} />
        </Route>
        <Route path={path + '/farming-study'}>
          <Template content={FarmerContent} />
        </Route>
      </Switch>
    </div>
  );
};

export default CaseStudies;
