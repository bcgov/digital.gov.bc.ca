import React from 'react';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaseStudy from './caseStudy';
import DocumentTitle from 'react-document-title';

import { PageContainer } from '../StyleComponents/pageContent';
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
        <PageContainer>
          <Route path={path + '/:caseStudyId'} component={CaseStudy} />
        </PageContainer>
      </Switch>
    </DocumentTitle>
  );
};

export default CaseStudies;
