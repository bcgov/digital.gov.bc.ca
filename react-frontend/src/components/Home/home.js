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
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';

import {
  CardTitle,
  CardDescription,
  CardIllustration,
  CardLinkDiv,
  CardStyled,
} from '../StyleComponents/card';

const bannerContent = (
  <div>
    The BC Public Service is creating modern teams and using technology to achieve the next phase of digital transformation in government.  
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
              .fourColBannerLarge{
                display:none;
              }
              .fourColBannerSmall{
                display:block;
              }
              .fourColBanner{
                padding-top: 10px !important;
              }
            }
            @media screen and (min-width: 768px){  
              .fourColBanner .ant-card-body{
                padding:24px 0 24px 0;
              }
              .fourColBannerLarge{
                display:block;
              }
              .fourColBannerSmall{
                display:none;
              }
            }

            .fourColBannerSmall .col-md-4.col-lg-4{
              margin-top:30px;
            }

            .fourColBannerLarge .col-md-4.col-lg-4:first-of-type{
              padding-left:0px;
              padding-right:60px;
            }

            .fourColBannerLarge .col-md-4.col-lg-4:last-of-type{
              padding-left:60px;
              padding-right:0px;
            }

            .fourColBannerLarge .col-md-4.col-lg-4{
              padding-left:30px;
              padding-right:30px;
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
        <PageContainer style={{ paddingTop: '40px', paddingBottom: '0px' }}>
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

        <div style={{ backgroundColor: '#fff' }}>
          <PageContainer className="fourColBanner" style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#fff' }}>
          <div class="fourColBannerLarge">
          <Row>
            
              <Col md={4} lg={4}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Join the Exchange Lab community
                  </Heading>
                </CardStyled>
              </Col>

              <Col md={4} lg={4}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Build confidence through Digital Trust
                  </Heading>
                </CardStyled>
              </Col>

              <Col md={4} lg={4}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Procure with the Digital Marketplace
                  </Heading>
                </CardStyled>
              </Col>

            </Row>

            <Row>
              <Col md={4} lg={4}>
                <CardStyled>

                  <p>Learn from digital leaders through <HrefLink href="https://www.youtube.com/playlist?list=PL9CV_8JBQHiqpIJZd7V4stSAwo4jxfJ9b">#DigitalBC livestreams</HrefLink>, Collaborate and Coffee, <HrefLink href="https://www.eventbrite.ca/e/experts-in-residence-tickets-109220948798">Experts in Residence</HrefLink>, podcasts, newsletters and events.</p>

                </CardStyled>
              </Col>
              <Col md={4} lg={4}>
                <CardStyled>

                  <p>Explore the latest ways to safely, securely and confidently share information and communicate online.</p>

                </CardStyled>
              </Col>
              <Col md={4} lg={4}>
                <CardStyled>

                  <p>We're connecting talented digital resources with the public service to build digital products with Sprint with Us and Code with Us.</p>

                </CardStyled>
              </Col>
            </Row>

            <Row>
              <Col md={4} lg={4}>
                <CardStyled>
                  <HrefLinkStandalone
                    href="https://eepurl.us3.list-manage.com/subscribe?u=2cd8863adab4f39ade7cbee34&id=b331c22b50"
                  >
                    Explore your digital interests
                  </HrefLinkStandalone>

                </CardStyled>
              </Col>
              <Col md={4} lg={4}>
                <CardStyled>
                  <HrefLinkStandalone
                    href="https://digital.gov.bc.ca/digital-trust"
                  >
                    Learn about Digital Trust
                  </HrefLinkStandalone>

                  

                </CardStyled>
              </Col>
              <Col md={4} lg={4}>
                <CardStyled>

                  <HrefLinkStandalone
                    href="https://digital.gov.bc.ca/digital-trust"
                  >
                    Post or find an opportunity
                  </HrefLinkStandalone>

                </CardStyled>
              </Col>
            </Row>
            </div>

            <div class="fourColBannerSmall">
            <Row>
              <Col md={4} lg={4}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Join the Exchange Lab community
                  </Heading>
                  <p>Learn from digital leaders through <HrefLink href="https://www.youtube.com/playlist?list=PL9CV_8JBQHiqpIJZd7V4stSAwo4jxfJ9b">#DigitalBC livestreams</HrefLink>, Collaborate and Coffee, <HrefLink href="https://www.eventbrite.ca/e/experts-in-residence-tickets-109220948798">Experts in Residence</HrefLink>, podcasts, newsletters and events.</p>

                  <HrefLinkStandalone
                    href="https://eepurl.us3.list-manage.com/subscribe?u=2cd8863adab4f39ade7cbee34&id=b331c22b50"
                  >
                    Explore your digital interests
                  </HrefLinkStandalone>

                </CardStyled>
              </Col>
              <Col md={4} lg={4}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Build confidence through Digital Trust
                  </Heading>
                  <p>Explore the latest ways to safely, securely and confidently share information and communicate online.</p>

                  <HrefLinkStandalone
                    href="https://digital.gov.bc.ca/digital-trust"
                  >
                    Learn about Digital Trust
                  </HrefLinkStandalone>

                  

                </CardStyled>
              </Col>
              <Col md={4} lg={4}>
                <CardStyled>
                  <Heading style={{ lineHeight: '1.2' }}>
                    Procure with the Digital Marketplace
                  </Heading>
                  <p>We're connecting talented digital resources with the public service to build digital products with Sprint with Us and Code with Us.</p>

                  <HrefLinkStandalone
                    href="https://marketplace.digital.gov.bc.ca/"
                  >
                    Post or find an opportunity
                  </HrefLinkStandalone>

                </CardStyled>
              </Col>
            </Row>
            </div>

          </PageContainer>
        </div>

      </div>
    </DocumentTitle>
  );
}

export default Home;
