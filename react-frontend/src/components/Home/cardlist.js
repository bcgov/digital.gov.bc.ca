import React from 'react';
import InfoCard from './infocard';
import { Col, Row, Grid } from 'react-flexbox-grid';

import '../../css/home.css';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Work is underway to renew policies towards information management and technology.',
  'Find standards, policy, guides, and services to help you work more effectively in the digital age and deliver better services for citizens.',
  'Connect with people working to improve digital services in British Columbia.',
  'See examples of how teams are improving digital services for British Columbians.',
];

const imgLinks = [
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
];
const linkTexts = [
  'Read the framework',
  'Read the principals',
  'Read the policy',
  'Find resources',
  'Connect',
  'Learn more',
];
function CardList() {
  return (
    <div className="cardContainer">
      <div className="cardGrid">
        <Grid>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Framework'}
                img={imgLinks[0]}
                description={descriptions[0]}
                linkText={linkTexts[0]}
                routePath="/digital-framework"
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Principles'}
                img={imgLinks[1]}
                description={descriptions[1]}
              />
            </Col>
          </Row>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Policy'}
                img={imgLinks[2]}
                description={descriptions[2]}
                // TODO uncomment these when pages are made
                // linkText={linkTexts[2]}
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Resources'}
                img={imgLinks[3]}
                description={descriptions[3]}
                linkText={linkTexts[3]}
                routePath="/resources"
              />
            </Col>
          </Row>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Community'}
                img={imgLinks[4]}
                description={descriptions[4]}
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Case Studies'}
                img={imgLinks[5]}
                description={descriptions[5]}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default CardList;
