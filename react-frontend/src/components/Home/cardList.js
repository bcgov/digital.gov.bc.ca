import React from 'react';
import InfoCard from './infocard';
import { Col, Row } from 'react-flexbox-grid';
import { PageContainer } from '../StyleComponents/pageContent';
import { Title2 } from '../StyleComponents/headings';

const digitalFrameworkGrey = require('../../images/pngIllustrations/digitalFrameworkGrey.png')
  .default;
const digitalPrinciplesGrey = require('../../images/pngIllustrations/digitalPrinciplesGrey.png')
  .default;
const productsGrey = require('../../images/pngIllustrations/productsServicesGrey.png')
  .default;
const resourcesGrey = require('../../images/pngIllustrations/resourcesGrey.png')
  .default;
const communityGrey = require('../../images/pngIllustrations/communityGrey.png')
  .default;
const caseStudiesGrey = require('../../images/pngIllustrations/caseStudiesGrey.png')
  .default;
const coCoGrey = require('../../images/pngIllustrations/coCoGrey.png').default;

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Supports to help you create or improve a digital service.',
  'Policy, standards, guides, and tools you can use right now to deliver excellent digital services.',
  'The digital delivery network within the BC Public Service is active and growing. Connect, learn, and contribute!',
  'See examples of how teams are improving digital services for British Columbians.',
  'Reusable building blocks to create your product or service',
];

const CardList = () => {
  return (
    <div>
      <PageContainer style={{ paddingTop: '90px' }}>
        <Row>
          <Col sm={12} md={6}>
            <InfoCard
              img={digitalFrameworkGrey}
              title={'Digital Framework'}
              description={descriptions[0]}
              linkText="Read the framework"
              routePath="/digital-framework"
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={digitalPrinciplesGrey}
              title={'Digital Principles'}
              description={descriptions[1]}
              linkText="Read the principles"
              routePath={'/resources/digital-principles'}
              height="300px"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InfoCard
              img={coCoGrey}
              title={'Common Components'}
              description={descriptions[6]}
              linkText="View the collection"
              routePath={'/common-components'}
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={resourcesGrey}
              title={'Resources'}
              description={descriptions[3]}
              linkText="Find resources"
              routePath="/resources"
              height="300px"
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }}>
          <Col sm={12}>
            <Title2>Learn from Others</Title2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InfoCard
              img={communityGrey}
              title={'Communities'}
              description={descriptions[4]}
              linkText={'Connect'}
              routePath={'/communities'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={caseStudiesGrey}
              title={'Case Studies'}
              description={descriptions[5]}
              linkText="Learn more"
              routePath="/case-studies"
            />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default CardList;
