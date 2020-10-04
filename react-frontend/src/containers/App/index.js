import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import BreadCrumbs from '../../components/Nav/breadcrumbs';

import '../../css/global.css';
import { RouteBody } from '../../components/StyleComponents/pageContent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <BreadCrumbs />
        <RouteBody>
          <Routes />
        </RouteBody>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
