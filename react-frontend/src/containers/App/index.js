import React from 'react';
//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar.js';
import Home from '../../components/Home/home.js';
import Resources from '../../components/Resources/resources.js';
import Footer from '../../components/Nav/footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Router>
        <NavBar />
        <Switch>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
