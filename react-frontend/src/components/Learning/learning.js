import React from 'react';

import ContactUs from './contactUs';
import Courses from './courses';
import Events from './events';
import Podcast from './podcast';
import { SubHeading } from '../StyleComponents/headings';
import { StyledP, HrefLink } from '../StyleComponents/htmlTags';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';

const learningImage =
  require('../../images/pngIllustrations/learningWhite.png').default;

function Learning() {
  return (
    <DocumentTitle title="Learning - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Learning'}
          content={
            'Understand and adopt new approaches to teamwork and technology.'
          }
          image={learningImage}
        />
        <ContentBlockContainer id="digitalacademy">
          <Row>
            <Col sm={12}>
              <SubHeading>Digital Academy LearningHub</SubHeading>
              <StyledP>Visit the <HrefLink href="https://learningcentre.gww.gov.bc.ca/learninghub/learning_partner/digital-academy/">Digital Academy LearningHub</HrefLink> page to sign-up for scheduled:
              
                <ul>
                  <li>internal courses related to Agile, OpenShift, Scrum Master, and Scrum Product Owner</li>
                  <li>external partner learning opportunities on a variety of topics</li>
                </ul>
              
              For more information contact <HrefLink href="mailto:DigitalAcademy@gov.bc.ca">DigitalAcademy@gov.bc.ca</HrefLink>
              </StyledP>
            </Col>
          </Row>
        </ContentBlockContainer>
        <ContentBlockContainer id="newsletter">
          <Row>
            <Col sm={12}>
              <SubHeading>Newsletter</SubHeading>
              <StyledP>Subscribe to the <HrefLink href="https://us3.list-manage.com/subscribe?u=2cd8863adab4f39ade7cbee34&id=b331c22b50">BCDevExchange Newsletter</HrefLink> to stay up-to-date on events, learning opportunities, and what's happening at the Exchange Lab.
              </StyledP>
            </Col>
          </Row>
        </ContentBlockContainer>
        <Courses />
        <Events />
        <ContactUs />
        <Podcast />
      </div>
    </DocumentTitle>
  );
}

export default Learning;
