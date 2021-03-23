import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import CaseStudies from '../../components/CaseStudies/casestudies';
import CoCos from '../../components/CoCos/coCos';
import CoCoPage from '../../components/CoCos/coCoPage';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';
import DigitalFramework from '../DigitalFramework/digitalFramework';
import Products from '../products/products';
import DigitalPrinciples from '../../components/DigitalPrinciples/digitalPrinciples';
import BreadCrumbs from './breadcrumbs';
import NotFound from '../NotFoundPage/notFoundPage';

const DisplayNames = {
  'case-studies': 'Case Studies',
  'communication-platforms': 'Communication Platform',
  'digital-framework': 'Digital Framework',
  'digital-principles': 'Digital Principles',
  'products-services': 'Products and Services',
  resources: 'Resources',
  cocos: 'Common Components',
};

const Routes = () => {
  return (
    <div>
      <BreadCrumbs />
      <Switch>
        <Route exact path="/products-services" component={Products} />
        <Route exact path="/digital-framework" component={DigitalFramework} />
        <Route
          exact
          path="/resources/digital-principles"
          component={DigitalPrinciples}
        />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/cocos" component={CoCos} />
        <Route exact path="/cocos/:uid" component={CoCoPage} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route
          exact
          path="/guides/communication-platforms"
          component={CollaborationTools}
        />
        <Route exact path="/" component={Home} />
        <Route path="/standards-and-guides">
          <NotFound standards />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
export { DisplayNames };
