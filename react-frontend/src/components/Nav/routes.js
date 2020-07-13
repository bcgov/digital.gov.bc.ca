import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import DigitalFramework from '../DigitalFramework/digitalframework';
import Products from '../products/products';

//delete on commit, just used for testing
import MedicalServices from '../CaseStudies/medicalservices';
import MiningStudy from '../CaseStudies/mining';

const Routes = () => {
  return (
    <Switch>
      <Route path="/products-services">
        <Products />
      </Route>
      <Route path="/digital-framework">
        <DigitalFramework />
      </Route>
      <Route path="/resources">
        <Resources />
      </Route>
      <Route path="/">
        <MedicalServices />
      </Route>
    </Switch>
  );
};

export default Routes;
