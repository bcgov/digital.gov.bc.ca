import React from 'react';
import dateFormat from 'dateformat';
import 'antd/dist/antd.css';
import {
  BlogCardThumnail,
  CardTitle,
  CardDescription,
  CommunityCardDescription,
  CommunityCardHeader,
  CommunityCardStyled,
} from '../StyleComponents/card';

function AuthorIcon({ url }) {
  if (url) {
    return (
      <img
        src={url}
        alt="avatar"
        style={{
          verticalAlign: 'middle',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
        }}
      />
    );
  }
  return <div />;
}

function BlogCard({
  title,
  description,
  uid,
  date,
  authImg,
  author,
  coverImgSrc,
}) {
  console.log(dateFormat(date, 'mmm d,yyyy'));
  return (
    <CommunityCardStyled
      style={{ backgroundColor: 'white' }}
      to={`/blog/${uid}`}
    >
      {/* cover image */}
      <BlogCardThumnail src={coverImgSrc} />

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'inline', color: 'black', width: '100%' }}>
          <span>{author}</span> <AuthorIcon url={authImg} />
          <span style={{ float: 'right' }}>
            {dateFormat(date, 'mmm d,yyyy')}
          </span>
        </div>
        <CardTitle style={{ clear: 'both' }}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CommunityCardStyled>
  );
}

export default BlogCard;
