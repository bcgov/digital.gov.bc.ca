import React from 'react';
import { Button } from 'antd';

function Step1({ setFormStep }) {
  return (
    <div>
      <p>Did you find what you were looking for?</p>
      <Button onClick={() => setFormStep('ThankYou')}>Yes</Button>
      <Button onClick={() => setFormStep('FeedBack')}>No</Button>
    </div>
  );
}

export default Step1;
