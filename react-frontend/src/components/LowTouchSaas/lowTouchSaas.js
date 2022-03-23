import React, { useState } from 'react';
import DocumentTitle from 'react-document-title';

import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer } from '../StyleComponents/pageContent';
import { DigitalFrameworkToggle } from '../StyleComponents/htmlTags';
import Process from './process';
import Context from './context';

const saasGuideIllustration =
  require('../../images/pngIllustrations/saasGuide.png').default;

const Saas = () => {
  const [contextToggled, setContextToggled] = useState(true);

  function onChange(context) {
    setContextToggled(context);
  }

  return (
    <DocumentTitle title="Low-Touch Saas Guide - Digital Government - Province of British Columbia">
      <div>
        <BannerSideImage
          content="This guide explains what you need to do to comply with legislative and policy requirements – and minimize risk to the Province – when acquiring Software As A Service (SaaS) solutions."
          title="How to Acquire Low-Touch SaaS"
          image={saasGuideIllustration}
        />
        <PageContainer style={{ paddingBottom: '0' }}>
          <div style={{ textAlign: 'center' }}>
            <DigitalFrameworkToggle
              onClick={() => onChange(true)}
              underlined={contextToggled}
            >
              CONTEXT
            </DigitalFrameworkToggle>
            <DigitalFrameworkToggle
              onClick={() => onChange(false)}
              underlined={!contextToggled}
            >
              PROCESS
            </DigitalFrameworkToggle>
          </div>
        </PageContainer>
        {contextToggled ? <Context /> : <Process />}
      </div>
    </DocumentTitle>
  );
};

export default Saas;
