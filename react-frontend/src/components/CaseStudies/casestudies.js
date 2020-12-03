import React from 'react';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import CardList from './cardlist';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CaseStudy from './caseStudy';
import DocumentTitle from 'react-document-title';

const caseStudiesIllustration = require('../../images/pngIllustrations/caseStudiesWhite.png');

const CaseStudies = () => {
  let { path } = useRouteMatch();
  return (
    <DocumentTitle title="Case Studies - Digital Government - Province of British Columbia">
      <Switch>
        <Route exact path={path}>
          <BannerSideImage
            content="Learn how digital approaches are getting results here in British Columbia."
            title="Case Studies"
            image={caseStudiesIllustration}
          />
          <CardList />
        </Route>
        <Route path={path + '/:caseStudyId'} component={CaseStudy} />
      </Switch>
    </DocumentTitle>
  );
};

export default CaseStudies;
