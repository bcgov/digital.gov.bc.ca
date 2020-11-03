import React from 'react';
import SimpleBanner from '../PageElements/Banners/bannerSimple';
import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaseStudy from './caseStudy';
import DocumentTitle from 'react-document-title';

import {
  PageContainer,
  PageContainerOld,
} from '../StyleComponents/pageContent';
import '../../css/casestudies.css';

const CaseStudies = () => {
  let { path } = useRouteMatch();
  return (
    <DocumentTitle title="Case Studies - Digital Government - Province of British Columbia">
      <Switch>
        <Route exact path={path}>
          <PageContainer>
            <SimpleBanner
              title="Case Studies"
              description="Learn how digital approaches are getting results here in British
            Columbia."
            />
            <CardList />
          </PageContainer>
        </Route>
        <PageContainerOld>
          <Route path={path + '/:caseStudyId'} component={CaseStudy} />
        </PageContainerOld>
      </Switch>
    </DocumentTitle>
  );
};

export default CaseStudies;
