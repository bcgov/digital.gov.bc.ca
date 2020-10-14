import React from 'react';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaseStudy from './caseStudy';

import { PageContainerOld } from '../StyleComponents/pageContent';
import '../../css/casestudies.css';

const CaseStudies = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <PageContainerOld>
            <SimpleBanner
              title="Case Studies"
              description="Learn how digital approaches are getting results here in British
            Columbia."
            />
            <div className="caseStudyBody">
              <CardList />
            </div>
          </PageContainerOld>
        </Route>
        <PageContainerOld>
          <Route path={path + '/:caseStudyId'} component={CaseStudy} />
        </PageContainerOld>
      </Switch>
    </div>
  );
};

export default CaseStudies;
