import React from 'react';
import '../../css/pagetop.css';

const Template = ({
  headerTitle,
  headerDescription,
  context,
  approach,
  outcomes,
  additional,
  resourceText,
  resourceLinks,
  backgroundImage,
  others,
}) => {
  const imgStyle = {
    backgroundImage: 'url(' + backgroundImage + ')',
  };
  return (
    <div>
      <div className="pageTop" style={imgStyle}>
        <div className="pageTextBanner">
          <div className="pageText">
            <p className="pageTitle">{headerTitle}</p>
            <p className="pageDescription">{headerDescription}</p>
          </div>
        </div>
      </div>
      <div className="pageBody">
        {context != null && (
          <div className="contentBlock">
            {/* just a quick note, but subtitles like this will be handled in global css */}
            <p className="pageSubtitle">Context and Questions</p>
            {context}
          </div>
        )}
        <div className="contentBlock">
          <p className="pageSubtitle">The Approach</p>
          {approach}
        </div>
        <div className="contentBlock">
          <p className="pageSubtitle">Outcomes that Matter</p>
          {outcomes}
        </div>
        <div className="contentBlock">{additional}</div>
        {resources != null && (
          <div className="contentBlock">
            <p className="pageSubtitle">Resources and Related Information</p>
            {resources}
          </div>
        )}
        <p className="pageSubtitle">Other Case Studies</p>
        <div>{others}</div>
      </div>
    </div>
  );
};

export default Template;
