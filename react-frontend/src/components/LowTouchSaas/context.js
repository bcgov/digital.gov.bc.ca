import React from 'react';

import DocumentTitle from 'react-document-title';

import { PageContainer } from '../StyleComponents/pageContent';
import { HrefLink } from '../StyleComponents/htmlTags';
import { Heading } from '../StyleComponents/headings';

import { saasGuideUrls } from '../../constants/urls';

const Context = () => {
  return (
    <DocumentTitle title="Low-Touch Saas Guide - Digital Government - Province of British Columbia">
      <div>
        <PageContainer>
          <Heading>About this wayfinding guide</Heading>
          <p>
            This Wayfinding Guide provides a high-level overview of how to
            acquire a low-touch Software as a Service (SaaS) solution. Low-touch
            SaaS is designed for the majority of customers to purchase it
            without sustained one-on-one interaction with a human being.
          </p>
          <p>
            In your personal life, you have probably purchased SaaS by simply
            providing your billing information and quickly clicking on a box to
            acknowledge that you have read and agree to the provider’s terms of
            use. It’s more complicated when acquiring SaaS within the BC Public
            Service, as the stakes are higher, with risks including:
          </p>
          <ul>
            <li>
              the loss of control over the data if it is remotely processed or
              hosted
            </li>
            <li>
              binding the Province to software license terms and agreements that
              are inconsistent with legislation
            </li>
            <li>
              failing to meet legislative requirements for the collection, use,
              disclosure and retention of personal information and government
              records
            </li>
            <li>
              being out of compliance with trade agreements and procurement
              policies
            </li>
            <li>
              not having the appropriate delegated authority, including spending
              authority, to enter into or amend agreements on the Province’s
              behalf
            </li>
            <li>
              failing to meet legislative and policy requirements to complete a
              Privacy Impact Assessment and Security Threat and Risk Assessment
              and confirm the SaaS is appropriate for provincial consumption
            </li>
            <li>
              different government departments entering into license agreements
              with the same vendor at different times and under different terms,
              adding risk that government’s use of the SaaS product will be out
              of compliance with agreed terms.
            </li>
          </ul>
          <p>
            This guide explains what you need to do to comply with legislative
            and policy requirements – and minimize risk to the Province – when
            acquiring SaaS.
          </p>
          <Heading>When you need to use this guide</Heading>
          <p>
            Software that is licensed at the enterprise level is outside the
            scope of this guide. Please see{' '}
            <HrefLink
              href={saasGuideUrls.CloudComputing}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud Computing in the BC Government
            </HrefLink>{' '}
            for more information on procuring cloud solutions and a list of
            vendors for which the government has contracts in place.
          </p>
          <p>This guide applies to you if:</p>
          <ul>
            <li>
              you want to acquire SaaS from a commercial provider and your
              estimated procurement value (including all options for renewals)
              is less than $250,000; and
            </li>
            <li>
              the software will be licensed on a subscription basis, accessed
              via a web browser and requires no installation, minimal management
              and no development.
            </li>
          </ul>
          <p>
            If your procurement value is $75,000 or more, procurement planning
            will be your first step and you will need to consult a ministry
            procurement specialist. If your procurement value is $250,000 or
            more, you must engage with Procurement Services Branch.
          </p>
        </PageContainer>
      </div>
    </DocumentTitle>
  );
};

export default Context;
