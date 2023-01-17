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
  'The Digital Code of Practice (DCOP) serves as a guide for what good digital products and services look like.',
  'The Digital Framework provides a high level vision and some expectations for how we work and what we deliver to enable digital ways of working.',
  'Principles to guide the day-to-day work of BC Public Servants and contractors who are designing, developing, and delivering digital services.',
  'The IM/IT Standards promote consistent, appropriate management of government technology resources.'

];

function Policy() {
  return (
    <DocumentTitle title="Policies and Standards - Digital Government - Province of British Columbia">
      <div >
        <GlobaStyleSize />
        <BannerSideImage
          title={'Digital Policies and Standards'}
          content={
            'Policies and Standards you can use to deliver excellent digital services.'
          }
          image={digitalFrameworkImage}
        />
        <div >

          <PageContainer className="fourColBanner" style={{ paddingTop: '20px', paddingBottom: '15px', backgroundColor: '#f2f2f2' }}>
            <Row>
              <Col md={6} lg={6}>
              <InfoCard
                  title={'Digital Code of Practice'}
                  description={descriptions[0]}
                  linkText="Read the Digital Code of Practice"
                  routePath={"/policies-and-standards/digital-code-of-practice"}
                  height="300px"
                />
              </Col>
              <Col md={6} lg={6}>
              <InfoCard
                  title={'Digital Framework'}
                  description={descriptions[1]}
                  linkText="Read the Framework"
                  routePath={"/policies-and-standards/digital-framework"}
                  height="300px"
                />

              </Col>
              <Col md={6} lg={6}>
              <InfoCard
                  title={'Digtal Principles'}
                  description={descriptions[2]}
                  linkText="Read the principles"
                  routePath={"/policies-and-standards/digital-principles"}
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
