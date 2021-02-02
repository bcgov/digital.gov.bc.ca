import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { Badges } from './coCoCard';

import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../StyleComponents/bannerWithImage';
import {
  BannerSideImgTitle,
  BannerSideImgSubTitle,
} from '../StyleComponents/bannerWithImage';

function CoCoBannerSideImage({
  name,
  description,
  status,
  maintenanceStatus,
  image,
  tags,
  coCoLink,
}) {
  const coCoImage = require('../../images/pngIllustrations/CoCo.svg');
  return (
    <Row middle="xs">
      <Col sm={12} md={6}>
        <BannerSideImgText>
          {Badges(status, maintenanceStatus, tags, 'white')}
          <BannerSideImgTitle>{name}</BannerSideImgTitle>
          {/*TODO: The description must be formated*/}
          <BannerSideImgSubTitle> {description} </BannerSideImgSubTitle>
        </BannerSideImgText>
      </Col>
      <Col sm={12} md={6}>
        <a href={coCoLink} target="_blank">
          <BannerSideImageImg alt="" src={coCoImage} />
        </a>
      </Col>
    </Row>
  );
}

export default CoCoBannerSideImage;
