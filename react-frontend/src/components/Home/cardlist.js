import React from 'react';
import InfoCard from './infocard';
import { Col, Row } from 'react-flexbox-grid';
import { PageContainer } from '../StyleComponents/pageContent';
import { Title2 } from '../StyleComponents/headings';

const digitalFrameworkGrey = require('../../images/pngIllustrations/digitalFrameworkGrey.png');
const digitalPrinciplesGrey = require('../../images/pngIllustrations/digitalPrinciplesGrey.png');
const productsGrey = require('../../images/pngIllustrations/productsServicesGrey.png');
const resourcesGrey = require('../../images/pngIllustrations/resourcesGrey.png');
const communityGrey = require('../../images/pngIllustrations/communityGrey.png');
const caseStudiesGrey = require('../../images/pngIllustrations/caseStudiesGrey.png');

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Supports to help you create or improve a digital service.',
  'Policy, standards, guides, and tools you can use right now to deliver excellent digital services.',
  'The digital delivery network within the BC Public Service is active and growing. Connect, learn, and contribute!',
  'See examples of how teams are improving digital services for British Columbians.',
];

const linkTexts = [
  'Read the framework',
  'Read the principles',
  'Read the policy',
  'Find resources',
  'Connect',
  'Learn more',
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
              linkText={linkTexts[0]}
              routePath="/digital-framework"
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={digitalPrinciplesGrey}
              title={'Digital Principles'}
              description={descriptions[1]}
              linkText={linkTexts[1]}
              routePath={'/resources/digital-principles'}
              height="300px"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InfoCard
              img={productsGrey}
              title={'Products & Services'}
              description={descriptions[2]}
              linkText="Find support"
              routePath={'/products-services'}
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={resourcesGrey}
              title={'Resources'}
              description={descriptions[3]}
              linkText={linkTexts[3]}
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
              linkText={linkTexts[5]}
              routePath="/case-studies"
            />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default CardList;
