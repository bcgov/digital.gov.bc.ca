import React, { useContext } from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { Badges } from './coCoCard';
import { AppConfigContext } from '../../providers/AppConfig';

import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../StyleComponents/bannerWithImage';
import { BannerSideImgTitle } from '../StyleComponents/bannerWithImage';
import { ReactMarkdownStyled } from '../StyleComponents/styledMarkdown';

function CoCoBannerSideImage({
  name,
  description,
  status,
  maintenanceStatus,
  imageurl,
  tags,
  coCoLink,
}) {
  // Backup image in case the coco image does not load properly.
  let coCoImage = require('../../images/pngIllustrations/CoCo.svg');
  const config = useContext(AppConfigContext);
  const strapiURL = config['state']['strapiApiUrl'];
  const imageSource = strapiURL.replace('/graphql', imageurl);
  console.log(strapiURL);
  console.log(imageurl);
  console.log(imageSource);

  return (
    <Row middle="xs">
      <Col sm={12} md={6}>
        <BannerSideImgText>
          {Badges(status, maintenanceStatus, tags, 'white')}
          <BannerSideImgTitle>{name}</BannerSideImgTitle>
          <ReactMarkdownStyled source={description} />
        </BannerSideImgText>
      </Col>
      <Col sm={12} md={6}>
        <a href={coCoLink} target="_blank">
          <BannerSideImageImg alt="" src={imageSource} alt={coCoImage} />
        </a>
      </Col>
    </Row>
  );
}

export default CoCoBannerSideImage;
