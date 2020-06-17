import React from 'react';
//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar.js';
import Home from '../../components/Home/home.js';
import Footer from '../../components/Nav/footer.js';

function App() {
  return (
    <div className="App">
      {/* <p>THIS IS A TEST APP</p>
      <Nav /> */}
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
