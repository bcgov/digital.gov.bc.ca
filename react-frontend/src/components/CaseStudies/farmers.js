import React from 'react';
import { FarmerContent } from './content';
import Template from './template';

const Farmers = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={FarmerContent.title}
        headerDescription={FarmerContent.description}
        context={FarmerContent.context}
        approach={FarmerContent.approach}
        outcomes={FarmerContent.outcomes}
        resources={FarmerContent.resources}
      ></Template>
      <div className="others">others</div>
    </div>
  );
};

export default Farmers;
