import React from 'react';
import InfoCard from '../Home/infocard';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { ResourcePageHeading } from '../StyleComponents/headings';

import HADSpdf from '../../documents/Hosting-and-Application-Development-Strategy.pdf';
import { digitalCardLinks } from '../../constants/urls';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
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
        <Col sm={12} md={4}>
          <InfoCard
            title={'Digital Principles'}
            description={descriptions[1]}
            linkText="Read the principles"
            routePath="/resources/digital-principles"
            height="300px"
          />
        </Col>
        <Col sm={12} md={4}>
          <InfoCard
            title={'IM/IT Standards'}
            description={descriptions[2]}
            linkText="Read the standards"
            linkPath={digitalCardLinks.imItStandards}
            height="300px"
          />
        </Col>
        <Col sm={12} md={4}>
          <InfoCard
            title={'Hosting and Application Development Strategy'}
            description={
              'Vision and approach for modernizing government’s efforts to provide excellent digital services by using best practices.'
            }
            linkText={'Read the strategy'}
            linkPath={HADSpdf}
            height="300px"
          />
        </Col>
      </Row>
    </ContentBlockContainer>
  );
}

export default DigitalCards;
