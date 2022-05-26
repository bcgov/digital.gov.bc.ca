import React from 'react';

import { CollapseContentHeading } from '../StyleComponents/headings';

const LegalReview = () => {
  return (
    <div>
      <p>
        It is most likely that your SaaS vendor will want to use their own terms
        of use contract as a starting point and you must then ask the Legal
        Services Branch to review the vendor’s terms of use and, if required,
        help you negotiate terms that are acceptable to the Province.
      </p>
      <p>
        A terms of use, terms of conditions or terms of service contract is a
        legal agreement between a vendor and customer (in this case, the
        Province) that defines, among other things, user rights and
        responsibilities, use of personal data, liability for damages, payment
        details, opt-out policies, security policies and more.
      </p>
      <CollapseContentHeading>
        Steps in the legal review process
      </CollapseContentHeading>
      <ol>
        <li>
          Email your use case and top SaaS option to your Legal Services
          representative and schedule a call to discuss.
        </li>
        <li>
          Ask your Legal Services representative to review the terms of use for
          your top SaaS product, in the context of the use case. Ask them if
          there’s anything else you can provide to help with this review,
          including when and if you need to contact the Risk Management Branch.
        </li>
        <li>
          Legal Services will review the material you have provided. They will
          likely come back to you with questions about elements in the terms of
          use, and you may need to reach out to other stakeholders or the vendor
          for clarification or more information.
        </li>
        <li>
          Legal Services will provide advice and guidance on elements in the
          terms of use that need to be changed (or may be prudent to change) to
          meet legislative obligations or business requirements, and on whether
          to open negotiations on such changes. Under appropriate circumstances,
          Legal Services will negotiate directly with the vendor’s legal counsel
          to propose amendments to the contract language to ensure the contract
          is in compliance with legislation and protects the Province’s
          interests.
        </li>
      </ol>
    </div>
  );
};

export default LegalReview;
