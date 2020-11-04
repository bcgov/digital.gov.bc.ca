import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
import { Grid, Row } from 'react-flexbox-grid';
import { CovidAlert, CovidBannerStyle } from '../StyleComponents/pageContent';
import {
  CovidCol,
  CovidLinkStyle,
  CovidLinkStyleButton,
} from '../StyleComponents/htmlTags';
import { InfoCircleFilled } from '@ant-design/icons';

function CovidBanner(props) {
  const [showBanner, setShowBanner] = useState(true);
  const [breadCrumb, setBreadCrumb] = useState(true);

  if (showBanner) {
    return (
      // <CovidBannerStyle>
      <CovidAlert
        // style={{
        //   backgroundColor: '#355992',
        //   textAlign: 'center',
        // }}
        message={
          <Grid>
            <Row>
              <CovidCol xs={1}>
                <InfoCircleFilled />
              </CovidCol>
              <CovidCol xs={10}>
                B.C. has declared a state of emergency. Learn about{' '}
                <CovidLinkStyle href="http://covid-19.bccdc.ca/?utm_campaign=20200323_GCPE_AM_COVID_7_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                  COVID-19 health issues.
                </CovidLinkStyle>{' '}
                |{' '}
                <CovidLinkStyle href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support?utm_campaign=20200323_GCPE_AM_COVID_8_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                  B.C.'s response to COVID-19.{' '}
                </CovidLinkStyle>
              </CovidCol>
              <CovidCol xs={1}>
                <CovidLinkStyleButton
                  onClick={(event) => {
                    event.preventDefault();
                    setBreadCrumb(true);
                    setShowBanner(false);
                    const nav = document.getElementById('navbar');
                    nav.style.top = '67px';
                    const header = document.getElementById('navheader');
                    header.style.top = 0;
                    props.test(breadCrumb);
                  }}
                >
                  X
                </CovidLinkStyleButton>
              </CovidCol>
            </Row>
          </Grid>
        }
      />
      // </CovidBannerStyle>
    );
  }

  return <div className="dismissedCovidBanner" />;
}

export default CovidBanner;
