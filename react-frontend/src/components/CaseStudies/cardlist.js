import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useRouteMatch } from 'react-router-dom';
import CaseStudiesInfoCard from './caseStudiesInfocard';
import HorizontalInfoCard from './horizontalInfoCard';

import { PageContainer } from '../StyleComponents/pageContent';

const caseStudiesFarmingImg = require('../../images/case-study-farming.jpg')
  .default;
const caseStudiesMiningImg = require('../../images/case-study-mining.jpg')
  .default;
const caseStudiesMSPImg = require('../../images/case-study-msp.jpg').default;
const caseStudiesOrgBookImg = require('../../images/case-study-orgbook.jpg')
  .default;

const descriptions = [
  'Organizations and citizens need easy access to verified information about registered BC organizations. To streamline and modernize this access, the OrgBook BC digital service was developed by the Government of British Columbia using proven technologies in Digital Trust.',
  'Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public.',
  'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations between soil management pending, the research aimed to provide farmers with the support and resources they needed.',
  'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the Ministry of Health wanted to introduce a digital self-serve product, an online enrolment form.',
];

const CardList = () => {
  let { url } = useRouteMatch();
  return (
    <PageContainer>
      <Row>
        <Col sm={12} md={6} lg={4} style={{ margin: '8px 0' }}>
          <CaseStudiesInfoCard
            title={'OrgBook BC'}
            img={caseStudiesOrgBookImg}
            description={descriptions[0]}
            linkText={'Read the case study'}
            routePath={url + '/orgbook-study'}
          />
        </Col>
        <Col sm={12} md={6} lg={4} style={{ margin: '8px 0' }}>
          <CaseStudiesInfoCard
            title={'Mines Digital Service'}
            img={caseStudiesMiningImg}
            description={descriptions[1]}
            linkText={'Read the case study'}
            routePath={url + '/mining-study'}
          />
        </Col>
        <Col sm={12} md={6} lg={4} style={{ margin: '8px 0' }}>
          <CaseStudiesInfoCard
            title={'Helping farmers understand their soil'}
            img={caseStudiesFarmingImg}
            description={descriptions[2]}
            linkText={'Read the case study'}
            routePath={url + '/farming-study'}
          />
        </Col>
        <Col sm={12} md={6} lg={4} style={{ margin: '8px 0' }}>
          <CaseStudiesInfoCard
            title={'Transforming the Medical Services Plan'}
            img={caseStudiesMSPImg}
            description={descriptions[3]}
            linkText={'Read the case study'}
            routePath={url + '/medical-study'}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default CardList;
