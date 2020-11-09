import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import HorizontalInfoCard from '../CaseStudies/horizontalinfocard';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageHeading } from '../StyleComponents/headings';

const videoCommsImg = require('../../images/videocomms.png');

function Guides() {
  return (
    <ContentBlockContainer id="guides">
      <Grid>
        <Row>
          <Col sm={12}>
            <ResourcePageHeading>Guides</ResourcePageHeading>
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={12}>
            <HorizontalInfoCard
              title={'Video Communication Platforms'}
              img={videoCommsImg}
              description={
                'When you can’t meet with your coworkers or clients face-to-face, communicating with them by video can be the next best thing. There are many options available for video communication platforms or tools, many of which can also be used for instant messaging or chat, screen sharing and transferring files.'
              }
              linkText={'More'}
              routePath={'guides/communication-platforms'}
            />
          </Col>
        </Row>
      </Grid>
    </ContentBlockContainer>
  );
}

export default Guides;
