import React from 'react';
import 'antd/dist/antd.css';
import {
  ResourceCardThumnail,
  ResourceCardTextBox,
  CardTitle,
  ResourceCardStyled,
} from '../StyleComponents/card';
import { HrefLinkInternal } from '../StyleComponents/htmlTags';

function ResourceCard({ title, description, route, imgSrc }) {
  return (
    <ResourceCardStyled>
      <ResourceCardThumnail src={imgSrc} data-testid="thumbnail" alt="" />
      <ResourceCardTextBox>
        <CardTitle
          style={{ fontSize: '25.92px', clear: 'both' }}
          data-testid="title"
        >
          {title}
        </CardTitle>
        <p data-testid="description">{description}</p>
        <HrefLinkInternal
          to={route}
          style={{
            marginRight: 'auto',
            marginTop: 'auto',
            width: 'fit-content',
          }}
        >
          Advice about videoconferencing
        </HrefLinkInternal>
      </ResourceCardTextBox>
    </ResourceCardStyled>
  );
}

export default ResourceCard;
