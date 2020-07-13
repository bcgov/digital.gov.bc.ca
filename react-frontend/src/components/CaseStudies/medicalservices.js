import React from 'react';
import Template from './template';
import { MedicalContent } from './content';
import '../../css/casetemplates.css';

const MedicalServices = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={MedicalContent.title}
        headerDescription={MedicalContent.description}
        context={MedicalContent.context}
        approach={MedicalContent.approach}
        outcomes={MedicalContent.outcomes}
      />
      <div className="others">others</div>
    </div>
  );
};

export default MedicalServices;
