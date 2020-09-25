import React from 'react';
import { useParams } from 'react-router-dom';
import '../../css/pagetop.css';
import '../../css/casetemplates.css';

import { MiningContent, FarmerContent, MedicalContent } from './content';
import BannerWithImage from '../PageElements/BannerWithImage/bannerWithImage';

import { ContentBlock } from '../StyleComponents/pageContent';

const routeMatch = {
  'farming-study': FarmerContent,
  'medical-study': MedicalContent,
  'mining-study': MiningContent,
};

const CaseStudy = () => {
  const endPoint = useParams().caseStudyId;
  const content = routeMatch[endPoint];

  const resources = [];

  if (content && content.resourceText) {
    for (var i = 0; i < content.resourceText.length; i++) {
      const insert = (
        <li key={i}>
          <a className="resourceLink" href={content.resourceLinks[i]}>
            {content.resourceText[i]}
          </a>
        </li>
      );
      resources.push(insert);
    }
  } else {
    return <BannerWithImage title={'Case Study Not Found'} />;
  }

  return (
    <div>
      <BannerWithImage
        content={content.description}
        title={content.title}
        image={content.backgroundImage}
      />
      <div className="pageBody">
        {content.context && (
          <ContentBlock>
            {/* just a quick note, but subtitles like this will be handled in global css */}
            <p className="pageSubtitle">Context and Questions</p>
            {content.context}
          </ContentBlock>
        )}
        <ContentBlock>
          <p className="pageSubtitle">The Approach</p>
          {content.approach}
        </ContentBlock>
        <ContentBlock>
          <p className="pageSubtitle">Outcomes that Matter</p>
          {content.outcomes}
        </ContentBlock>
        {content.additional && (
          <ContentBlock>{content.additional}</ContentBlock>
        )}
        {resources.length !== 0 && (
          <ContentBlock>
            <p className="pageSubtitle">Resources and Related Information</p>
            <ul className="resourceLinkBox">{resources}</ul>
          </ContentBlock>
        )}
        {content.contacts && (
          <ContentBlock>
            <p className="pageSubtitle">For more information</p>
            {content.contacts}
          </ContentBlock>
        )}
        <div>
          <p className="pageSubtitle">Other Case Studies</p>
          <div>{content.others}</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
