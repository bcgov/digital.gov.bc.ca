import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import BreadCrumbs from '../../components/Nav/breadcrumbs';
import CovidBanner from '../../components/Nav/covidbanner';
import '../../css/global.css';
import { RouteBody } from '../../components/StyleComponents/pageContent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* CovidBanner is moved down so the skip navigation is first tag on the page*/}
        <CovidBanner />
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
