import React from 'react';
import '../../../css/pagetop.css';

const SimpleBanner = ({ title, description }) => {
  return (
    <div className="plainPageText">
      <div>
        <p className="pageTitle">{title}</p>
      </div>
      <div className="pageDescription">
        <p> {description}</p>
      </div>
    </div>
  );
};

export default SimpleBanner;
