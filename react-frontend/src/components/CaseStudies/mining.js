import React from 'react';
import { MiningContent } from './content';
import Template from './template';

const Mining = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={MiningContent.title}
        headerDescription={MiningContent.description}
        context={MiningContent.context}
        approach={MiningContent.approach}
        outcomes={MiningContent.solution}
        resources={MiningContent.resources}
      />
      <div className="others">others</div>
    </div>
  );
};

export default Mining;
