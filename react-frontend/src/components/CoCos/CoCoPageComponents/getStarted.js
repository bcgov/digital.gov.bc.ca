import React from 'react';

import { Col, Row } from 'react-flexbox-grid';
import { Heading } from '../../StyleComponents/headings';
import { LinkExternalButton } from '../../StyleComponents/htmlTags';
import { StyleRichText } from '../../StyleComponents/styledMarkdown';

function GetStarted({ name, url, steps }) {
  return (
    <div style={{ marginTop: '60px' }}>
      <Row>
        <Col xs={12}>
          <Heading>Getting started</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12} data-testid="how-to-start">
          {steps && (
            <StyleRichText htmlOrMarkdown={steps} data-testid="how-to-start" />
          )}
          <p>
            Select the "Start Using Now" button to visit the {name} Onboarding
            guide.
          </p>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col xs={12} style={{ flexBasis: 'auto' }}>
          <LinkExternalButton href={url}>Start Using Now</LinkExternalButton>
        </Col>
      </Row>
    </div>
  );
}

export default GetStarted;
