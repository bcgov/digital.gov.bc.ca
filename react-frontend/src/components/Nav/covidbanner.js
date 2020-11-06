import React, { useState, useEffect } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { CovidAlert } from '../StyleComponents/pageContent';
import {
  CovidCol,
  CovidLinkStyle,
  CovidLinkStyleButton,
} from '../StyleComponents/htmlTags';
import { InfoCircleFilled } from '@ant-design/icons';

function CovidBanner(props) {
  const [showBanner, setShowBanner] = useState(true);

  const covidHealthLink =
    'http://covid-19.bccdc.ca/?utm_campaign=20200323_GCPE_AM_COVID_7_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION';
  const covidBCresponseLink =
    'https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support?utm_campaign=20200323_GCPE_AM_COVID_8_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION';

  const closeBanner = (event) => {
    event.preventDefault();
    setShowBanner(false);
    const nav = document.getElementById('navbar');
    nav.style.top = '67px';
    const header = document.getElementById('navheader');
    header.style.top = 0;
  };

  if (showBanner) {
    return (
      <CovidAlert
        message={
          <Grid>
            <Row>
              <CovidCol xs={1}>
                <InfoCircleFilled
                  style={{ float: 'right', fontSize: '1.5em' }}
                />
              </CovidCol>
              <CovidCol xs={10}>
                B.C. has declared a state of emergency. Learn about{' '}
                <CovidLinkStyle href={covidHealthLink}>
                  COVID-19 health issues.
                </CovidLinkStyle>{' '}
                |{' '}
                <CovidLinkStyle href={covidBCresponseLink}>
                  B.C.'s response to COVID-19.
                </CovidLinkStyle>
              </CovidCol>
              <CovidCol xs={1}>
                <CovidLinkStyleButton onClick={closeBanner}>
                  X
                </CovidLinkStyleButton>
              </CovidCol>
            </Row>
          </Grid>
        }
      />
    );
  }

  return <div className="dismissedCovidBanner" />;
}

export default CovidBanner;
