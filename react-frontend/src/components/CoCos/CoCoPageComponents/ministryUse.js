import React from 'react';
import { Col } from 'react-flexbox-grid';

const ministryNames = {
  AEST: 'Advanced Education and Skills Training',
  AG: 'Attorney General',
  AGRI: 'Agriculture, Food and Fisheries',
  CFD: 'Children and Family Development',
  CITZ: "Citizens' Services",
  EDUC: 'Education',
  EMLI: 'Energy, Mines and Low Carbon Innovation',
  ENV: 'Environment and Climate Change Strategy',
  FIN: 'Finance',
  FLNR: 'Forests, Lands, Natural Resource Operations and Rural Development',
  HLTH: 'Health',
  IRR: 'Indigenous Relations and Reconciliation',
  JERI: 'Jobs, Economic Recovery and Innovation',
  LBR: 'Labour',
  MA: 'Municipal Affairs',
  MH: 'Mental Health and Addictions',
  PSSG: 'Public Safety and Solicitor General',
  SDPR: 'Social Development and Poverty Reduction',
  TACS: 'Tourism, Arts, Culture and Sport',
  TRAN: 'Transportation and Infrastructure',
};

function MinistryUse({ acronym, summary }) {
  let ministryImage = require(`../../../images/ministryMarks/BCID_H_rgb_pos.png`);
  let altText = 'Invalid ministry acronym provided';

  if (ministryNames[acronym]) {
    ministryImage = require(`../../../images/ministryMarks/BC_${acronym}_H_RGB_pos.png`);
    altText = ministryNames.acronym;
  } else {
    console.log('Ministry acronym not found.');
  }

  return (
    <Col xs={12} sm={4}>
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
