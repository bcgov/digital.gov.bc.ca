import React, { useContext, useState } from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { Badges } from '../coCoCard';
import { AppConfigContext } from '../../../providers/AppConfig';

import {
  BannerSideImageImg,
  BannerSideImgText,
} from '../../StyleComponents/bannerWithImage';
import { BannerSideImgTitle } from '../../StyleComponents/bannerWithImage';
import { ReactMarkdownStyled } from '../../StyleComponents/styledMarkdown';

function CoCoBannerSideImage({
  name,
  description,
  status,
  maintenanceStatus,
  imageurl,
  tags,
  coCoLink,
}) {
  const config = useContext(AppConfigContext);
  const strapiURL = config['state']['strapiApiUrl'];
  const imageSource = strapiURL?.replace('/graphql', imageurl);

  const [coCoImage, setCoCoImg] = useState(imageSource);

  //If the image cannot be loaded from the backend the coCo image is used by default
  const onError = (error) => {
    setCoCoImg(require('../../../images/pngIllustrations/CoCo.svg'));
  };

  return (
    <Row top="xs" style={{ marginTop: '60px' }}>
      <Col sm={12} md={6}>
        <BannerSideImgText>
          {Badges(status, maintenanceStatus, tags, 'white')}
          <BannerSideImgTitle>{name}</BannerSideImgTitle>
          <ReactMarkdownStyled source={description} />
        </BannerSideImgText>
      </Col>
      <Col sm={12} md={6}>
        <a href={coCoLink} target="_blank">
          <BannerSideImageImg
            src={coCoImage}
            onError={onError}
            alt="CoCo Cover Image"
          />
        </a>
      </Col>
    </Row>
  );
}

export default CoCoBannerSideImage;
