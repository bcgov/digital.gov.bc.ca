import React, { useContext } from 'react';
import InfoCard from './infocard';
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
    <div style={{ backgroundColor: '#fff' }}>
      <PageContainer style={{ backgroundColor: '#fff', paddingTop: '40px' }}>
        <Query query={LIVESTREAM_QUERY}>
          {({ data: { digitalLivestreamContact, digitalBcLivestreams } }) => {
            console.log(digitalLivestreamContact);
            console.log(digitalBcLivestreams);
            const imageSource =
              strapiMediaUrl + digitalBcLivestreams[0]?.EventImage?.url;

            return (
              <Row between="xs">
                <Col sm={12} md={3}>
                  <Heading>#DigitalBC Livestream</Heading>
                  <p>
                    Watch live broadcasts of monthly updates, webinars, sprint
                    reviews, and more!
                  </p>
                  <LinkExternalButton
                    href={digitalLivestreamContact?.SubscriptionURL}
                    style={{ maxWidth: '160px' }}
                  >
                    Subscribe
                  </LinkExternalButton>
                </Col>
                <Col sm={12} md={5}>
                  <img src={imageSource} style={{ width: '100%' }} />
                </Col>
                <Col sm={12} md={4} style={{ textAlign: 'center' }}>
                  <p>
                    <b>Next broadcast</b>
                  </p>
                  <p>{digitalBcLivestreams[0]?.BroadcastTime}</p>
                  <p style={{ textAlign: 'left' }}>
                    {digitalBcLivestreams[0]?.Description}
                  </p>
                  <p>Watch past broadcasts</p>
                  <img
                    src={youTubeLogo}
                    style={{ height: '20px', width: '80px' }}
                  />
                  {/* add the youtube icon */}
                </Col>
              </Row>
            );
          }}
        </Query>
      </PageContainer>
    </div>
  );
};

export default BCLivestream;
