import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import {
  EnergyAndMinesDigitalTrustContent,
  MiningContent,
  FarmerContent,
  MedicalContent,
  OrgBookContent,
} from './content';
import BannerWithImage from '../PageElements/Banners/bannerWithImage';
import NotFound from '../NotFoundPage/notFoundPage';
import {
  ContentBlockContainer,
  PageContainer,
} from '../StyleComponents/pageContent';
import { CaseStudyHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

const routeMatch = {
  'emdt': EnergyAndMinesDigitalTrustContent,
  'farming-study': FarmerContent,
  'medical-study': MedicalContent,
  'mining-study': MiningContent,
  'orgbook-study': OrgBookContent,
};

const titleMatch = {
  'emdt':
    'Energy & Mines Digital Trust  - Case Studies - Digital Government - Province of British Columbia',
  'farming-study':
    'Nutrient Management Calculator - Case Studies - Digital Government - Province of British Columbia',
  'medical-study':
    'Medical Services Plan - Case Studies - Digital Government - Province of British Columbia',
  'mining-study':
    'Mines Digital Service - Case Studies - Digital Government - Province of British Columbia',
  'orgbook-study':
    'OrgBook BC - Case Studies - Digital Government - Province of British Columbia',
};

const CaseStudy = () => {
  const endPoint = useParams().caseStudyId;
  const content = routeMatch[endPoint];

  const resources = [];

  if (!content) {
    return <NotFound />;
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
        {content.raw && (
          <div>{content.raw}</div>
        )}

        {content.context && (
          <ContentBlockContainer>
            <CaseStudyHeading>Context and Questions</CaseStudyHeading>
            {content.context}
          </ContentBlockContainer>
        )}
        {!content.raw && (
          <ContentBlockContainer>
          <CaseStudyHeading>The Approach</CaseStudyHeading>
          {content.approach}
        </ContentBlockContainer>
        )}
        
        {content.videoContent && (
          <ContentBlockContainer>
            <CaseStudyHeading>
              {content.videoContentTitle}
            </CaseStudyHeading>
            <ReactPlayer url={content.videoContent} width="auto" controls />
          </ContentBlockContainer>
        )}
        {!content.raw && (
          <ContentBlockContainer>
            <CaseStudyHeading>Outcomes that Matter</CaseStudyHeading>
            {content.outcomes}
          </ContentBlockContainer>
        )}
        {content.additional && (
          <ContentBlockContainer>{content.additional}</ContentBlockContainer>
        )}
        {resources.length !== 0 && (
          <ContentBlockContainer>
            <CaseStudyHeading>
              Resources and Related Information
            </CaseStudyHeading>
            <ul>{resources}</ul>
          </ContentBlockContainer>
        )}
        {content.contacts && (
          <ContentBlockContainer>
            <CaseStudyHeading>For more information</CaseStudyHeading>
            {content.contacts}
          </ContentBlockContainer>
        )}
        <ContentBlockContainer>
          <CaseStudyHeading>Other Case Studies</CaseStudyHeading>
          <div>{content.others}</div>
        </ContentBlockContainer>
      </div>
    </DocumentTitle>
  );
};

export default CaseStudy;
