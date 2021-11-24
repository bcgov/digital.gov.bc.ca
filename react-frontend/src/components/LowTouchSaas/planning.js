import React from 'react';

import { CollapseContentHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { saasGuideUrls } from '../../constants/urls';

const Planning = () => {
  return (
    <div>
      <p>
        In this stage, you are doing the upfront planning to define your needs
        and requirements and identify potential vendors.
      </p>
      <CollapseContentHeading>
        Steps in the planning stage
      </CollapseContentHeading>
      <ol>
        <li>
          Develop a use case that clearly articulates why you need a SaaS
          solution to meet your specific business requirements.
        </li>
        <li>
          Determine the appropriate procurement process; this may require
          consultation with your ministry procurement expert or with Procurement
          Services Branch.
        </li>
        <li>
          Develop the criteria you’ll use to evaluate potential SaaS solutions.
          Note the procurement approach you’ve been advised to use along with
          these evaluation criteria.
        </li>
        <li>
          Conduct market research to identify at least three SaaS solutions that
          best fit your business need.
        </li>
        <li>
          Reach out to your MPO and MISO to see if a PIA and STRA have already
          been prepared for any of your potential SaaS solutions. While these
          may not be fully transferrable to your current requirements, the
          information within them may be useful.
        </li>
      </ol>
      <p>Each of these steps is described below.</p>
      <CollapseContentHeading>Develop a use case</CollapseContentHeading>
      <p>
        A use case can be as simple as a few paragraphs that describe the
        high-level goals of your planned initiative and who will be using the
        product. This background information provides useful context for staff
        who will be asked to review the project from privacy, security, legal
        and risk perspectives.
      </p>
      <p>
        Your use case might answer some of the following questions (your MISO
        and MPO can help you with this step):
      </p>
      <ul>
        <li>
          What are the high-level goals and objectives of your planned
          initiative?
        </li>
        <li>
          How does it relate to the mandate of your branch, division or
          ministry?
        </li>
        <li>
          What are the objectives and outcomes (such as cost savings, improved
          customer service, faster turnaround time, etc.)?
        </li>
        <li>Who will benefit from this project?</li>
        <li>
          Who will be using the product? How many users to you anticipate?
        </li>
        <li>Where will the product be used?</li>
        <li>What minimum functionality and service levels are required?</li>
        <li>
          What types of information are you collecting and what is its security
          classification (see the
          <HrefLink
            href={saasGuideUrls.ISCS}
            target="_blank"
            rel="noopener noreferrer"
          >
            Information Security Classification Standard
          </HrefLink>
          )?
        </li>
        <li>How will this data be used?</li>
        <li>What is your general budget?</li>
      </ul>
      <CollapseContentHeading>
        Develop your evaluation criteria
      </CollapseContentHeading>
      <p>
        Building on your use case, list out the most important evaluation
        criteria – the product’s must-have requirements. This list will help you
        evaluate potential SaaS solutions as part of your market research and
        will make it easier for you to efficiently procure your desired
        solution. Again, your MISO, MPO and/or IT support team may be able to
        help you to develop these evaluation criteria
      </p>
      <p>Your evaluation criteria might include:</p>
      <ul>
        <li>
          Cost: Does the system have a fixed or variable pricing model? Is it
          within your budget?
        </li>
        <li>
          Location of processed and/or hosted data (if data is sensitive and/or
          contains PI): Is the SaaS hosted in Canada, including all data (and
          associated backups)? Is the data ever routed out of Canada for
          processing?
        </li>
        <li>
          Access control: Do you need the proposed solution to integrate with
          the BC Government’s common logon services for user identity and access
          management?
        </li>
        <li>
          Configurability: Can the system support custom configurations? If so,
          do you control them or does the vendor?
        </li>
        <li>
          Encryption: How is the data secured (both in transit and at rest)?
        </li>
        <li>
          Exit strategy: What is the mechanism for retrieving the data? Are
          there any associated costs?
        </li>
        <li>
          Licensing: Are there any restrictions on the total number of users,
          concurrent users, data volume, etc. that would increase the licensing
          cost? Does the solution support the licensing requirements you
          developed in your use case?
        </li>
        <li>
          Privacy and security compliance: Do the vendor and solution comply
          with the government’s
          <HrefLink
            href={saasGuideUrls.CloudPrivacySchedule}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud Privacy Schedule
          </HrefLink>{' '}
          and
          <HrefLink
            href={saasGuideUrls.CloudSecuritySchedule}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud Security Schedule
          </HrefLink>
          ?
        </li>
      </ul>
      <p>
        Other criteria might be important to you, depending on your use case.
        You will use these criteria in your market research to evaluate which
        SaaS products might fit your requirements.
      </p>
      <CollapseContentHeading>Conduct market research</CollapseContentHeading>
      <p>
        You should identify at least three potential SaaS solutions to ensure
        diligence in selecting a best-fit solution from those available in the
        market. If you can’t identify three viable candidate solutions, keep a
        record of your analysis. You may use a Request for Information or
        Request for Expression of Interest posted to BC Bid to assess if there
        is a competitive market. You’ll use your use case and evaluation
        criteria to research potential SaaS products and identify those that
        might meet your needs.
      </p>
      <CollapseContentHeading>
        Find out if a PIA, STRA and legal review have already been completed
      </CollapseContentHeading>
      <p>
        Reach out to your MPO and MISO to find out a PIA and STRA have already
        been done for any of your SaaS solution candidates. These reviews may
        have been completed by your ministry or a business area in another
        ministry.
      </p>
      <p>
        Even if a PIA and STRA have already been completed, you will still need
        to update the program-level PIA and complete a new STRA for your
        proposed use of SaaS product(s). The content in an existing PIA or STRA
        can give you and the other stakeholders in this process useful
        information for preparing the updated versions.
      </p>
      <p>
        Contact your Legal Service Branch representative to ask if a legal
        review has been completed for any of your SaaS solution candidates
      </p>
      .
    </div>
  );
};

export default Planning;
