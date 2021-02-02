import React from 'react';
import dateFormat from 'dateformat';

import { Col, Row } from 'react-flexbox-grid';
import MinistryUse from './ministryUse';

import { Heading, SubHeading } from '../StyleComponents/headings';

function Analytics({ coCoName, numberOfUsers, creationDate, whoIsUsingThis }) {
  let ministries = whoIsUsingThis?.map((who) => who?.ministry?.MinistryAcronym);
  let summaries = whoIsUsingThis?.map((who) => who?.Summary);

  if (ministries && summaries) {
    return (
      <div style={{ marginTop: '60px' }}>
        <Row>
          <Col xs={12}>
            <Heading>Who else is using this?</Heading>
          </Col>
        </Row>
        <Row>
          <MinistryUse acronym={ministries[0]} summary={summaries[0]} />
          <MinistryUse acronym={ministries[1]} summary={summaries[1]} />
          <MinistryUse acronym={ministries[2]} summary={summaries[2]} />
        </Row>
        <Row>
          <Col xs={6}>
            <SubHeading>Running Since</SubHeading>
            <span>{dateFormat(creationDate, 'mmmm yyyy')}</span>
          </Col>
          <Col xs={6} style={{ textAlign: 'center' }}>
            <SubHeading>{numberOfUsers}</SubHeading>
            <span>teams using {coCoName}</span>
          </Col>
        </Row>
      </div>
    );
  }
  return <div />;
}

export default Analytics;
