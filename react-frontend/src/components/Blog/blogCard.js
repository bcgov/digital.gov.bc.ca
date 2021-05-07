import React from 'react';
import dateFormat from 'dateformat'
import 'antd/dist/antd.css';
import {
  BlogCardThumnail,
  CardTitle,
  CardDescription,
  CommunityCardStyled,
} from '../StyleComponents/card';

function AuthorIcon({ url }) {
  if (url) {
    return (
      <img
        src={url}
        alt="avatar"
        style={{ verticalAlign: 'middle', width: '24px', height: '24px', borderRadius: '50%' }}
      />
    );
  }
  return <div />;
}

function BlogCard({ title, description, uid, date, authImg, author, coverImgSrc }) {
  return (
    <CommunityCardStyled style={{ backgroundColor: 'white' }} to={`/blog/${uid}`}>
      <BlogCardThumnail src={coverImgSrc} />
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'inline-block', color: 'black', width: '100%' }}>
          <div>{author}</div>
          <AuthorIcon url={authImg} />
          <span style={{ float: 'right' }}>{dateFormat(date, "mmm d,yyyy")}</span>
        </div>
        <CardTitle style={{ clear: 'both' }}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CommunityCardStyled>
  );
}

export default BlogCard;
