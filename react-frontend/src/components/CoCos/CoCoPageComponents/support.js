import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { Heading } from '../../StyleComponents/headings';

function Support({}) {
  return (
    <div style={{ marginTop: '60px' }}>
      <Row>
        <Col xs={12}>
          <Heading>Support</Heading>
        </Col>
      </Row>
      {/* For each support link add a line. */}
    </div>
  );
}

export default Support;
