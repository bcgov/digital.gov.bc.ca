import React from 'react';
//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import { BrowserRouter as Router } from 'react-router-dom';

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
