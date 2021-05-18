import React from 'react';
import dateFormat from 'dateformat';
import 'antd/dist/antd.css';
import {
  BlogCardThumnail,
  BlogCardThumnailNullImg,
  BlogCardAuthorLine,
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
        style={{
          borderRadius: '50%',
          display: 'inline-block',
          height: '24px',
          verticalAlign: 'middle',
          width: '24px',
          marginLeft: '4px',
        }}
        data-testid="authorImage"
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
  return (
    <CommunityCardStyled
      style={{ backgroundColor: 'white' }}
      to={`/blog/${uid}`}
    >
      {coverImgSrc ? (
        <BlogCardThumnail src={coverImgSrc} data-testid="thumbnail" />
      ) : (
        <BlogCardThumnailNullImg />
      )}
      <div style={{ padding: '24px' }}>
        <BlogCardAuthorLine>
          <span>{author}</span>
          <AuthorIcon url={authImg} />
          <span style={{ float: 'right' }}>
            {dateFormat(date, 'mmm d,yyyy')}
          </span>
        </BlogCardAuthorLine>
        <CardTitle
          style={{ fontSize: '25.92px', clear: 'both' }}
          data-testid="title"
        >
          {title}
        </CardTitle>
        <CardDescription data-testid="description">
          {description}
        </CardDescription>
      </div>
    </CommunityCardStyled>
  );
}

export default BlogCard;
