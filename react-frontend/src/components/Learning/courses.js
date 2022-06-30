import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading, SubHeading } from '../StyleComponents/headings';
import { StyledP, HrefLink } from '../StyleComponents/htmlTags';
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
        <Col sm={12}>
          <SubHeading>Digital Academy LearningHub</SubHeading>
          <SubTitle>Visit the <HrefLink>Digital Academy LearningHub</HrefLink> page to sign-up for scheduled:</SubTitle>
          <StyledP><li>internal courses related to Agile, OpenShift, Scrum Master, and Scrum Product Owner</li>
            <li>external partner learning opportunities on a variety of topics</li></StyledP>
          <SubTitle>For more information contact <HrefLink href="mailto:DigitalAcademy@gov.bc.ca">DigitalAcademy@gov.bc.ca</HrefLink></SubTitle>
        </Col>
      </Row>
      <EventCards isCourse={true} />
    </ContentBlockContainer>
  );
}

export default Courses;
