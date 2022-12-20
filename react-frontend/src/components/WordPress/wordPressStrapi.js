import React from 'react';
import { useLocation } from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { HrefLink, HrefLinkInternal } from '../StyleComponents/htmlTags';
import { Heading, Title } from '../StyleComponents/headings';

import Query from '../Query';
import ReactMarkdown from 'react-markdown';

import WORDPRESS_QUERY from '../../queries/wordpressContent/wordpress';

import '../../wordpress.css'


function WordPressStrapi() {
  const slug=params.slug;
  return (
      <div>
        <PageContainer>
          <GlobaStyleSize />
          <Query query={WORDPRESS_QUERY} uid={slug}>

            {({ data: { wordpressContents } }) => {
              return (
                <div dangerouslySetInnerHTML={{__html: wordpressContents}}></div>
              );
            }}
          </Query>
        </PageContainer>
      </div>
  );
}

export default WordPressStrapi;