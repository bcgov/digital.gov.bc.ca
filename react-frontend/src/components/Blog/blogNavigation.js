import React from 'react';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/react-hooks';

import { HrefLinkInternal } from '../StyleComponents/htmlTags';
import BLOGLIST_QUERY from '../../queries/blog/blogList';

export function PrevNextButton({ blogUIDs, uid }) {
  const uidIndex = blogUIDs.findIndex((x) => x == uid);
  if (uidIndex == -1) {
    return <div />;
  }
  return (
    <div style={{ width: '100%' }}>
      {uidIndex >= 0 && uidIndex < blogUIDs.length - 1 && (
        <HrefLinkInternal
          to={`/blog/${blogUIDs[uidIndex + 1]}`}
          data-testid="prev"
        >
          {'< Prev Blog'}
        </HrefLinkInternal>
      )}
      {uidIndex > 0 && (
        <HrefLinkInternal
          to={`/blog/${blogUIDs[uidIndex - 1]}`}
          style={{ float: 'right' }}
          data-testid="next"
        >
          {'Next Blog >'}
        </HrefLinkInternal>
      )}
    </div>
  );
}

function BlogNavigation({ uid }) {
  // Create a list of blog posts
  const blogList = [];
  const { loading, error, data } = useQuery(BLOGLIST_QUERY);
  data?.blogPosts?.map((blogPost, i) => {
    blogList[i] = blogPost?.uid;
  });
  return <PrevNextButton blogUIDs={blogList} uid={uid} />;
}

export default BlogNavigation;
