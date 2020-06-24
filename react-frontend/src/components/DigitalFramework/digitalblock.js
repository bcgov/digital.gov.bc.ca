import React from 'react';
import '../../css/digital.css';

function DigitalBlock(props) {
  return (
    <div className="digitalBlock">
      <div className="digitalTitle">{props.title}</div>
      <div className="digitalParagraph">{props.paragraph}</div>
    </div>
  );
}

export default DigitalBlock;
