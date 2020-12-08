import React, { useState } from 'react';
import { Row } from 'react-flexbox-grid';
import { CovidAlert, NavBarContainer } from '../StyleComponents/pageContent';
import {
  CovidCol,
  CovidLinkStyle,
  CovidLinkStyleButton,
} from '../StyleComponents/htmlTags';
import { InfoCircleFilled } from '@ant-design/icons';

function CovidBanner(props) {
  const [showBanner, setShowBanner] = useState(true);

  const covidHealthLink =
    'https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/restrictions?utm_campaign=20201118_GCPE_AM_COVID_1_NOTIFICATION_BCGOV_BCGOV_EN_BC__NOTIFICATION';
  const covidBCresponseLink =
    'https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support?utm_campaign=20200506_GCPE_AM_COVID_9_NOTIFICATION_BCGOV_BCGOV_EN_BC__NOTIFICATION';

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
          <NavBarContainer>
            <Row>
              <CovidCol xs={1}>
                <InfoCircleFilled
                  style={{ float: 'right', fontSize: '1.5em' }}
                />
              </CovidCol>
              <CovidCol xs={10}>
                B.C. has declared a state of emergency.{' '}
                <CovidLinkStyle href={covidBCresponseLink}>
                  Our response to COVID-19
                </CovidLinkStyle>{' '}
                |{' '}
                <CovidLinkStyle href={covidHealthLink}>
                  Province-wide restrictions
                </CovidLinkStyle>
              </CovidCol>
              <CovidCol xs={1}>
                <CovidLinkStyleButton onClick={closeBanner}>
                  X
                </CovidLinkStyleButton>
              </CovidCol>
            </Row>
          </NavBarContainer>
        }
      />
    );
  }

  return <div className="dismissedCovidBanner" />;
}

export default CovidBanner;
