import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../../components/FooterPages/about';
import BlogHome from '../../components/Blog/blogHome';
import BlogPage from '../../components/Blog/blogPage';
import BreadCrumbs from './breadcrumbs';
import CaseStudies from '../../components/CaseStudies/casestudies';
import CoCos from '../../components/CoCos/coCos';
import CoCoPage from '../../components/CoCos/coCoPage';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';
import Communities from '../../components/Community/communities';
import Community from '../../components/Community/community';
import Copyright from '../../components/FooterPages/copyright';
import DigitalFramework from '../DigitalFramework/digitalFramework';
import DigitalPrinciples from '../../components/DigitalPrinciples/digitalPrinciples';
import Disclaimer from '../../components/FooterPages/disclaimer';
import Home from '../../components/Home/home';
import HostingOptions from '../HostingOptions/hostingOptions';
import Learning from '../../components/Learning/learning';
import NotFound from '../NotFoundPage/notFoundPage';
import Privacy from '../../components/FooterPages/privacy';
import Products from '../products/products';
import Resources from '../../components/Resources/resources';
import Saas from '../LowTouchSaas/lowTouchSaas';

const DisplayNames = {
  blog: 'Blog',
  'case-studies': 'Case Studies',
  'communication-platforms': 'Communication Platform',
  'digital-framework': 'Digital Framework',
  'digital-principles': 'Digital Principles',
  'products-services': 'Products and Services',
  resources: 'Resources',
  'common-components': 'Common Components',
  communities: 'Communities',
};

const Routes = () => {
  return (
    <div>
      <BreadCrumbs />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={BlogHome} />
        <Route exact path="/blog/:uid" component={BlogPage} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route exact path="/common-components" component={CoCos} />
        <Route exact path="/common-components/:uid" component={CoCoPage} />
        <Route
          exact
          path="/guides/communication-platforms"
          component={CollaborationTools}
        />
        <Route exact path="/communities" component={Communities} />
        <Route exact path="/communities/:uid" component={Community} />
        <Route exact path="/copyright" component={Copyright} />
        <Route exact path="/digital-framework" component={DigitalFramework} />
        <Route
          exact
          path="/resources/digital-principles"
          component={DigitalPrinciples}
        />
        <Route exact path="/disclaimer" component={Disclaimer} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/resources/hosting-options"
          component={HostingOptions}
        />
        <Route exact path="/resources/low-touch-saas" component={Saas} />
        <Route exact path="/learning" component={Learning} />
        <Route exact path="/products-services" component={Products} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/privacy" component={Privacy} />
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
