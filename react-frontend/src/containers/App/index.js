import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

//import Nav from '../../components/Nav';
import NavBar from '../../components/Nav/navbar';
import Footer from '../../components/Nav/footer';
import Routes from '../../components/Nav/routes';
import { PaddedContainer } from '../../components/StyleComponents/containers';
import BreadCrumbs from '../../components/Nav/breadcrumbs';
import { CUSTOM_BREAKPOINTS } from '../../styleTokens';

import '../../css/global.css';

const Container = styled.div`
  padding-top: 68px;
  ${CUSTOM_BREAKPOINTS.headerToMobileTransition} {
    padding-top: 111px;
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <PaddedContainer style={{ position: 'absolute', paddingTop: '24px' }}>
            <BreadCrumbs />
          </PaddedContainer>

          <Routes />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
