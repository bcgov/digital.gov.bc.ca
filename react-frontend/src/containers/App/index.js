import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import Nav from '../../components/Nav';
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
        <div style={{ paddingTop: '131px' }}>
          <BreadCrumbs />
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
