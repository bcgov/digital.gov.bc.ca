import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import CaseStudies from '../../components/CaseStudies/casestudies';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';
import DigitalFramework from '../DigitalFramework/digitalframework';
import Products from '../products/products';
import DigitalPrinciples from '../../components/DigitalPrinciples/digitalPrinciples';
import GuidesPage from '../../components/Guides/guides';
import GuidePage from '../../components/Guides/guide';

const DisplayNames = {
  resources: 'Resources',
  'products-services': 'Products and Services',
  'digital-framework': 'Digital Framework',
  'case-studies': 'Case Studies',
};

const Routes = () => {
  return (
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
      <Route path="/guides/:uid" exact>
        <GuidePage />
      </Route>
      <Route path="/guides" exact>
        <GuidesPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
export { DisplayNames };
