import React from 'react';

import { PanelStyled, CollapseStyled } from '../StyleComponents/collapseMenu';
import { Col, Row } from 'react-flexbox-grid';

import { SubSubHeading } from '../StyleComponents/headings';
import { podcastUrls } from '../../constants/urls';

const iOSIcon = require('../../images/icons/podcastsiOS.svg').default;
const googlePodcastIcon = require('../../images/icons/podcastsGoogle.svg')
  .default;

function PodcastCollapsedMenu() {
  const [expanded, setExpanded] = React.useState(['']);

  const changeKeyState = (key) => {
    setExpanded(key);
  };

  return (
    <CollapseStyled
      defaultActiveKey={['']}
      activeKey={expanded}
      onChange={changeKeyState}
    >
      <PanelStyled header="How to Subscribe">
        <Row>
          <Col xs={12} lg={6}>
            <div style={{ display: 'inline-flex' }}>
              <div>
                <img
                  className="podcast-icon"
                  src={iOSIcon}
                  style={{ height: '48px' }}
                />
              </div>
              <SubSubHeading style={{ marginTop: '6px', marginLeft: '4px' }}>
                iOS
              </SubSubHeading>
            </div>
            <p>Open the Podcasts app on your phone:</p>
            <ul>
              <li>Tap the LIBRARY button at the bottom of your app</li>
              <li>
                Choose the option ADD A PODCAST BY URL and enter the RSS link:{' '}
                <span className="text-blue">
                  {podcastUrls.bcDevExchangePodcast + 'rss'}
                </span>
              </li>
              <li>Tap SUBSCRIBE</li>
              <li>Tap the DONE button at the top right</li>
              <li>Tap on The Exchange Podcast logo to access the episodes</li>
            </ul>
          </Col>
          <Col xs={12} lg={6}>
            <div style={{ display: 'inline-flex' }}>
              <img
                className="podcast-icon"
                src={googlePodcastIcon}
                style={{ height: '48px' }}
              />
              <SubSubHeading style={{ marginTop: '6px', marginLeft: '4px' }}>
                Android
              </SubSubHeading>
            </div>
            <p>
              Visit the Google Play Store to find a podcast player that suits
              you. These steps should be similar in all applications:
            </p>
            <ul>
              <li>Tap on the + sign at the top right of the screen</li>
              <li>Select "Add an RSS Feed"</li>
              <li>
                Enter the RSS link:{' '}
                <span className="text-blue">
                  {podcastUrls.bcDevExchangePodcast + 'rss'}
                </span>
              </li>
              <li>Tap "Add"</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={10} lg={6}>
            <p>
              If using another podcast application, subscribe by visiting{' '}
              <a
                href={podcastUrls.bcDevExchangePodcast}
                target="_blank"
                rel="noreferrer"
              >
                {podcastUrls.bcDevExchangePodcast}
              </a>{' '}
              and clicking the RSS icon, or entering the RSS link:{' '}
              <span className="text-blue">
                {podcastUrls.bcDevExchangePodcast + 'rss'}
              </span>
            </p>
          </Col>
        </Row>
      </PanelStyled>
    </CollapseStyled>
  );
}

export default PodcastCollapsedMenu;
