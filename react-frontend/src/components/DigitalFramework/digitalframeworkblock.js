import React from 'react';
import '../../css/digital.css';

const DigitalFrameworkBlock = (props) => {
  return (
    <div className="digitalBlock">
      <h2 className="digitalTitle">{props.title}</h2>
      <div className="digitalParagraph">{props.paragraph}</div>
    </div>
  );
};

export default DigitalFrameworkBlock;
