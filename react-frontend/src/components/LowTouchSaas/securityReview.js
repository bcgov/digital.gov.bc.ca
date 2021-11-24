import React from 'react';

import { CollapseContentHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { Callout } from '../StyleComponents/pageContent';
import { saasGuideUrls, standardsUrls } from '../../constants/urls';

const SecurityReview = () => {
  return (
    <div>
      <p>
        Depending on the nature of the data collected by your SaaS solution, you
        may need to conduct a “light” or a “comprehensive”{' '}
        <HrefLink
          href={standardsUrls.SecurityThreatandRiskAssessments}
          target="_blank"
          rel="noopener noreferrer"
        >
          Security Threat and Risk Assessment (STRA)
        </HrefLink>
        . The outcome of this process is a Statement of Acceptable Risk (SOAR)
        that identifies the potential security risks of the proposed solutions
        and how these risks will be mitigated. You will work with your{' '}
        <HrefLink
          href={saasGuideUrls.MISO}
          target="_blank"
          rel="noopener noreferrer"
        >
          MISO
        </HrefLink>{' '}
        to complete this process. As mentioned above, the PIA and STRA can
        proceed in parallel, and your MISO and MPO will likely be able to advise
        on when you have enough information to start the legal review.
      </p>
      <CollapseContentHeading>
        Steps in the security review process
      </CollapseContentHeading>
      <ol>
        <li>
          Download the{' '}
          <HrefLink href={saasGuideUrls.SOARTemplate}>SOAR template</HrefLink>.
        </li>
        <li>
          Contact your{' '}
          <HrefLink
            href={saasGuideUrls.MISO}
            target="_blank"
            rel="noopener noreferrer"
          >
            MISO
          </HrefLink>{' '}
          and ask them to work with you to complete the template for each of
          your three potential vendors. Depending on the identified risks and
          their risk levels, your MISO may also require the completion of a
          STRA.
        </li>
        <li>
          Follow the instructions on the form for signing and submitting the
          completed templates.
        </li>
      </ol>
      <Callout>
        The{' '}
        <HrefLink
          href={standardsUrls.SecurityThreatandRiskAssessments}
          target="_blank"
          rel="noopener noreferrer"
        >
          Security Threat and Risk Assessments
        </HrefLink>{' '}
        page is a useful resource for understanding the SOAR review process.
      </Callout>
    </div>
  );
};

export default SecurityReview;
