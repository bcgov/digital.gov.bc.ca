import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import CaseStudies from '../../components/CaseStudies/casestudies';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';
import DigitalFramework from '../DigitalFramework/digitalFramework';
import Products from '../products/products';
import DigitalPrinciples from '../../components/DigitalPrinciples/digitalPrinciples';
import GuidesPage from '../../components/Guides/guides';
import GuidePage from '../../components/Guides/guide';
import BreadCrumbs from './breadcrumbs';

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
        <Route path="/products-services">
          <Products />
        </Route>
        <Route path="/digital-framework">
          <DigitalFramework />
        </Route>
        <Route path="/resources/digital-principles">
          <DigitalPrinciples />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/case-studies">
          <CaseStudies />
        </Route>
        <Route path="/guides/communication-platforms">
          <CollaborationTools />
        </Route>
        {/* This is a test guides page, KEEP comented out until strapi is implemented */}
        {/* <Route path="/guides/:uid" exact>
        <GuidePage />
      </Route>
      <Route path="/guides" exact>
        <GuidesPage />
      </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
export { DisplayNames };
