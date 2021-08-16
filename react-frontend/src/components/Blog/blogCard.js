import React from 'react';
import dateFormat from 'dateformat';
import 'antd/dist/antd.css';
import {
  BlogCardAuthorLine,
  BlogCardBody,
  BlogCardDescription,
  BlogCardStyled,
  BlogCardThumnail,
  BlogCardThumnailNullImg,
  BlogCardTitle,
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
          marginRight: '6px',
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
    <BlogCardStyled to={`/blog/${uid}`}>
      {coverImgSrc ? (
        <div style={{ height: '200px' }}>
          <BlogCardThumnail src={coverImgSrc} data-testid="thumbnail" />
        </div>
      ) : (
        <div style={{ height: '200px' }}>
          <BlogCardThumnailNullImg />
        </div>
      )}
      <BlogCardBody>
        <BlogCardAuthorLine>
          <div>
            <AuthorIcon url={authImg} />
            <span>{author}</span>
          </div>
          <div>{dateFormat(date, 'mmm d, yyyy')}</div>
        </BlogCardAuthorLine>
        <BlogCardTitle data-testid="title">{title}</BlogCardTitle>
        <BlogCardDescription data-testid="description">
          {description}
        </BlogCardDescription>
      </BlogCardBody>
    </BlogCardStyled>
  );
}

export default BlogCard;
