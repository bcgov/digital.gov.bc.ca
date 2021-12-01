import React from 'react';

import { CollapseContentHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { Callout } from '../StyleComponents/pageContent';
import { saasGuideUrls, standardsUrls } from '../../constants/urls';

const PrivacyReview = () => {
  return (
    <div>
      <p>
        You must update the program-level{' '}
        <HrefLink
          href={standardsUrls.PrivacyImpactAssessments}
          target="_blank"
          rel="noopener noreferrer"
        >
          PIA
        </HrefLink>{' '}
        to ensure that any personal information collected, used, stored or
        shared through the SaaS solution is protected as per the legislated
        requirements of the Freedom of Information and Protection of Privacy
        Act. You will work with your{' '}
        <HrefLink
          href={saasGuideUrls.MPO}
          target="_blank"
          rel="noopener noreferrer"
        >
          MPO
        </HrefLink>{' '}
        to complete this process. Start this review in parallel with the STRA
        process.
      </p>
      <CollapseContentHeading>
        Steps in the privacy review process
      </CollapseContentHeading>
      <ol>
        <li>
          If there is an existing PIA for the business program then start with
          that, otherwise download the{' '}
          <HrefLink
            href={saasGuideUrls.PIATemplate}
            target="_blank"
            rel="noopener noreferrer"
          >
            PIA template
          </HrefLink>{' '}
          for a new project or program.
        </li>
        <li>
          Contact your{' '}
          <HrefLink
            href={saasGuideUrls.MPO}
            target="_blank"
            rel="noopener noreferrer"
          >
            MPO
          </HrefLink>{' '}
          and ask them to work with you to update the existing PIA (or complete
          the template if no existing PIA is available) for the proposed use of
          the best fit SaaS solution. You may need to reach out to the vendor,
          your MISO or other subject matter experts to answer the questions
          within the template.
        </li>
        <li>
          Email the completed templates to a privacy analyst for their review{' '}
          <HrefLink href="mailto:pia.intake@gov.bc.ca">
            (pia.intake@gov.bc.ca)
          </HrefLink>
          .
        </li>
        <li>
          Finalize the PIA with your MPO and the privacy analyst, who may
          recommend changes to the content.
        </li>
        <li>Get sign-off on the PIA.</li>
      </ol>
      <Callout>
        The{' '}
        <HrefLink
          href={standardsUrls.PrivacyImpactAssessments}
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Impact Assessments
        </HrefLink>{' '}
        page is a useful resource for understanding the PIA review process.
      </Callout>
    </div>
  );
};

export default PrivacyReview;
