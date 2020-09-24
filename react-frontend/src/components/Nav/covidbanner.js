import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import {
  EmptyBannerStyle,
  CovidBannerStyle,
  CovidButtonStyle,
} from '../StyleComponents/pageContent';

function CovidBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (showBanner) {
    return (
      <CovidBannerStyle>
        <div>
          <Alert variant="warning" align="center">
            <Alert.Heading>
              <table>
                <tr>
                  <td width="80%">
                    B.C. has declared a state of emergency. Learn about{' '}
                    <a href="http://covid-19.bccdc.ca/?utm_campaign=20200323_GCPE_AM_COVID_7_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                      <font color="red"> COVID-19 health issues.</font>
                    </a>{' '}
                    |{' '}
                    <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support?utm_campaign=20200323_GCPE_AM_COVID_8_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                      <font color="red">B.C.'s response to COVID-19.</font>{' '}
                    </a>
                  </td>
                  <td width="20%" align="center" valign="top">
                    <CovidButtonStyle>
                      <a
                        href=""
                        onClick={(event) => {
                          event.preventDefault();
                          setShowBanner(false);
                          const nav = document.getElementById('navbar');
                          nav.style.top = '65px';
                          const header = document.getElementById('navheader');
                          header.style.top = 0;
                        }}
                      >
                        <font color="white">x</font>
                      </a>
                    </CovidButtonStyle>
                  </td>
                </tr>
              </table>
            </Alert.Heading>
          </Alert>
        </div>
      </CovidBannerStyle>
    );
  }

  return (
    <EmptyBannerStyle>
      <div></div>
    </EmptyBannerStyle>
  );
}

export default CovidBanner;
