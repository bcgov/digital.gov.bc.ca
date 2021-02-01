import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Query from '../Query';
import COCO_QUERY from '../../queries/coCos/coCo';

import { Col, Row } from 'react-flexbox-grid';
import DocumentTitle from 'react-document-title';
import { Button } from 'antd';

import MinistryUse from './ministryUse';
import CollapsedMenus from './collapsedMenus';
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
import { CoCoLinkExternal } from '../StyleComponents/htmlTags';

const coCoImage = require('../../images/pngIllustrations/CoCo.svg');

function CoCoPage() {
  const params = useParams();
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
                  <Col md={2}>Overview</Col>
                  <Col md={2}>Who else is using this?</Col>
                  <Col md={2}>About {coCos[0].Name}</Col>
                  <Col md={2}>Getting started</Col>
                  <Col md={2}>Support</Col>
                </Row>
                {/*TODO: The tags must be added*/}

                <Row middle="xs">
                  <Col sm={12} md={6}>
                    <BannerSideImgText>
                      <BannerSideImgTitle>{coCos[0].Name}</BannerSideImgTitle>
                      {/*TODO: The description must be formated*/}
                      <BannerSideImgSubTitle>
                        {' '}
                        {coCos[0].Description}{' '}
                      </BannerSideImgSubTitle>
                    </BannerSideImgText>
                  </Col>
                  <Col sm={12} md={6}>
                    <BannerSideImageImg alt="" src={coCoImage} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Heading>Why should I use this?</Heading>
                  </Col>
                </Row>
                <Row middle="xs">
                  <Col xs={12} md={4}>
                    <SubHeading>
                      {coCos[0]?.WhyShouldIUseThis[0]?.Heading}
                    </SubHeading>
                    <p>{coCos[0]?.WhyShouldIUseThis[0]?.Details}</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <SubHeading>
                      {coCos[0]?.WhyShouldIUseThis[1]?.Heading}
                    </SubHeading>
                    <p>{coCos[0]?.WhyShouldIUseThis[1]?.Details}</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <SubHeading>
                      {coCos[0]?.WhyShouldIUseThis[2]?.Heading}
                    </SubHeading>
                    <p>{coCos[0]?.WhyShouldIUseThis[2]?.Details}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Heading>Who else is using this?</Heading>
                  </Col>
                </Row>
                <Row>
                  {/* Validate the imput for the ministry */}
                  <MinistryUse
                    acronym={
                      coCos[0]?.WhoIsUsingThis[0]?.ministry?.MinistryAcronym
                    }
                    summary={coCos[0]?.WhoIsUsingThis[0]?.Summary}
                  />
                  <MinistryUse
                    acronym={
                      coCos[0]?.WhoIsUsingThis[1]?.ministry?.MinistryAcronym
                    }
                    summary={coCos[0]?.WhoIsUsingThis[1]?.Summary}
                  />
                  <MinistryUse
                    acronym={
                      coCos[0]?.WhoIsUsingThis[2]?.ministry?.MinistryAcronym
                    }
                    summary={coCos[0]?.WhoIsUsingThis[2]?.Summary}
                  />
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <SubHeading>Running Since</SubHeading>
                    <span>{coCos[0]?.ComponentCreationDate}</span>
                  </Col>
                  <Col xs={12} md={4}>
                    <SubHeading>{coCos[0]?.NumberOfUsers}</SubHeading>
                    <span>teams using {coCos[0].Name}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Heading>About {coCos[0].Name}</Heading>
                  </Col>
                </Row>
                <CollapsedMenus
                  price={coCos[0]?.CostStructure?.PaymentStructure}
                  service={coCos[0]?.ServiceLevelSupport}
                  technicalInfo={coCos[0]?.AdditionalTechnicalInfo?.Header}
                  requirements={coCos[0]?.RequirementsAndRestrictions?.Heading}
                />
                <Row>
                  <Col xs={12}>
                    <Heading>Getting started</Heading>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    Select the "Start Using Now" button to visit the{' '}
                    {coCos[0].Name} Onboarding guide.
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} style={{ flexBasis: 'auto' }}>
                    <CoCoLinkExternal href={coCos[0]?.GetStartedURL}>
                      Start Using Now
                    </CoCoLinkExternal>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Heading>Support</Heading>
                  </Col>
                </Row>
                {/* For each support link add a line. */}
              </div>
            );
          }}
        </Query>
      </PageContainer>
    </DocumentTitle>
  );
}

export default CoCoPage;
