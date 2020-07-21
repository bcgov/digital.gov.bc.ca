import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { FarmerContent } from './content';
import Template from './template';
import bannerImage from '../../images/case-study-farming.jpg';
import InfoCard from '../Home/infocard';

const caseStudiesMiningImg = require('../../images/case-study-mining.jpg');
const caseStudiesMSPImg = require('../../images/case-study-msp.jpg');

const others = (
  <div>
    <Grid className="cardAdjustment">
      <Row>
        <Col sm={12} md={6}>
          <InfoCard
            routePath={'/case-studies/mining-study'}
            linkText={'Read more'}
            title={'Mines Digital Service'}
            description={
              'BC’s mining industry is an integral part of the economy, with over $9 billion dollars in annual revenue. Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public.'
            }
            img={caseStudiesMiningImg}
            height="650px"
          />
        </Col>
        <Col sm={12} md={6}>
          <InfoCard
            routePath={'/case-studies/medical-study'}
            linkText={'Read more'}
            title={'Transforming the medical services plan'}
            description={
              'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the...'
            }
            img={caseStudiesMSPImg}
            height="650px"
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

const Farmers = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={FarmerContent.title}
        headerDescription={FarmerContent.description}
        context={FarmerContent.context}
        approach={FarmerContent.approach}
        outcomes={FarmerContent.outcomes}
        resources={FarmerContent.resources}
        backgroundImage={bannerImage}
        others={others}
      />
    </div>
  );
};

export default Farmers;
