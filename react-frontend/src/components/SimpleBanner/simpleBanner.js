import React from 'react';
import '../../css/pagetop.css';

const SimpleBanner = ({ title, description }) => {
  return (
    <div className="pageTop digitalTop">
      <div className="pageTextBanner plain">
        <div className="pageText">
          <div>
            <p className="pageTitle">{title}</p>
          </div>
          <div className="pageDescription">
            <p> {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleBanner;
