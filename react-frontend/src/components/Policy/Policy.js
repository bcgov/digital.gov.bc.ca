import React from 'react';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { Col, Row } from 'react-flexbox-grid';
import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';
import {
  CardStyled
} from '../StyleComponents/card';
import { Heading } from '../StyleComponents/headings';
import InfoCard from '../Home/infocard';
import { digitalCardLinks } from '../../constants/urls';


const digitalFrameworkImage =
  require('../../images/pngIllustrations/digitalFrameworkWhite.png').default;

const descriptions = [
  'Learn what good digital products and services look like. Use when designing, building, buying or running technology and digital services.',
  'Our plan has four missions to achieve the next phase of digital transformation in government. Are you ready to level up your work?',
  'Our digital principles are set in policy. Use them to guide your day-to-day work.',
  'The IM/IT Standards promote consistent, appropriate management of government technology resources.'

];

function Policy() {
  return (
    <DocumentTitle title="Policies and Standards - Digital Government - Province of British Columbia">
      <div >
        <GlobaStyleSize />
        <BannerSideImage
          title={'Policies and standards'}
          content={
            'Understand policies and standards so you can deliver the best possible digital services to help people.'
          }
          image={digitalFrameworkImage}
        />
        <div >

          <PageContainer style={{ paddingTop: '20px', paddingBottom: '15px', backgroundColor: '#f2f2f2' }}>
            <Row>
             
              <Col md={6} lg={6}>
              <InfoCard
                  title={'Digital Plan'}
                  description={descriptions[1]}
                  linkText="Explore the Digital Plan"
                  routePath={"/digital-plan"}
                  height="300px"
                />

              </Col>
              <Col md={6} lg={6}>
              <InfoCard
                  title={'Core policy principles'}
                  description={descriptions[2]}
                  linkText="Learn about the principles"
                  routePath={"/policies-and-standards/digital-principles"}
                  height="300px"
                />
              </Col>

              <Col md={6} lg={6}>
              <InfoCard
                  title={'Digital Code of Practice'}
                  description={descriptions[0]}
                  linkText="Understand the Code of Practice"
                  routePath={"/policies-and-standards/digital-code-of-practice"}
                  height="300px"
                />
              </Col>

              <Col md={6} lg={6}>
                <InfoCard
                  title={'IM/IT Standards'}
                  description={descriptions[3]}
                  linkText="Read the standards"
                  linkPath={digitalCardLinks.imItStandards}
                  height="300px"
                />
              </Col>
              
            </Row>
          </PageContainer>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Policy;
