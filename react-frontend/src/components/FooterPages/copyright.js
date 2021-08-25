import React from 'react';
import DocumentTitle from 'react-document-title';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { Heading, Title } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

function Copyright() {
  return (
    <DocumentTitle title="Copyright - Digital Government - Province of British Columbia">
      <PageContainer>
        <GlobaStyleSize />
        <Title>Copyright</Title>
        <p>
          The following policy governs the operation and management of the
          government's main website and all websites of ministries, and agencies
          reporting to ministries.
        </p>
        <p>Copyright © 2021, Province of British Columbia.</p>
        <p>All rights reserved.</p>
        <p>
          This material is owned by the Government of British Columbia and
          protected by copyright law. It may not be reproduced or redistributed
          without the prior written permission of the Province of British
          Columbia.
        </p>
        <Heading>Permission</Heading>
        <p>
          To request permission to reproduce all or part of any other materials
          on this website, please complete the{' '}
          <HrefLink href="https://forms.gov.bc.ca/copyright-permission-request/">
            Copyright Permission Request Form
          </HrefLink>
          .
        </p>
        <Heading>Exceptions</Heading>
        <p>
          For the reproduction of provincial legislation found on the{' '}
          <HrefLink href="http://www.bclaws.ca/">BC Laws website</HrefLink>,
          permission is subject to the terms of the{' '}
          <HrefLink href="http://www.bclaws.ca/standards/2014/QP-License_1.0.html">
            Queen’s Printer License – British Columbia
          </HrefLink>
          .
        </p>
        <p>
          For the reproduction of specified b-roll, interview and podium video
          footage found on the{' '}
          <HrefLink href="https://news.gov.bc.ca/">
            BC Gov News website
          </HrefLink>
          , permission is subject to the terms of the{' '}
          <HrefLink href="https://news.gov.bc.ca/assets/license">
            News Footage License - British Columbia
          </HrefLink>
          .
        </p>
        <p>
          For the reproduction of materials found in the{' '}
          <HrefLink href="http://catalogue.data.gov.bc.ca/">
            BC Data Catalogue
          </HrefLink>
          , either a license agreement (as specified in the BC Data Catalogue)
          will apply or the materials are “access only” and reproduction is not
          permitted without written permission. To request permission, please
          complete the{' '}
          <HrefLink href="https://forms.gov.bc.ca/copyright-permission-request/">
            Copyright Permission Request Form
          </HrefLink>
          . If a license agreement applies, permission is subject to the terms
          of the specified license.
        </p>
        <Heading>Questions or concerns?</Heading>
        <p>
          For more information, please read the{' '}
          <HrefLink href="https://www2.gov.bc.ca/gov/content?id=96CA7A9D26024B1A9EE81637DED592B8">
            Frequently Asked Questions
          </HrefLink>{' '}
          or contact the{' '}
          <HrefLink href="https://www2.gov.bc.ca/gov/content?id=4F03158C0AF84EC08DBB5BE3E873C33E">
            Intellectual Property Program
          </HrefLink>
          .
        </p>
        <p>
          e-mail:{' '}
          <HrefLink href="mailto:QPIPPCopyright@gov.bc.ca">
            QPIPPCopyright@gov.bc.ca
          </HrefLink>
        </p>
        <p>phone: 250-216-8935</p>
      </PageContainer>
    </DocumentTitle>
  );
}

export default Copyright;
