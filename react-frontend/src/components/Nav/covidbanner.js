import React, { useState, useEffect } from 'react';
import { Alert } from 'antd';
import {
  EmptyBannerStyle,
  CovidBannerStyle,
  CovidButtonStyle,
  CovidTextStyle,
  CovidLinkStyle,
} from '../StyleComponents/pageContent';
import { InfoCircleOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

function CovidBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (showBanner) {
    return (
      <CovidBannerStyle>
        <div>
          <Alert
            style={{
              backgroundColor: '#355992',
              fontSize: '18px',
              fontColor: 'white',
              textAlign: 'center',
            }}
            message={
              <CovidTextStyle>
                <table align="center">
                  <tr>
                    <td width="8%" valign="top" align="right">
                      <InfoCircleOutlined />
                    </td>
                    <td width="80%">
                      {' '}
                      B.C. has declared a state of emergency. Learn about{' '}
                      <CovidLinkStyle href="http://covid-19.bccdc.ca/?utm_campaign=20200323_GCPE_AM_COVID_7_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                        COVID-19 health issues.
                      </CovidLinkStyle>{' '}
                      |{' '}
                      <CovidLinkStyle href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support?utm_campaign=20200323_GCPE_AM_COVID_8_NOTIFICATION_WORDPRESS_BCGOV_EN_BC__NOTIFICATION">
                        B.C.'s response to COVID-19.{' '}
                      </CovidLinkStyle>
                    </td>
                    <td width="10%" align="center" valign="top">
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
                          <font color="white">X</font>
                        </a>
                      </CovidButtonStyle>
                    </td>
                  </tr>
                </table>
              </CovidTextStyle>
            }
          />
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
