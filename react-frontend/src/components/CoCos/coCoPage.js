import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import * as Scroll from 'react-scroll';

import Query from '../Query';
import COCO_QUERY from '../../queries/coCos/coCo';

import { Col, Row } from 'react-flexbox-grid';
import DocumentTitle from 'react-document-title';
import { Button } from 'antd';

import CollapsedMenus from './collapsedMenus';
import WhyShouldIUseThis from './whyShoulIUseThis';
import Analytics from './analytics';
import CoCoBannerSideImage from './coCoBannerSideImage';

import { PageContainer } from '../StyleComponents/pageContent';
import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../StyleComponents/bannerWithImage';
import {
  BannerSideImgTitle,
  BannerSideImgSubTitle,
} from '../StyleComponents/bannerWithImage';
import { Heading, SubHeading } from '../StyleComponents/headings';
import {
  CoCoLinkExternal,
  HrefLinkScrollTo,
} from '../StyleComponents/htmlTags';

const coCoImage = require('../../images/pngIllustrations/CoCo.svg');

function CoCoPage() {
  const params = useParams();
  const ScrollElement = Scroll.Element;

  return (
    <DocumentTitle title="Common Components - Digital Government - Province of British Columbia">
      <PageContainer>
        <Query query={COCO_QUERY} uid={params.uid}>
          {({ data: { coCos } }) => {
            console.log(coCos);
            return (
              <div>
                <Row>
                  <Col xs={12}>
                    <Heading>On this page</Heading>
                  </Col>
                </Row>
                <Row between="xs">
                  <Col sm={2}>
                    <HrefLinkScrollTo
                      to="overview"
                      spy={true}
                      smooth={true}
                      offset={-180}
                    >
                      Overview
                    </HrefLinkScrollTo>
                  </Col>
                  <Col sm={2}>
                    <HrefLinkScrollTo
                      to="whoIsUsing"
                      spy={true}
                      smooth={true}
                      offset={-180}
                    >
                      Who else is using this?
                    </HrefLinkScrollTo>
                  </Col>
                  <Col sm={2}>
                    <HrefLinkScrollTo
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-180}
                    >
                      About {coCos[0]?.Name}
                    </HrefLinkScrollTo>
                  </Col>
                  <Col sm={2}>
                    <HrefLinkScrollTo
                      to="getStarted"
                      spy={true}
                      smooth={true}
                      offset={-180}
                    >
                      Getting started
                    </HrefLinkScrollTo>
                  </Col>
                  <Col sm={2}>
                    <HrefLinkScrollTo
                      to="support"
                      spy={true}
                      smooth={true}
                      offset={-180}
                    >
                      Support
                    </HrefLinkScrollTo>
                  </Col>
                </Row>

                <ScrollElement name="overview" className="element" />
                <CoCoBannerSideImage
                  name={coCos[0]?.Name}
                  description={coCos[0]?.Description}
                  status={coCos[0]?.ProjectStatus?.Status}
                  maintenanceStatus={coCos[0]?.ProjectStatus?.Maintenance}
                  image={null}
                  tags={coCos[0]?.Tags}
                  coCoLink={coCos[0]?.CoCoWebsite}
                />

                <WhyShouldIUseThis
                  whyShouldIUseThis={coCos[0]?.WhyShouldIUseThis}
                />

                <ScrollElement name="whoIsUsing" className="element" />
                <Analytics
                  coCoName={coCos[0]?.Name}
                  numberOfUsers={coCos[0]?.NumberOfUsers}
                  creationDate={coCos[0]?.ComponentCreationDate}
                  whoIsUsingThis={coCos[0]?.WhoIsUsingThis}
                />

                <div style={{ marginTop: '60px' }}>
                  <Row>
                    <Col xs={12}>
                      <ScrollElement name="about" className="element" />
                      <Heading>About {coCos[0]?.Name}</Heading>
                    </Col>
                  </Row>
                  <CollapsedMenus
                    price={coCos[0]?.CostStructure?.PaymentStructure}
                    service={coCos[0]?.ServiceLevelSupport}
                    technicalInfo={coCos[0]?.AdditionalTechnicalInfo?.Header}
                    requirements={
                      coCos[0]?.RequirementsAndRestrictions?.Heading
                    }
                  />
                </div>
                <div style={{ marginTop: '60px' }}>
                  <Row>
                    <Col xs={12}>
                      <ScrollElement name="getStarted" className="element" />
                      <Heading>Getting started</Heading>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      Select the "Start Using Now" button to visit the{' '}
                      {coCos[0]?.Name} Onboarding guide.
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} style={{ flexBasis: 'auto' }}>
                      <CoCoLinkExternal href={coCos[0]?.GetStartedURL}>
                        Start Using Now
                      </CoCoLinkExternal>
                    </Col>
                  </Row>
                </div>

                <div style={{ marginTop: '60px' }}>
                  <Row>
                    <Col xs={12}>
                      <ScrollElement name="support" className="element" />
                      <Heading>Support</Heading>
                    </Col>
                  </Row>
                  {/* For each support link add a line. */}
                </div>
              </div>
            );
          }}
        </Query>
      </PageContainer>
    </DocumentTitle>
  );
}

export default CoCoPage;
