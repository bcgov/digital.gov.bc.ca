import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../../StyleComponents/bannerWithImage';
import {
  BannerSideImgTitle,
  BannerSideImgSubTitle,
} from '../../StyleComponents/bannerWithImage';
import { BannerHorizontalContainer } from '../../StyleComponents/pageContent';
import { LinkInternalButton } from '../../StyleComponents/htmlTags';

const BannerSideImage = (props) => {
  let { content, image, title } = props;
  let button = null;
  if (props.homeButton){
  button = (
    <Row className="readPlanButton" style={{'justifyContent':'center'}}>
      <Col xs={12} style={{ flexBasis: 'auto'}}>
        <LinkInternalButton to="/digital-plan">Explore the Digital Plan</LinkInternalButton>
      </Col>
    </Row>
  );
  }

  return (
    <BannerHorizontalContainer>
      <style>
        {
        `
        .readPlanButton{
          margin-top: 15px;
        }
        @media only screen and (min-width: 992px){
          .readPlanButton {
            justify-content:left !important;
          }
        }
        `
        }
      </style>
      <Row middle="xs">
        <Col sm={12} md={6}>
          <BannerSideImgText>
            <BannerSideImgTitle>{title}</BannerSideImgTitle>
            <BannerSideImgSubTitle> {content} </BannerSideImgSubTitle>
          </BannerSideImgText>
          {button}
        </Col>
        <Col sm={12} md={6}>
          <BannerSideImageImg alt="" src={image} />
        </Col>
      </Row>
    </BannerHorizontalContainer>
  );
};

export default BannerSideImage;
