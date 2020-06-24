import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import DigitalFramework from '../DigitalFramework/digitalframework';

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/digital-framework">
          <DigitalFramework />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
