import React from 'react';
import InfoCard from './infocard';
import { Col, Row } from 'react-flexbox-grid';
import { PageContainer } from '../StyleComponents/pageContent';

const digitalFrameworkGrey =
  require('../../images/pngIllustrations/digitalFrameworkGrey.png').default;
const digitalPrinciplesGrey =
  require('../../images/pngIllustrations/digitalPrinciplesGrey.png').default;
const productsGrey =
  require('../../images/pngIllustrations/productsServicesGrey.png').default;
const resourcesGrey =
  require('../../images/pngIllustrations/resourcesGrey.png').default;
const communityGrey =
  require('../../images/pngIllustrations/communityGrey.png').default;
const caseStudiesGrey =
  require('../../images/pngIllustrations/caseStudiesGrey.png').default;
const learningGrey =
  require('../../images/pngIllustrations/learningGrey.png').default;
const coCoGrey = require('../../images/pngIllustrations/coCoGrey.png').default;
const dcop = require('../../images/pngIllustrations/dcop_transparent.png').default;

const descriptions = [
  'The Digital Code of Practice (DCOP) expands on BC’s by showing what good digital products and services look like.',
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Supports to help you create or improve a digital service.',
  'Policy, standards, guides, and tools you can use right now to deliver excellent digital services.',
  'The digital delivery network within the BC Public Service is active and growing. Connect, learn, and contribute!',
  'See examples of how teams are improving digital services for British Columbians.',
  'Reusable building blocks to create your product or service',
  'Understand and adopt new approaches to teamwork and technology.',
];

const CardList = () => {
  return (
    <div>
      <PageContainer style={{ paddingTop: '90px' }}>
        <Row>
          <Col sm={12} md={6}>
          <InfoCard
              img={dcop}
              title={'Digital Code of Practice'}
              description={descriptions[0]}
              linkText="Read the Code of Practice"
              routePath="/digital-code-of-practice"
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={digitalFrameworkGrey}
              title={'Digital Framework'}
              description={descriptions[1]}
              linkText="Read the framework"
              routePath="/digital-framework"
              height="300px"
            />
          </Col>
        </Row>
        <Row>
          
          <Col sm={12} md={6}>
            <InfoCard
              img={digitalPrinciplesGrey}
              title={'Digital Principles'}
              description={descriptions[2]}
              linkText="Read the principles"
              routePath={'/resources/digital-principles'}
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={coCoGrey}
              title={'Common Components'}
              description={descriptions[7]}
              linkText="View the collection"
              routePath={'/common-components'}
              height="300px"
            />
          </Col>
        </Row>
        <Row>
          
          <Col sm={12} md={6}>
            <InfoCard
              img={resourcesGrey}
              title={'Resources'}
              description={descriptions[4]}
              linkText="Find resources"
              routePath="/resources"
              height="300px"
            />
          </Col>
           <Col sm={12} md={6}>
            <InfoCard
              img={communityGrey}
              title={'Communities'}
              description={descriptions[5]}
              linkText={'Connect with a community of practice'}
              routePath={'/communities'}
            />
          </Col>
        </Row>

        <Row>
         
          <Col sm={12} md={6}>
            <InfoCard
              img={caseStudiesGrey}
              title={'Case Studies'}
              description={descriptions[6]}
              linkText="Read case studies"
              routePath="/case-studies"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={learningGrey}
              title={'Learning'}
              description={descriptions[8]}
              linkText="Courses, events and more"
              routePath="/learning"
            />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default CardList;
