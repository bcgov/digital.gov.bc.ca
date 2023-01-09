import React from 'react';
import { useLocation } from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { HrefLink, HrefLinkInternal } from '../StyleComponents/htmlTags';
import { Heading, Title } from '../StyleComponents/headings';

import Query from '../Query';
import ReactMarkdown from 'react-markdown';

import DCOP_QUERY from '../../queries/markdownContent/dcop';

const dcopImage = require('../../images/pngIllustrations/dcop_transparent.png').default;


function MarkdownContent() {
  const markdownCSS = `.offsetAnchor{         /* Need to offset anchor target due to fixed header */
  margin-top: -107px;        /* Size of fixed header */
  padding-bottom: 107px; 
  display: block; 
}
@media screen and (max-width: 600px) {
  .offsetAnchor{
      margin-top: -65px;  /* Size of fixed header */
      padding-bottom: 65px; 
      display: block; 
  }
}
/* overrides due to doing non-standard layout because of markdown parsing */
.bannerCenterText{
  margin-left: -107px;;
}

@media screen and (max-width: 800px){
  .bannerCenterText {
      margin-left: -15px;
  }
}
`
  const location = useLocation();
  const path = location.pathname;
  let titleWas = '';
  let processedTitleBlock=false;
  let processSideImageBanner = function(t){
      if (titleWas==''){
          titleWas=t;
          return null
      }else if (!processedTitleBlock){
          processedTitleBlock=true;
          return true;
      }
      return false;
  }
  let getTitleWas = function(){
      return titleWas;
  }
  return (
      <div>
        <PageContainer>
          <style>{markdownCSS}</style>
          <GlobaStyleSize />
          <Query query={DCOP_QUERY} Path={path}>

            {({ data: { markdownContents } }) => {
              return (
                <div style={{ marginBottom: '4px' }}>
                  {markdownContents?.map((markdownContent, i) => {
                    let tokens = markdownContent.Markdown.split("\n"); // extract page title by looking at first line of markdown and dropping "# "
                    let title = tokens[0].substring(1);
                    //(markdownContent.Markdown);
                    let md = "hello world!";
                    return (
                      <div>
                        <DocumentTitle title={title + " - Digital Code of Practice - Digital Government - Province of British Columbia"}></DocumentTitle>
                        <ReactMarkdown components={{
                          // 'h1':Title,
                          'p': ({ node, ...props }) => {
                            if (path != '/digital-code-of-practice/Introduction') { // not on landing page
                              return <p>{props.children}</p>
                            } else { // is on landing page
                              let r = processSideImageBanner(null);
                              if (r)
                                return <BannerSideImage
                                  title={
                                    getTitleWas()
                                  }
                                  content={
                                    props.children
                                  }
                                  image={dcopImage} />
                              else
                                return <p>{props.children}</p>
                            }
                          },
                          'h1': ({ node, ...props }) => {
                            if (path == '/digital-code-of-practice/Introduction') { // on landing page
                              processSideImageBanner(title);
                              return false; // do not render title at all - will handle when first paragraph is received
                            } else { // not on landing page
                              return <Title>{title}</Title>
                            }
                          },
                          'h2': ({ node, ...props }) => {
                            let slug = props.children[0].replace(/ /g, '-')
                            return (
                              <Heading>
                                {/* Need to offset anchor target due to fixed header */}
                                <span className="offsetAnchor" id={slug}></span>
                                {props.children[0]}
                              </Heading>
                            )
                          },
                          'a': ({ node, ...props }) => {
                            if (props.href.substring(0, 1) == "/")
                              // internal  links need to be handled differently in order for SPA experience to work, otherwise reloads the page
                              return (
                                <HrefLinkInternal to={props.href}>
                                  {props.children[0]}
                                </HrefLinkInternal>

                              )
                            else
                              return (
                                <HrefLink href={props.href}>
                                  {props.children[0]}
                                </HrefLink>
                              )
                          }
                        }} children={markdownContent.Markdown}></ReactMarkdown>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </Query>
        </PageContainer>
      </div>
  );
}

export default MarkdownContent;
