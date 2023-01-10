import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { HrefLink, HrefLinkInternal } from '../StyleComponents/htmlTags';
import { Heading, Title } from '../StyleComponents/headings';

import Query from '../Query';
import ReactMarkdown from 'react-markdown';

import WORDPRESS_QUERY from '../../queries/wordpressContent/wordpress';
import { StringToJSX } from '../Utils/StringToJSX';
import '../../wordpress.css'


function WordPressStrapi() {
  const params = useParams();
  const slug=params.slug;
  return (
      <div>
        <PageContainer>
          <GlobaStyleSize />
          <Query query={WORDPRESS_QUERY} uid={slug}>

            {({ data: { wordpressContents } }) => {
                return(
                    <div>
                        {wordpressContents?.map((wordpressContent, i) => {
                            return (
                              <StringToJSX domString={wordpressContent.HTML}></StringToJSX>
                            );
                        })}
                    </div>
                )
                 
            }}
          </Query>
        </PageContainer>
      </div>
  );
}

export default WordPressStrapi;