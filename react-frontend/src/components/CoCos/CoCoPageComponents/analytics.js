import React from 'react';
import dateFormat from 'dateformat';

import { Col, Row } from 'react-flexbox-grid';
import MinistryUse from './ministryUse';

import { Heading, SubHeading } from '../../StyleComponents/headings';

// function numberAndCreationDate({numberOfUsers,creationDate}) {

// }

function Analytics({ coCoName, numberOfUsers, creationDate, whoIsUsingThis }) {
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
            {whoIsUsingThis.map((who, i) => (
              <MinistryUse
                acronym={who?.ministry?.MinistryAcronym}
                summary={who?.Summary}
                key={i}
              />
            ))}
          </Row>
        </>
      )}
      <Row>
        {creationDate?.Year && (
          <Col xs={12} sm={numberOfUsers ? 6 : 4}>
            <SubHeading>Running Since</SubHeading>
            <p data-testid="date">
              {creationDate.Month + ' ' + creationDate.Year}
            </p>
          </Col>
        )}
        {numberOfUsers && (
          <Col
            xs={12}
            sm={creationDate?.Year ? 6 : 4}
            style={{ textAlign: 'center' }}
          >
            <SubHeading>{numberOfUsers}</SubHeading>
            <p>teams using {coCoName}</p>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Analytics;
