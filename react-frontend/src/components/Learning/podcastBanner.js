import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { LearningHeaderImg } from '../StyleComponents/images';
import { Heading } from '../StyleComponents/headings';
import {
  BannerHorizontalContainer,
  LearningSideImageTextBox,
} from '../StyleComponents/pageContent';

const podcastImage =
  require('../../images/pngIllustrations/podcastGray.png').default;

function PodcastBanner() {
  return (
    <BannerHorizontalContainer>
      <Row middle="xs">
        <Col xs={12} lg={6}>
          <LearningSideImageTextBox>
            <Heading>
              The Exchange Podcast <FontAwesomeIcon icon={faMicrophone} />
            </Heading>
            <p>
              Ari Hershberg talks with members of the digital government
              community.
            </p>
          </LearningSideImageTextBox>
        </Col>
        <Col xs={12} lg={6}>
          <LearningHeaderImg alt="" src={podcastImage} />
        </Col>
      </Row>
    </BannerHorizontalContainer>
  );
}

export default PodcastBanner;
