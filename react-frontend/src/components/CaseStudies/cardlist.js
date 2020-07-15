import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import InfoCard from '../Home/infocard';
import HorizontalInfoCard from './horizontalinfocard';

import '../../css/home.css';

const descriptions = [
  'Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public',
  'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to...',
  'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the...',
];

const imgLinks = [
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
  'https://dalehartery.files.wordpress.com/2015/05/light-grey-background-pattern.jpg',
];

function CardList() {
  return (
    <div className="cardContainer">
      <div className="cardGrid">
        <Grid>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <HorizontalInfoCard
                title={'Mines Digital Service'}
                img={imgLinks[0]}
                description={descriptions[0]}
                linkText={'Read more'}
                routePath="/casestudies"
              />
            </Col>
          </Row>
          <Row gutter={[0, 24]} justify={'space-around'}>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Helping farmers understand their soil'}
                img={imgLinks[1]}
                description={descriptions[1]}
                linkText={'Read more'}
                routePath="/casestudies"
              />
            </Col>
            <Col sm={12} md={6}>
              <InfoCard
                title={'Transforming the Medical Services Plan'}
                img={imgLinks[2]}
                description={descriptions[2]}
                linkText={'Read more'}
                routePath="/casestudies"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default CardList;
