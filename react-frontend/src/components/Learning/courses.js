import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';
import EventCards from './eventCards';

// The courses are pulled from eventbrite and the content populates cards
function Courses() {
  return (
    <ContentBlockContainer id="courses">
      <Row>
        <Col sm={12}>
          <Heading>Courses</Heading>
        </Col>
      </Row>
      <Row>
        <EventCards isCourse={true} />
      </Row>
    </ContentBlockContainer>
  );
}

export default Courses;
