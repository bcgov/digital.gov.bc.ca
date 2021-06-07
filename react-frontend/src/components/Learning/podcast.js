import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';

function Podcast() {
  return (
    <ContentBlockContainer id="courses">
      <Row>
        <Col sm={12}>
          <Heading>Podcast-TBR</Heading>
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default Podcast;
