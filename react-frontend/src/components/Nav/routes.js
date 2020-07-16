import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import CaseStudies from '../../components/CaseStudies/casestudies';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';
import DigitalFramework from '../DigitalFramework/digitalframework';

const Routes = () => {
  return (
    <Switch>
      <Route path="/digital-framework">
        <DigitalFramework />
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
      <Route path="/communication-platforms">
        <CollaborationTools />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
