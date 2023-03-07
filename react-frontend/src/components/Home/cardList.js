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

const descriptions = [
  'Understand policies and standards so you can deliver the best possible digital services to help people.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Supports to help you create or improve a digital service.',
  'Policy, standards, guides, and tools you can use right now to deliver excellent digital services.',
  'Our digital network is active and growing. Connect with your peers and contribute!',
  'See examples of how teams are improving digital services for British Columbians.',
  'Reusable building blocks to help you create your product or service.',
  'Understand and adopt new approaches to teamwork and technology.',
];

const CardList = () => {
  return (
    <div>
      <PageContainer style={{ paddingTop: '20px', paddingBottom:'0' }}>
        <Row>
          <Col sm={12} md={6}>
            <InfoCard
              img={digitalFrameworkGrey}
              title={'Policies and Standards'}
              description={descriptions[0]}
              linkText="Review policies and standards"
              routePath="policies-and-standards"
              height="300px"
            />
          </Col>
          <Col sm={12} md={6}>
            <InfoCard
              img={coCoGrey}
              title={'Common Components'}
              description={descriptions[6]}
              linkText="Explore common components"
              routePath={'/common-components'}
              height="300px"
            />
          </Col>
          {/* <Col sm={12} md={6}>
            <InfoCard
              img={resourcesGrey}
              title={'Resources'}
              description={descriptions[3]}
              linkText="Find resources"
              routePath="/resources"
              height="300px"
            />
          </Col> */}
          <Col sm={12} md={6}>
            <InfoCard
              img={communityGrey}
              title={'Communities of practice'}
              description={descriptions[4]}
              linkText={'Find a community of practice'}
              routePath={'/communities'}
            />
          </Col>
          {/* <Col sm={12} md={6}>
            <InfoCard
              img={caseStudiesGrey}
              title={'Case Studies'}
              description={descriptions[5]}
              linkText="Read case studies"
              routePath="/case-studies"
            />
          </Col> */}
          <Col sm={12} md={6}>
            <InfoCard
              img={learningGrey}
              title={'Continuous learning'}
              description={descriptions[7]}
              linkText="Develop your skills"
              routePath="/learning"
            />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default CardList;
