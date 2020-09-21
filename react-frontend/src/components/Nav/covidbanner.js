import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import '../../css/nav.css';

function CovidBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (showBanner) {
    return (
      <div class="covidBanner">
        <Alert variant="warning">
          <Alert.Heading>
            <p style={{ color: 'white', align: 'right', width: '100%' }}>
              B.C. has declared a state of emergency. Learn about{' '}
              <a href="http://covid-19.bccdc.ca/?utm_campaign=20200323_GCPE_AM_COVID_7_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                COVID-19 health issues.
              </a>{' '}
              |{' '}
              <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support?utm_campaign=20200323_GCPE_AM_COVID_8_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                B.C.'s response to COVID-19.{' '}
              </a>{' '}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Button
                onClick={() => {
                  setShowBanner(false);
                  const nav = document.getElementById('navbar');
                  nav.style.top = '65px';
                  const header = document.getElementById('navheader');
                  header.style.top = 0;
                }}
              >
                x
              </Button>
            </p>{' '}
          </Alert.Heading>
        </Alert>
      </div>
    );
  }

  return <div></div>;
}

export default CovidBanner;
