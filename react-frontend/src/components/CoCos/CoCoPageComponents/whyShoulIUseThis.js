import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { Heading, SubHeading } from '../../StyleComponents/headings';

function WhyShouldIUseThis({ whyShouldIUseThis }) {
  let headings = whyShouldIUseThis?.map((reason) => reason?.Heading);
  let details = whyShouldIUseThis?.map((reason) => reason?.Details);

  if (headings && details) {
    return (
      <div style={{ marginTop: '60px' }}>
        <Row>
          <Col xs={12}>
            <Heading>Why should I use this?</Heading>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} md={4}>
            <SubHeading>{headings[0]}</SubHeading>
            <p>{details[0]}</p>
          </Col>
          <Col xs={12} md={4}>
            <SubHeading>{headings[1]}</SubHeading>
            <p>{details[1]}</p>
          </Col>
          <Col xs={12} md={4}>
            <SubHeading>{headings[2]}</SubHeading>
            <p>{details[2]}</p>
          </Col>
        </Row>
      </div>
    );
  }
  return <div />;
}

export default WhyShouldIUseThis;
