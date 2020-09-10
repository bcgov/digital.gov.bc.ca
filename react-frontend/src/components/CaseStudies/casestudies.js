import React from 'react';
import SimpleBanner from '../SimpleBanner/simpleBanner';
import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Template from './template';

import { PageContainerCaseStudies } from '../StyleComponents/pageContent';
import '../../css/casestudies.css';
import '../../css/global.css';

const CaseStudies = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div className="caseStudyContainer">
            {/* Note the refactor here may conflict with desired styling due to th
            digitalTop classname added to simple banner*/}
            <SimpleBanner
              title="Case Studies"
              description="Learn how digital approaches are getting results here in British
            Columbia."
            />
            <div className="caseStudyBody">
              <CardList />
            </div>
          </div>
        </Route>
        <PageContainerCaseStudies>
          <Route path={path + '/:caseStudyId'} component={Template} />
        </PageContainerCaseStudies>
      </Switch>
    </div>
  );
};

export default CaseStudies;
