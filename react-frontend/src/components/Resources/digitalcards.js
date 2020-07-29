import React from 'react';
import InfoCard from '../Home/infocard';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'See how we are working in the open on the next IM/IT Policy Framework.',
];

const linkTexts = ['Read the principles', 'View the alpha version on GitHub'];

const links = [
  '/resources/digital-principles',
  'https://github.com/bcgov/digital-policy',
];

function DigitalCards() {
  return (
    <div className="resourceBlock">
      <div>
        <h2 className="resourceInfoTitle">Standards & Policy</h2>
      </div>
      <div className="resourceInfo">
        <Grid className="cardAdjustment">
          <Row>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Principles'}
                description={descriptions[1]}
                linkText={linkTexts[0]}
                routePath={links[0]}
                height="300px"
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'IM/IT Policy Framework'}
                description={descriptions[2]}
                linkText={linkTexts[1]}
                linkPath={links[1]}
                height="300px"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default DigitalCards;
