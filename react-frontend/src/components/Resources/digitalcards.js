import React from 'react';
import InfoCard from '../Home/infocard';
import { Col, Row, Grid } from 'react-flexbox-grid';
import '../../css/resources.css';

const descriptions = [
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'Work is underway to renew policies towards information management and technology.',
];

// const imgLinks = [
//   'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
//   'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
//   'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
// ];
// const linkTexts = [
//   'Read the framework',
//   'Read the principals',
//   'Read the policy',
// ];

function DigitalCards() {
  return (
    <div className="guides">
      <div>
        <h2 className="resourceInfoTitle">Standards and Policy</h2>
      </div>
      <div className="resourceInfo">
        <Grid>
          <Row>
            <Col sm={12} md={6}>
              <div className="guidesInfo">
                <img
                  className="guidesImg"
                  src="https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg"
                  alt="example"
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Digital Principles'}
                description={descriptions[1]}
                // linkText={'More'}
              />
            </Col>
          </Row>
        </Grid>
        <div>
          <p className="digitalSubtitle">
            See how we are working in the open on the next IM/IT Policy
            Framework -{' '}
            <a href="https://github.com/bcgov/digital-policy">
              view the alpha version on Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DigitalCards;
