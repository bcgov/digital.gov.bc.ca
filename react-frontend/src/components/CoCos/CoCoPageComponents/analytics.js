import React from 'react';
import dateFormat from 'dateformat';

import { Col, Row } from 'react-flexbox-grid';
import MinistryUse from './ministryUse';

import { Heading, SubHeading } from '../../StyleComponents/headings';

function Analytics({ coCoName, numberOfUsers, creationDate, whoIsUsingThis }) {
  let ministries = whoIsUsingThis?.map((who) => who?.ministry?.MinistryAcronym);
  let summaries = whoIsUsingThis?.map((who) => who?.Summary);
  console.log(whoIsUsingThis);
  return (
    <div style={{ marginTop: '60px' }}>
      {whoIsUsingThis?.length > 0 && (
        <>
          <Row>
            <Col xs={12}>
              <Heading>Who else is using this?</Heading>
            </Col>
          </Row>
          <Row>
            {/* ministries.map() */}
            {whoIsUsingThis.map((who, i) => (
              <MinistryUse
                acronym={who?.ministry?.MinistryAcronym}
                summary={who?.Summary}
                key={i}
              />
            ))}
            {/* <MinistryUse acronym={ministries[0]} summary={summaries[0]} />
             <MinistryUse acronym={ministries[1]} summary={summaries[1]} />
             <MinistryUse acronym={ministries[2]} summary={summaries[2]} /> */}
          </Row>
        </>
      )}
      <Row>
        <Col xs={6}>
          <SubHeading>Running Since</SubHeading>
          <p data-testid="date">{dateFormat(creationDate, 'mmmm yyyy')}</p>
        </Col>
        <Col xs={6} style={{ textAlign: 'center' }}>
          <SubHeading>{numberOfUsers}</SubHeading>
          <p>teams using {coCoName}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Analytics;
