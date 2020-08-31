import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import BreadCrumbs from '../../components/Nav/breadcrumbs';

import '../../css/global.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <BreadCrumbs />
        <div className="routeBody">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
