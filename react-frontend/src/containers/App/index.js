import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import BreadCrumbs from '../../components/Nav/breadcrumbs';

import '../../css/global.css';
import { AppConfigContext } from '../../providers/AppConfig';

function App() {
  const config = useContext(AppConfigContext);
  console.log('SOMETHING AINT WORKING', config);
  console.log(config.strapiApiUrl);
  return (
    <div className="App">
      {/* <Nav /> */}
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
