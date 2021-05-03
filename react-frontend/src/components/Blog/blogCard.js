import React from 'react';
import 'antd/dist/antd.css';

import {
  CommunityCardDescription,
  CommunityCardHeader,
  CommunityCardStyled,
} from '../StyleComponents/card';

function BlogCard({ title, description, uid }) {
  return (
    <CommunityCardStyled to={`/blog/${uid}`}>
      <CommunityCardHeader>{title}</CommunityCardHeader>
      <CommunityCardDescription>{description}</CommunityCardDescription>
    </CommunityCardStyled>
  );
}

export default BlogCard;
