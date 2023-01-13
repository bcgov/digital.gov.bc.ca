import React from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
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
import WordPressPageDirect from '../WordPress/wordPressPageDirect';
import WordPressStrapi from '../WordPress/wordPressStrapi';
import Policy from '../Policy/Policy';



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
  guides: 'Guides',
  'digital-code-of-practice': 'Digital Code of Practice',
  "policies-and-standards": "Policies and Standards"
};

const Routes = () => {
  // for screen reader assistive technology:
  // when user navigates between views, set focus on first H1
  // this way the user gets an announcement that the page has changed
  // see https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/ for more info
  const location = useLocation();
  React.useEffect(() => {
    let h1 = document.getElementsByTagName("h1")
    if (h1.length>0){
      h1[0].setAttribute('tabindex',"-1")
      h1[0].focus();
    }
  }, [location]);

  return (
    <div>
      <BreadCrumbs />
      <div id="main-content-anchor" role="main">
        
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={BlogHome} />
          <Route exact path="/blog/:uid" component={BlogPage} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route exact path="/common-components" component={CoCos} />
          <Route exact path="/common-components/:uid" component={CoCoPage} />
          {/* <Route exact path="/wordpress-preview/:slug" component={WordPressPageDirect} /> */}
          <Route exact path="/guides/:slug" component={WordPressStrapi} />
          <Route exact path="/digital-code-of-practice/">
          <Redirect to="/policies-and-standards/digital-code-of-practice/Introduction" />
          </Route>
          <Route exact path="/policies-and-standards/digital-code-of-practice/:slug" component={WordPressStrapi} />
          <Route
            exact
            path="/guides/communication-platforms"
            component={CollaborationTools}
          />
          <Route exact path="/communities" component={Communities} />
          <Route exact path="/communities/:uid" component={Community} />
          <Route exact path="/copyright" component={Copyright} />
          <Route exact path="/policies-and-standards/digital-framework" component={DigitalFramework} />
          <Route
            exact
            path="/policies-and-standards/digital-principles"
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
          <Route exact path="/policies-and-standards" component={Policy} />
          <Route path="/standards-and-guides">
            <NotFound standards />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
export { DisplayNames };
