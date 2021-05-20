import React from 'react';
import { Col } from 'react-flexbox-grid';
import { ministryNames } from '../../../constants/ministryDictionary';

function MinistryUse({ acronym, summary }) {
  let ministryImage = require(`../../../images/ministryMarks/BCID_H_rgb_pos.png`)
    .default;
  let altText = 'Invalid ministry acronym provided';

  if (ministryNames[acronym]) {
    try {
      ministryImage = require(`../../../images/ministryMarks/BC_${acronym}_H_RGB_pos.png`)
        .default;
    } catch (e) {
      console.log('Image not found.');
    }
    altText = ministryNames[acronym];
  } else {
    console.log('Ministry acronym not found.');
  }

  return (
    <Col xs={12} sm={4} data-testid="ministry">
      <img
        style={{
          maxWidth: '100%',
          maxHeight: '85px',
          display: 'block',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        alt={altText}
        src={ministryImage}
      />
      <p style={{ textAlign: 'center' }}>{summary}</p>
    </Col>
  );
}

export default MinistryUse;
