import React from 'react';
//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar.js';
import Home from '../../components/Home/home.js';
import '../../css/home.css';

function App() {
  return (
    <div className="App">
      {/* <p>THIS IS A TEST APP</p>
      <Nav /> */}
      <NavBar />
      <div className="contentSpacer">&nbsp;</div>
      <Home />
    </div>
  );
}

export default App;
