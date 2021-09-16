import React from 'react';
import 'antd/dist/antd.css';

import {
  CardClickableBody,
  CommunityCardDescription,
  CommunityCardHeader,
  CommunityCardStyled,
} from '../StyleComponents/card';

function CommunityCard({ title, description, uid }) {
  return (
    <CommunityCardStyled to={`/communities/${uid}`}>
      <CommunityCardHeader>{title}</CommunityCardHeader>
      <CardClickableBody>
        <CommunityCardDescription>{description}</CommunityCardDescription>
      </CardClickableBody>
    </CommunityCardStyled>
  );
}

export default CommunityCard;
