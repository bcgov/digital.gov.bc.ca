import React from 'react';

import CollapsedMenus from './collapsedMenus';
import { Heading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { PanelStyled, CollapseStyled } from '../StyleComponents/collapseMenu';
import { PageContainer } from '../StyleComponents/pageContent';
import { InlineImg } from '../StyleComponents/images';
import { saasGuideUrls } from '../../constants/urls';

const saasProcessIllustration = require('../../images/pngIllustrations/saasProcess.png')
  .default;

const Process = () => {
  return (
    <div>
      <PageContainer>
        <Heading>An overview of the process</Heading>
        <p>
          This guide describes the end-to-end journey for acquiring low-touch
          SaaS, from planning and market research to procuring the SaaS,
          completing the required compliance review steps, and contracting for,
          purchasing and implementing the solution.
        </p>
        <p>
          Throughout the process, you will work closely with the Legal Services
          Branch, Risk Management Branch and your ministry or organization’s
          information{' '}
          <HrefLink
            href={saasGuideUrls.MPO}
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy
          </HrefLink>
          ,{' '}
          <HrefLink
            href={saasGuideUrls.MISO}
            target="_blank"
            rel="noopener noreferrer"
          >
            security
          </HrefLink>
          , legal and{' '}
          <HrefLink
            href={saasGuideUrls.Procurement}
            target="_blank"
            rel="noopener noreferrer"
          >
            procurement
          </HrefLink>{' '}
          specialists to ensure compliance with the government’s privacy,
          security and procurement policies, procedures and standards.
        </p>
        <InlineImg src={saasProcessIllustration} />
        <p>
          As described later in more detail, you must complete the following
          compliance steps before procuring and implementing your solution:
        </p>
        <ul>
          <li>
            completing a planning process to define your needs and requirements
            and conduct initial market research
          </li>
          <li>
            using an appropriate selection process to get quotes from at least 3
            vendors (can be done by reviewing pricing information published
            online) capable of meeting your needs and then selecting your best
            fit SaaS solution
          </li>
          <li>
            completing a privacy review, by way of a Privacy Impact Assessment
            (PIA) of the business program that will be using the SaaS solution
            (or update the existing PIA), in collaboration with your{' '}
            <HrefLink
              href={saasGuideUrls.MPO}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministry Privacy Officer (MPO)
            </HrefLink>
          </li>
          <li>
            conducting a security review, by way of a Security Threat and Risk
            Assessment (STRA), completed in collaboration with your{' '}
            <HrefLink
              href={saasGuideUrls.MISO}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministry Information Security Officer (MISO)
            </HrefLink>
          </li>
          <li>
            getting the Legal Services Branch to do a legal review of the terms
            of use and any associated contractual documentation between the
            Province and the vendor, which could also include negotiating
            revisions to the vendor’s documentation
          </li>
          <li>
            reviewing the risks and risk allocation terms, completed by the Risk
            Management Branch
          </li>
        </ul>
        <p>
          You must also ensure that your process complies with the procurement
          policies outlined in the{' '}
          <HrefLink
            href={saasGuideUrls.CPPM}
            target="_blank"
            rel="noopener noreferrer"
          >
            Core Policy and Procedures Manual
          </HrefLink>
          .
        </p>
        <p>
          Finally, if your proposed SaaS will process any financial
          transactions, you will need to complete a{' '}
          <HrefLink
            href={saasGuideUrls.FRCR}
            target="_blank"
            rel="noopener noreferrer"
          >
            financial risk and controls review
          </HrefLink>
          .
        </p>
        <p>
          Be prepared for an iterative process during the compliance reviews
          where the outcomes or decisions made by reviewers in one area may
          impact outcomes in another area. For example, you can expect that the
          PIA and STRA will inform the legal review.
        </p>
        <p>
          The time required from planning to implementation depends on many
          factors and could take anywhere from a month to up to a year.
        </p>

        <CollapsedMenus />
      </PageContainer>
    </div>
  );
};

export default Process;
