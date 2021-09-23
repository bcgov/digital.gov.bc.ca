import React from 'react';
import 'antd/dist/antd.css';

import {
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
      <CommunityCardDescription>{description}</CommunityCardDescription>
    </CommunityCardStyled>
  );
}

export default CommunityCard;
