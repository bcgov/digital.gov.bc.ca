import React from 'react';

import { Col, Row } from 'react-flexbox-grid';
import { Heading } from '../../StyleComponents/headings';
import { CoCoLinkExternal } from '../../StyleComponents/htmlTags';

function GetStarted({ name, url }) {
  return (
    <div style={{ marginTop: '60px' }}>
      <Row>
        <Col xs={12}>
          <Heading>Getting started</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>
            Select the "Start Using Now" button to visit the {name} Onboarding
            guide.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col xs={12} style={{ flexBasis: 'auto' }}>
          <CoCoLinkExternal href={url}>Start Using Now</CoCoLinkExternal>
        </Col>
      </Row>
    </div>
  );
}

export default GetStarted;
