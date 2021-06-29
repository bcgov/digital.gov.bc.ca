import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import EventCards from './eventCards';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import { StyledP, HrefLinkStandalone } from '../StyleComponents/htmlTags';

function Events() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        <Col sm={12}>
          <Heading>Events</Heading>
        </Col>
      </Row>
      <Row>
        <EventCards isCourse={false} />
      </Row>
    </ContentBlockContainer>
  );
}

export default Events;
