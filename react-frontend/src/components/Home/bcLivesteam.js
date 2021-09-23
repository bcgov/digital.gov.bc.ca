import React, { useContext } from 'react';
import dateFormat from 'dateformat';
import { Col, Row } from 'react-flexbox-grid';
import { PageContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import Query from '../Query';
import { LinkExternalButton } from '../StyleComponents/htmlTags';

import LIVESTREAM_QUERY from '../../queries/digitalBCLivestream/livestreams';
import { AppConfigContext } from '../../providers/AppConfig';
const youTubeLogo = require('../../images/icons/yt_logo_rgb_light.png').default;

const BCLivestream = () => {
  const strapiMediaUrl = useContext(AppConfigContext)['state'][
    'strapiMediaUrl'
  ];
  return (
    <Query query={LIVESTREAM_QUERY}>
      {({ data: { digitalLivestreamContact, digitalBcLivestreams } }) => {
        const imageSource =
          strapiMediaUrl + digitalBcLivestreams[0]?.EventImage?.url;
        // if no next event is provided in strapi, this section will not render
        const now = new Date();
        const nextEventTime = new Date(digitalBcLivestreams[0]?.BroadcastTime);

        {
          /* Only render if link provided */
        }
        const pastBroadcastLink = digitalLivestreamContact?.PastEpisodeURL && (
          <div>
            <a href={digitalLivestreamContact?.PastEpisodeURL}>
              <p style={{ marginBottom: '4px' }}>Watch past broadcasts</p>
              <img
                src={youTubeLogo}
                style={{ height: '20px', width: '80px' }}
              />
            </a>
          </div>
        );

        const subscriptionLink = digitalLivestreamContact?.SubscriptionURL && (
          <LinkExternalButton
            href={digitalLivestreamContact?.SubscriptionURL}
            style={{
              maxWidth: '160px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Subscribe
          </LinkExternalButton>
        );

        if (nextEventTime && nextEventTime > now) {
          return (
            <div style={{ backgroundColor: '#fff' }}>
              <PageContainer
                style={{ backgroundColor: '#fff', paddingTop: '40px' }}
              >
                <Row between="xs">
                  <Col sm={12} md={3} style={{ textAlign: 'center' }}>
                    <Heading>#DigitalBC Livestream</Heading>
                    <p>
                      Watch live broadcasts of monthly updates, webinars, sprint
                      reviews, and more!
                    </p>
                    {subscriptionLink}
                  </Col>
                  <Col sm={12} md={5}>
                    <img src={imageSource} style={{ width: '100%' }} />
                  </Col>
                  <Col sm={12} md={4} style={{ textAlign: 'center' }}>
                    <p style={{ marginBottom: '4px' }}>
                      <b>Next broadcast</b>
                    </p>
                    <p
                      style={{
                        marginBottom: '8px',
                        backgroundColor: '#F2F2F2',
                      }}
                    >
                      <b>
                        {dateFormat(
                          digitalBcLivestreams[0]?.BroadcastTime,
                          'ddd, mmm d - hh:MM TT'
                        ) + ' PST'}
                      </b>
                    </p>
                    <p style={{ textAlign: 'left', marginBottom: '40px' }}>
                      {digitalBcLivestreams[0]?.Description}
                    </p>
                    {pastBroadcastLink}
                  </Col>
                </Row>
              </PageContainer>
            </div>
          );
        }
        return (
          <div style={{ backgroundColor: '#fff' }}>
            <PageContainer
              style={{ backgroundColor: '#fff', paddingTop: '40px' }}
            >
              <Row center="xs">
                <Col xs={12} style={{ textAlign: 'center' }}>
                  <Heading>#DigitalBC Livestream</Heading>
                  <p>
                    Watch live broadcasts of monthly updates, webinars, sprint
                    reviews, and more!
                  </p>
                  {subscriptionLink}
                  {pastBroadcastLink}
                </Col>
              </Row>
            </PageContainer>
          </div>
        );
      }}
    </Query>
  );
};

export default BCLivestream;
