import React from 'react';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/react-hooks';

import { HrefLinkInternal } from '../StyleComponents/htmlTags';
import BLOGLIST_QUERY from '../../queries/blog/blogList';

function BlogNavigation({ uid }) {
  // Create a list of blog posts
  const blogList = [];
  const { loading, error, data } = useQuery(BLOGLIST_QUERY);
  data?.blogPosts?.map((blogPost, i) => {
    blogList[i] = blogPost?.uid;
  });

  const uidIndex = blogList.findIndex((x) => x == uid);
  return (
    <div style={{ width: '100%' }}>
      {uidIndex >= 0 && uidIndex < blogList.length - 1 && (
        <HrefLinkInternal to={`/blog/${blogList[uidIndex + 1]}`}>
          {'< Prev Blog'}
        </HrefLinkInternal>
      )}
      {uidIndex > 0 && (
        <HrefLinkInternal
          to={`/blog/${blogList[uidIndex - 1]}`}
          style={{ float: 'right' }}
        >
          {'Next Blog >'}
        </HrefLinkInternal>
      )}
    </div>
  );
}

export default BlogNavigation;
