import React from 'react';
import DocumentTitle from 'react-document-title';

import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import { PageContainer } from '../StyleComponents/pageContent';
import {
  StyledP,
  HrefLinkInternal,
  HrefLink,
} from '../StyleComponents/htmlTags';

const image404 = require('../../images/pngIllustrations/404.png').default;
const bannerTitle = "Page not found. We're sorry, something is missing.";
const bannerContent =
  'The page you’re looking for might have been removed, moved, or is temporarily unavailable.';
function NotFound({ standards }) {
  return (
    <DocumentTitle title="Page Not Found">
      <div>
        {standards ? (
          <PageContainer>
            <StyledP style={{ fontSize: '32px', fontWeight: 'bold' }}>
              Looking for "Standards and Guides"? They've moved to the{' '}
              <HrefLinkInternal to={'/resources'}>
                Resources Page.
              </HrefLinkInternal>
            </StyledP>
          </PageContainer>
        ) : null}
        <BannerSideImage
          content={bannerContent}
          title={bannerTitle}
          image={image404}
        />
        <PageContainer>
          <StyledP>
            Suggestions to help you find what you’re looking for:
          </StyledP>
          <StyledP>
            Check that the web URL has been entered correctly. Go to our{' '}
            <HrefLinkInternal to={'/'}>Home Page</HrefLinkInternal> and browse
            through our topics for the information you want.
          </StyledP>
          <StyledP>
            If you would like to email us, please contact{' '}
            <HrefLink href="mailto:digital.government@gov.bc.ca">
              Digital.Government@gov.bc.ca
            </HrefLink>
            .
          </StyledP>
        </PageContainer>
      </div>
    </DocumentTitle>
  );
}

export default NotFound;
