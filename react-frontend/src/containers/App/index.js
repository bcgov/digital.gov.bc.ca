import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';

import '../../css/global.css';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
