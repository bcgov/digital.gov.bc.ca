import React from 'react';
import Query from '../Query';
import { Grid } from 'react-flexbox-grid';
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
      <PageContainer>
        <GlobaStyleSize />

        <div className="guide">
          <Grid>
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
          </Grid>
        </div>
      </PageContainer>
    </div>
  );
};

export default GuidePage;
