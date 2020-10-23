import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import {
  BannerSideImageImg,
  BannerSideImageText,
} from '../../StyleComponents/bannerWithImage';
import { BannerTitle } from '../../StyleComponents/bannerSimple';
import { BannerContainer } from '../../StyleComponents/nav';
const BannerSideImage = ({ content, image, title }) => {
  return (
    <BannerContainer>
      <Grid>
        <Row middle="xs">
          <Col sm={12} md={6}>
            <BannerSideImageText>
              <BannerTitle>{title}</BannerTitle>
              {content}
            </BannerSideImageText>
          </Col>
          <Col sm={12} md={6}>
            <BannerSideImageImg alt="" src={image} />
          </Col>
        </Row>
      </Grid>
    </BannerContainer>
  );
};

export default BannerSideImage;
