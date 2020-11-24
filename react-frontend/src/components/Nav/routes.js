import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import CaseStudies from '../../components/CaseStudies/casestudies';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';
import DigitalFramework from '../DigitalFramework/digitalFramework';
import Products from '../products/products';
import DigitalPrinciples from '../../components/DigitalPrinciples/digitalPrinciples';
// import GuidesPage from '../../components/Guides/guides';
// import GuidePage from '../../components/Guides/guide';
import BreadCrumbs from './breadcrumbs';
import NotFound from '../NotFoundPage/notFoundPage'

const DisplayNames = {
  'case-studies': 'Case Studies',
  'communication-platforms': 'Communication Platform',
  'digital-framework': 'Digital Framework',
  'digital-principles': 'Digital Principles',
  guides: 'Guides',
  'products-services': 'Products and Services',
  resources: 'Resources',
};

const Routes = () => {
  return (
    <div>
      <BreadCrumbs />
      <Switch>
        <Route exact path="/products-services" component={Products} />
        <Route exact path="/digital-framework" component={DigitalFramework} />
        <Route exact path="/resources/digital-principles" component={DigitalPrinciples} />
        <Route exact path="/resources" component={Resources} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route exact path="/guides/communication-platforms" component={CollaborationTools} />
        {/* This is a test guides page, KEEP comented out until strapi is implemented */}
        {/* 
        <Route path="/guides/:uid" exact>
          <GuidePage />
        </Route>
        <Route exact path="/guides" component={GuidesPage} /> 
        */}
        <Route exact path="/" component={Home} />
        {/* TODO: REDIRECT STANDARDS AND GUIDES LINK TO RESOURCE PAGE */}
        <Route path="/standards-and-guides" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
export { DisplayNames };
