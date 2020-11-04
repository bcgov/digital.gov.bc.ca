import React from 'react';
import { useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { MiningContent, FarmerContent, MedicalContent } from './content';
import BannerWithImage from '../PageElements/Banners/bannerWithImage';

import { ContentBlock, PageContainer } from '../StyleComponents/pageContent';
import { CaseStudyHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

const routeMatch = {
  'farming-study': FarmerContent,
  'medical-study': MedicalContent,
  'mining-study': MiningContent,
};

const titleMatch = {
  'farming-study':
    'Nutrient Management Calculator - Case Studies - Digital Government - Province of British Columbia',
  'medical-study':
    'Medical Services Plan - Case Studies - Digital Government - Province of British Columbia',
  'mining-study':
    'Mines Digital Service - Case Studies - Digital Government - Province of British Columbia',
};

const CaseStudy = () => {
  const endPoint = useParams().caseStudyId;
  const content = routeMatch[endPoint];

  const resources = [];

  if (!content) {
    return <BannerWithImage title={'Case Study Not Found'} />;
  }

  if (content.resourceText) {
    for (var i = 0; i < content.resourceText.length; i++) {
      const insert = (
        <li key={i}>
          <HrefLink href={content.resourceLinks[i]}>
            {content.resourceText[i]}
          </HrefLink>
        </li>
      );
      resources.push(insert);
    }
  }

  return (
    <DocumentTitle title={titleMatch[endPoint]}>
      <div>
        <BannerWithImage
          content={content.description}
          title={content.title}
          image={content.backgroundImage}
        />
        <PageContainer>
          {content.context && (
            <ContentBlock>
              <CaseStudyHeading>Context and Questions</CaseStudyHeading>
              {content.context}
            </ContentBlock>
          )}
          <ContentBlock>
            <CaseStudyHeading>The Approach</CaseStudyHeading>
            {content.approach}
          </ContentBlock>
          <ContentBlock>
            <CaseStudyHeading>Outcomes that Matter</CaseStudyHeading>
            {content.outcomes}
          </ContentBlock>
          {content.additional && (
            <ContentBlock>{content.additional}</ContentBlock>
          )}
          {resources.length !== 0 && (
            <ContentBlock>
              <CaseStudyHeading>
                Resources and Related Information
              </CaseStudyHeading>
              <ul>{resources}</ul>
            </ContentBlock>
          )}
          {content.contacts && (
            <ContentBlock>
              <CaseStudyHeading>For more information</CaseStudyHeading>
              {content.contacts}
            </ContentBlock>
          )}
          <div>
            <CaseStudyHeading>Other Case Studies</CaseStudyHeading>
            <div>{content.others}</div>
          </div>
        </PageContainer>
      </div>
    </DocumentTitle>
  );
};

export default CaseStudy;
