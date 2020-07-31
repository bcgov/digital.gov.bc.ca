import React from 'react';
import '../../css/pagetop.css';
import '../../css/casetemplates.css';

import { MiningContent, FarmerContent, MedicalContent } from './content';
import { useParams } from 'react-router-dom';

const routeMatch = {
  'farming-study': FarmerContent,
  'medical-study': MedicalContent,
  'mining-study': MiningContent,
};

const Template = () => {
  const endPoint = useParams().caseStudyId;
  const content = routeMatch[endPoint];

  const imgStyle = {
    backgroundImage: 'url(' + content.backgroundImage + ')',
  };

  const resources = [];

  if (content.resourceText) {
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
  }

  return (
    <div>
      <div className="pageTop">
        <img
          className="caseBannerImage"
          style={{ marginTop: '-50px' }}
          alt="not found"
          src={content.backgroundImage}
        />
        <div className="pageTextBanner caseTextBanner">
          <div className="pageText">
            <p className="pageTitle" style={{ color: 'white' }}>
              {content.title}
            </p>
            <div>
              <p className="pageDescription" style={{ color: 'white' }}>
                {' '}
                {content.description}{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pageBody">
        {content.context && (
          <div className="contentBlock">
            {/* just a quick note, but subtitles like this will be handled in global css */}
            <p className="pageSubtitle">Context and Questions</p>
            {content.context}
          </div>
        )}
        <div className="contentBlock">
          <p className="pageSubtitle">The Approach</p>
          {content.approach}
        </div>
        <div className="contentBlock">
          <p className="pageSubtitle">Outcomes that Matter</p>
          {content.outcomes}
        </div>
        {content.additional && (
          <div className="contentBlock">{content.additional}</div>
        )}
        {resources.length !== 0 && (
          <div className="contentBlock">
            <p className="pageSubtitle">Resources and Related Information</p>
            <ul className="resourceLinkBox">{resources}</ul>
          </div>
        )}
        {content.contacts && (
          <div className="contentBlock">
            <p className="pageSubtitle">For more information</p>
            {content.contacts}
          </div>
        )}
        <div>
          <p className="pageSubtitle">Other Case Studies</p>
          <div>{content.others}</div>
        </div>
      </div>
    </div>
  );
};

export default Template;
