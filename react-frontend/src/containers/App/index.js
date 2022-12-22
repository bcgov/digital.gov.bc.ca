import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import FeedbackForm from '../../components/UserFeedback/feedback';

import { RouteBody } from '../../components/StyleComponents/pageContent';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <RouteBody role="main">
          <Routes />
        </RouteBody>
        <Footer />
        {/* <FeedbackForm /> */}
      </Router>
    </div>
  );
}

export default App;
