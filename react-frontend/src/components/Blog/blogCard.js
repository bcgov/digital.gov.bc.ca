import React from 'react';
import dateFormat from 'dateformat';
import 'antd/dist/antd.css';
import {
  BlogCardAuthorLine,
  BlogCardDescription,
  BlogCardHeader,
  BlogCardStyled,
  BlogCardThumnail,
  BlogCardThumnailNullImg,
  BlogCardTitle,
} from '../StyleComponents/card';

function AuthorIcon({ url }) {
  if (url) {
    return (
      <img
        src={url}
        alt="avatar"
        style={{
          borderRadius: '50%',
          height: '24px',
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
        <div>
          <BlogCardThumnail src={coverImgSrc} data-testid="thumbnail" />
        </div>
      ) : (
        <div>
          <BlogCardThumnailNullImg />
        </div>
      )}
      <BlogCardHeader>
        <BlogCardAuthorLine>
          <div style={{ alignItems: 'center', display: 'flex' }}>
            <AuthorIcon url={authImg} />
            {author}
          </div>
          <div
            style={{ alignItems: 'center', display: 'flex', height: '24px' }}
          >
            {dateFormat(date, 'mmm d, yyyy')}
          </div>
        </BlogCardAuthorLine>
        <BlogCardTitle data-testid="title">{title}</BlogCardTitle>
      </BlogCardHeader>
      <BlogCardDescription data-testid="description">
        {description}
      </BlogCardDescription>
    </BlogCardStyled>
  );
}

export default BlogCard;
