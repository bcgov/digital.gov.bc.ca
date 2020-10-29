import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../../StyleComponents/bannerWithImage';
import { BannerSideImgTitle } from '../../StyleComponents/bannerWithImage';
import { BannerContainer } from '../../StyleComponents/nav';
const BannerSideImage = ({ content, image, title }) => {
  return (
    <BannerContainer>
      <Grid>
        <Row middle="xs">
          <Col sm={12} md={6}>
            <BannerSideImgText>
              <BannerSideImgTitle>{title}</BannerSideImgTitle>
              {content}
            </BannerSideImgText>
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
