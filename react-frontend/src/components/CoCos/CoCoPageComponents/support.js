import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { Heading } from '../../StyleComponents/headings';
import { ReactMarkdownStyled } from '../../StyleComponents/styledMarkdown';

function Support({ contact }) {
  console.log(contact);
  return (
    <div style={{ marginTop: '60px' }}>
      <Row>
        <Col xs={12}>
          <Heading>Support</Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ReactMarkdownStyled source={contact} />
        </Col>
      </Row>
    </div>
  );
}

export default Support;
