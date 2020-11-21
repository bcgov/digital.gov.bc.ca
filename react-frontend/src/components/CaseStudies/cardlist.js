import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useRouteMatch } from 'react-router-dom';
import CaseStudiesInfoCard from './caseStudiesInfocard';
import HorizontalInfoCard from './horizontalinfocard';

import { PageContainer } from '../StyleComponents/pageContent';

const caseStudiesFarmingImg = require('../../images/case-study-farming.jpg');
const caseStudiesMiningImg = require('../../images/case-study-mining.jpg');
const caseStudiesMSPImg = require('../../images/case-study-msp.jpg');

const descriptions = [
  'Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public.',
  'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations between soil management pending, the research aimed to...',
  'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the...',
];

const CardList = () => {
  let { url } = useRouteMatch();
  return (
    <PageContainer>
      <Row>
        <Col sm={12}>
          <HorizontalInfoCard
            title={'Mines Digital Service'}
            img={caseStudiesMiningImg}
            description={descriptions[0]}
            linkText={'Read more'}
            routePath={url + '/mining-study'}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <CaseStudiesInfoCard
            title={'Helping farmers understand their soil'}
            img={caseStudiesFarmingImg}
            description={descriptions[1]}
            linkText={'Read more'}
            routePath={url + '/farming-study'}
          />
        </Col>
        <Col xs={12} md={6}>
          <CaseStudiesInfoCard
            title={'Transforming the Medical Services Plan'}
            img={caseStudiesMSPImg}
            description={descriptions[2]}
            linkText={'Read more'}
            routePath={url + '/medical-study'}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default CardList;
