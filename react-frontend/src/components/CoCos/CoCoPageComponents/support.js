import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { Heading } from '../../StyleComponents/headings';
import { StyleRichText } from '../../StyleComponents/styledMarkdown';

function Support({ contact }) {
  return (
    <div style={{ marginTop: '60px' }}>
      <Row>
        <Col xs={12}>
          <Heading>Support</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StyleRichText htmlOrMarkdown={contact} />
        </Col>
      </Row>
    </div>
  );
}

export default Support;
