import React from 'react';
import 'antd/dist/antd.css';

import {
  CommunityCardDescription,
  CommunityCardHeader,
  CommunityCardStyled,
} from '../StyleComponents/card';

function CommunityCard({ title, description, uid }) {
  return (
    <CommunityCardStyled to={`/communities/${uid}`}>
      <CommunityCardHeader>{title}</CommunityCardHeader>
      <CommunityCardDescription>{description}</CommunityCardDescription>
    </CommunityCardStyled>
  );
}

export default CommunityCard;
