import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import DigitalFramework from '../DigitalFramework/digitalframework';
import Products from '../products/products';
import Farmers from '../CaseStudies/farmers';
import Mining from '../CaseStudies/mining';
import MedicalServices from '../CaseStudies/medicalservices';

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
export { DisplayNames };
