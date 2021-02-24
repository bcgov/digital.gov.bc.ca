import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';

import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer } from '../StyleComponents/pageContent';
import { DigitalFrameworkToggle } from '../StyleComponents/htmlTags';
import Progress from './progress';
import Strategy from './strategy';

const digitalFrameworkImage = require('../../images/pngIllustrations/digitalFrameworkWhite.png');

const DigitalFramework = () => {
  const [strategyToggled, setStrategyToggled] = useState(true);

  function onChange(strategy) {
    setStrategyToggled(strategy);
  }

  return (
    <DocumentTitle title="Digital Framework - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          title={'Digital Framework'}
          content={
            'This is the Digital Framework: our plan for becoming a digital government. We consider it a draft – an “alpha” version – that reserves the flexibility to learn and adapt as we go.'
          }
          image={digitalFrameworkImage}
        />
        <PageContainer style={{ paddingBottom: '0' }}>
          <div style={{ textAlign: 'center' }}>
            <DigitalFrameworkToggle
              onClick={() => onChange(true)}
              underlined={strategyToggled}
            >
              STRATEGY
            </DigitalFrameworkToggle>
            <DigitalFrameworkToggle
              onClick={() => onChange(false)}
              underlined={!strategyToggled}
            >
              PROGRESS
            </DigitalFrameworkToggle>
          </div>
        </PageContainer>
        {strategyToggled ? <Strategy /> : <Progress />}
      </div>
    </DocumentTitle>
  );
};

export default DigitalFramework;
