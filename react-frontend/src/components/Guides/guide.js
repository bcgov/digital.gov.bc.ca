import React from 'react';
import Query from '../Query';
import ReactMarkdown from 'react-markdown';
import BannerSimple from '../PageElements/Banners/bannerSimple';
import GUIDE_QUERY from '../../queries/guide/guide';
import { useParams } from 'react-router-dom';
import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { MarkdownStyles } from '../StyleComponents/styledMarkdown';

const GuidePage = () => {
  const params = useParams();
  return (
    <div>
      <BannerSimple
        title="Test guide page"
        description="It's dangerous to go it alone, take these."
      />

      <GlobaStyleSize />

      <div className="guide">
        <PageContainer>
          <Query query={GUIDE_QUERY} uid={params.uid}>
            {({ data: { guides } }) => {
              return (
                <div>
                  <h1>{guides[0].title}</h1>
                  <MarkdownStyles>
                    <ReactMarkdown source={guides[0].content} />
                  </MarkdownStyles>
                </div>
              );
            }}
          </Query>
        </PageContainer>
      </div>
    </div>
  );
};

export default GuidePage;
