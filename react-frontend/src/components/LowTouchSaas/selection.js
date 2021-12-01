import React from 'react';

import { CollapseContentHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { Callout } from '../StyleComponents/pageContent';
import { saasGuideUrls } from '../../constants/urls';

const Selection = () => {
  return (
    <div>
      <p>
        Once you have completed your planning process, you are ready to select
        the best-fit SaaS solution by evaluating potential options against your
        use case and evaluation criteria. Ideally, you want to obtain quotes
        from at least three potential vendors for the SaaS solution.
      </p>
      <p>
        If your estimated contract value (including all options for renewals) is
        less than $75,000, obtain three quotes through online searches or
        requesting quotes from vendors by telephone, email, etc. Regardless of
        which procurement process you choose, be sure to document your approach
        to support compliance with the required competitive process.
      </p>
      <p>
        If it’s not possible to obtain three quotes, document the circumstances
        that prevented you from receiving three quotes, including all quote
        attempts. In this case, you may need to use a non-competitive approach
        and issue a direct award.
      </p>
      <Callout>
        Policy reminder: Even if the total procurement value is under the
        posting threshold, ministries can still use BC Bid to get quotes from
        potential vendors.
      </Callout>
      <p>
        Contracts can only be directly awarded without a competitive process in
        the exceptional circumstances specifically outlined in policy. If a
        direct award is unavoidable, you will need to make sure you have
        appropriate documentation to justify the direct award decision.
      </p>
      <p>
        Before directly awarding a contract, consider whether a Notice Of Intent
        (NOI) should be posted on BC Bid. A NOI discloses that a direct award is
        being contemplated, why the direct award is justified and provides
        vendors with the opportunity to challenge the potential direct award.
        Should a challenge to a NOI be received, the challenge must be assessed
        to determine if it is justified and whether a competitive process should
        be undertaken.
      </p>
      <Callout>
        Remember! Direct awards are publicly disclosed, including contract
        details and the justification for the direct award.
      </Callout>
      <p>
        At the end of this step, you will have selected your preferred SaaS
        solution. As described below, before you can procure and implement your
        solution, you will need to work closely with your Legal Services Branch,
        Risk Management Branch and your ministry or organization’s{' '}
        <HrefLink
          href={saasGuideUrls.MPO}
          target="_blank"
          rel="noopener noreferrer"
        >
          information privacy
        </HrefLink>
        ,{' '}
        <HrefLink
          href={saasGuideUrls.MISO}
          target="_blank"
          rel="noopener noreferrer"
        >
          security
        </HrefLink>{' '}
        and{' '}
        <HrefLink
          href={saasGuideUrls.Procurement}
          target="_blank"
          rel="noopener noreferrer"
        >
          procurement
        </HrefLink>{' '}
        specialists to ensure compliance with the government’s privacy, security
        and procurement policies, procedures and standards.
      </p>
    </div>
  );
};

export default Selection;
