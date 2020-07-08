import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar';
import Home from '../../components/Home/home';
import Resources from '../../components/Resources/resources';
import Footer from '../../components/Nav/footer';
import CollaborationTools from '../../components/Guides/CollaborationTools/collaborationTools';

import '../../css/global.css';

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
          <Route path="/guides">
            <CollaborationTools />
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
