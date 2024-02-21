import React from 'react';
import InfoCard from '../Home/infocard';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageHeading } from '../StyleComponents/headings';

import { digitalCardLinks } from '../../constants/urls';

const descriptions = [
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'The IM/IT Standards promote consistent, appropriate management of government technology resources.',
];

function DigitalCards() {
  return (
    <ContentBlockContainer id="standards">
      <Row>
        <Col sm={12}>
          <ResourcePageHeading>Standards & Policy</ResourcePageHeading>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <InfoCard
            title={'Digital Principles'}
            description={descriptions[0]}
            linkText="Read the principles"
            routePath="/policies-and-standards/digital-principles"
            height="300px"
          />
        </Col>
        <Col sm={12} md={6}>
          <InfoCard
            title={'IM/IT Standards'}
            description={descriptions[1]}
            linkText="Read the standards"
            linkPath={digitalCardLinks.imItStandards}
            height="300px"
          />
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default DigitalCards;
