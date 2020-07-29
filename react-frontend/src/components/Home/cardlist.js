import React from 'react';
import InfoCard from './infocard';
import { Col, Row, Grid } from 'react-flexbox-grid';

import '../../css/home.css';

const communityImg = require('../../images/community.png');
const caseStudiesImg = require('../../images/case-studies.png');

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Work is underway to renew policies towards information management and technology.',
  'Find standards, policy, guides, and services to help you work more effectively in the digital age and deliver better services for citizens.',
  'Connect with people working to improve digital services in British Columbia.',
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
    <div className="cardContainer">
      <div className="cardGrid">
        <Grid>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Framework'}
                description={descriptions[0]}
                linkText={linkTexts[0]}
                routePath="/digital-framework"
                height="300px"
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Principles'}
                description={descriptions[1]}
                linkText={linkTexts[1]}
                routePath={'/resources/digital-principles'}
                height="300px"
              />
            </Col>
          </Row>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Products and Services'}
                description={descriptions[2]}
                linkText="Find support"
                routePath={'/products-services'}
                height="300px"
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Resources'}
                description={descriptions[3]}
                linkText={linkTexts[3]}
                routePath="/resources"
                height="300px"
              />
            </Col>
          </Row>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Community'}
                img={communityImg}
                description={descriptions[4]}
                linkText={'Connect'}
                linkPath={'https://bcdevexchange.org/'}
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Case Studies'}
                img={caseStudiesImg}
                description={descriptions[5]}
                linkText={linkTexts[5]}
                routePath="/case-studies"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default CardList;
