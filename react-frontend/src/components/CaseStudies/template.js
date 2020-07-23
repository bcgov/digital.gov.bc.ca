import React from 'react';
import '../../css/pagetop.css';
import '../../css/case-study-template.css';
import '../../css/casetemplates.css';

const Template = ({ content }) => {
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
      <div className="pageTop" style={imgStyle}>
        <div className="pageTextBanner">
          <div className="pageText">
            <p className="pageTitle">{content.title}</p>
            <p className="pageDescription">{content.description}</p>
          </div>
        </div>
      </div>
      <div className="pageBody">
        {content.context && (
          <div className="contentBlock">
            {/* just a quick note, but subtitles like this will be handled in global css */}
            <p className="pageSubtitle">Context and Questions</p>
            <p>{content.context}</p>
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
        <p className="pageSubtitle">Other Case Studies</p>
        <div>{content.others}</div>
      </div>
    </div>
  );
};

export default Template;
