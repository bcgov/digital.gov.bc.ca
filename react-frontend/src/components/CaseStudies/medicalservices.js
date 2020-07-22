import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Template from './template';
import { MedicalContent } from './content';
import '../../css/casetemplates.css';
import bannerImage from '../../images/case-study-msp.jpg';
import InfoCard from '../Home/infocard';

const caseStudiesFarmingImg = require('../../images/case-study-farming.jpg');
const caseStudiesMiningImg = require('../../images/case-study-mining.jpg');

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
            routePath={'/case-studies/farming-study'}
            linkText={'Read more'}
            title={'Helping farmers understand their soil'}
            description={
              'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to...'
            }
            img={caseStudiesFarmingImg}
            height="650px"
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

const MedicalServices = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={MedicalContent.title}
        headerDescription={MedicalContent.description}
        context={MedicalContent.context}
        approach={MedicalContent.approach}
        outcomes={MedicalContent.outcomes}
        backgroundImage={bannerImage}
        others={others}
      />
    </div>
  );
};

export default MedicalServices;
