import React from 'react';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import CardList from './cardList';
import DocumentTitle from 'react-document-title';
import BCLivestream from './bcLivesteam';
import { PageContainer } from '../StyleComponents/pageContent';
import { Col, Row } from 'react-flexbox-grid';
import { HrefLink } from '../StyleComponents/htmlTags';
import { Heading } from '../StyleComponents/headings';

import {
  CardTitle,
  CardDescription,
  CardIllustration,
  CardLinkDiv,
  CardStyled,
} from '../StyleComponents/card';

const bannerContent = (
  <div>
    The BC Public Sector is creating modern teams and using technology to achieve the next phase of digital transformation in government.  
  </div>
);

const bannerTitle = "We're building a digital government, join us";

const homeImage =
  require('../../images/pngIllustrations/digitalHomePageWhite.png').default;

function Home() {
  return (
    <DocumentTitle title="Home - Digital Government - Province of British Columbia">
      <div>
        <style>
          {
            `
            .fourColBanner .cardRound{
              border:none;
              margin-bottom:0;
            }
            @media screen and (max-width: 767px){  
              .fourColBanner .ant-card-body{
                padding:24px 24px 10px 24px;
              }
            }
            @media screen and (min-width: 767px){  
              .fourColBanner .ant-card-body{
                padding:24px 0 24px 0;
              }
            }

            /*
            @media screen and (min-width: 992px){  
              .fourColBanner .ant-card-body{
                padding:0;
              }
            }*/
           
            `
          }
        </style>
        <BannerSideImage
          content={bannerContent}
          title={bannerTitle}
          image={homeImage}
          homeButton ={true}
        />
        <PageContainer style={{ paddingTop: '20px', paddingBottom: '0px' }}>
          <Heading>What you need to get started</Heading>
        </PageContainer>
        {/* <div style={{ backgroundColor: '#fff' }}>
          <PageContainer className="fourColBanner" style={{ paddingTop: '20px', paddingBottom: '15px', backgroundColor: '#fff' }}>
            <Row>
              <Col md={6} lg={6}>
                <CardStyled>
                  <BCLivestream />
                </CardStyled>
              </Col>
              <Col md={6} lg={6}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Digital Trust
                  </Heading>
                  <p>A new, empowering solution to digital identity and communication.</p>
                  <p>Visit the <HrefLink href="/digital-trust">BC Gov Digital Trust site</HrefLink></p>
                </CardStyled>
              </Col>
              <Col md={6} lg={6}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Marketplace
                  </Heading>
                  <p>Discover unique opportunities to collaborate with the BC Public Sector.</p>
                  <p>Visit the <HrefLink href="https://marketplace.digital.gov.bc.ca/">Digital Marketplace</HrefLink> to find Code with Us and Sprint with Us opportunities</p>
                </CardStyled>
              </Col>
              <Col md={6} lg={6}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Feedback
                  </Heading>
                  <p>Understanding your experience with digital.gov.bc.ca will help us develop it into a trusted wayfinding service. Please <HrefLink href="https://digital-feedback.apps.silver.devops.gov.bc.ca/">give us your feedback</HrefLink>.</p>
                </CardStyled>
              </Col>
            </Row>
          </PageContainer>
        </div> */}
        <CardList />
      </div>
    </DocumentTitle>
  );
}

export default Home;
