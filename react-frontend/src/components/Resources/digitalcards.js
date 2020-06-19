import React from 'react';
import InfoCard from '../Home/infocard.js';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Work is underway to renew policies towards information management and technology.',
];

const imgLinks = [
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
];
const linkTexts = [
  'Read the framework',
  'Read the principals',
  'Read the policy',
];

function DigitalCards() {
  return (
    <div className="digitalCards">
      <Grid className="cardGrid">
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <InfoCard
              title={'Digital Framework'}
              img={imgLinks[0]}
              description={descriptions[0]}
              linkText={linkTexts[0]}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <InfoCard
              title={'Digital Principles'}
              img={imgLinks[1]}
              description={descriptions[1]}
              linkText={linkTexts[1]}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <InfoCard
              title={'Digital Framework'}
              img={imgLinks[2]}
              description={descriptions[2]}
              linkText={linkTexts[2]}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default DigitalCards;
