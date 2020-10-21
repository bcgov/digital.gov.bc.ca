import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { PageContainer } from '../../StyleComponents/pageContent';
import {
  BannerImage,
  BannerSubTitle,
  BannerTextWrapper,
  BannerText,
  BannerTitle,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';

const homeImage = require('../../../images/pngIllustrations/digitalHomePage.png');

const BannerSideImage = ({ content, image, title }) => {
  return (
    <PageContainer>
      <Grid>
        <Row>
          <Col sm={12} md={6}>
            <BannerTitle>Digital Government</BannerTitle>
            <BannerSubTitle>
              In this digital age, people expect fast and easy access to
              information and services. Learn how the British Columbia Public
              Service is building teams and using modern technology to meet
              those expectations and deliver better government services.
            </BannerSubTitle>
          </Col>
          <Col sm={12} md={6}>
            <img alt="" src={homeImage} />
          </Col>
        </Row>
      </Grid>
    </PageContainer>
  );
};

export default BannerSideImage;
