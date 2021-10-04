import React from 'react';
import 'antd/dist/antd.css';

import {
  CardClickableBody,
  CommunityCardDescription,
  CommunityCardHeader,
  CommunityCardHeading,
  CommunityCardStyled,
} from '../StyleComponents/card';

function CommunityCard({ title, description, uid }) {
  return (
    <CommunityCardStyled to={`/communities/${uid}`}>
      <CommunityCardHeader>
        <CommunityCardHeading>{title}</CommunityCardHeading>
      </CommunityCardHeader>
      <CardClickableBody>
        <CommunityCardDescription>{description}</CommunityCardDescription>
      </CardClickableBody>
    </CommunityCardStyled>
  );
}

export default CommunityCard;
