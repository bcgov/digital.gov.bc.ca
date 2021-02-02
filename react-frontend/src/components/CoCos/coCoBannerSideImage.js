import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { Badges } from './coCoCard';

import { Heading, SubHeading } from '../StyleComponents/headings';
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
}) {
  const coCoImage = require('../../images/pngIllustrations/CoCo.svg');

  let tag = tags.map((tag) => tag?.name);
  console.log(status);
  console.log(maintenanceStatus);
  console.log(tag);
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
        <BannerSideImageImg alt="" src={coCoImage} />
      </Col>
    </Row>
  );
}

export default CoCoBannerSideImage;
