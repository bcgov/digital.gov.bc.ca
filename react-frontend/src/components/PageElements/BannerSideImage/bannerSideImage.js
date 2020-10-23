import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { PageContainer } from '../../StyleComponents/pageContent';
import {
  BannerImage,
  BannerSideImageImg,
  BannerSubTitle,
  BannerTextWrapper,
  BannerText,
  BannerWithImageWrapper,
} from '../../StyleComponents/bannerWithImage';
import { BannerTitle } from '../../StyleComponents/bannerSimple';
const homeImage = require('../../../images/pngIllustrations/digitalHomePage.png');

const BannerSideImage = ({ content, image, title }) => {
  return (
    <div>
      {/* Add a div spacer here maybe */}
      <Grid>
        <Row middle="xs">
          <Col sm={12} md={6}>
            <div>
              <BannerTitle>Digital Government</BannerTitle>
              <BannerSubTitle>
                In this digital age, people expect fast and easy access to
                information and services. Learn how the British Columbia Public
                Service is building teams and using modern technology to meet
                those expectations and deliver better government services.
              </BannerSubTitle>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <BannerSideImageImg alt="" src={homeImage} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default BannerSideImage;
