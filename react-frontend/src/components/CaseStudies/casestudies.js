import React from 'react';
import CaseStudiesBanner from './casestudiesbanner';
import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Template from './template';

import '../../css/casestudies.css';
import '../../css/global.css';

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
        <div className="pageContainer">
          <Route path={path + '/:caseStudyId'} component={Template} />
        </div>
      </Switch>
    </div>
  );
};

export default CaseStudies;
