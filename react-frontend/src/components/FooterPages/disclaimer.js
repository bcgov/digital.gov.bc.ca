import React from 'react';
import DocumentTitle from 'react-document-title';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { Heading, Title } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

function Disclaimer() {
  return (
    <DocumentTitle title="Disclaimer - Digital Government - Province of British Columbia">
      <PageContainer>
        <GlobaStyleSize />
        <Title>Disclaimer</Title>
        <Heading>Warranty Disclaimer</Heading>
        <p>
          This information is provided as a public service by the Government of
          British Columbia, Box 9411, Victoria, British Columbia, Canada V8W
          9V1.
        </p>
        <p>
          This website and all of the information it contains are provided "as
          is" without warranty of any kind, whether express or implied. All
          implied warranties, including, without limitation, implied warranties
          of merchantability, fitness for a particular purpose, and
          non-infringement, are hereby expressly disclaimed. Links and
          references to any other websites are provided for information only and
          listing shall not be taken as endorsement of any kind. The Government
          of British Columbia is not responsible for the content or reliability
          of the linked websites and does not endorse the content, products,
          services or views expressed within them.
        </p>
        <Heading>Limitation of Liabilities</Heading>
        <p>
          Under no circumstances will the Government of British Columbia be
          liable to any person or business entity for any direct, indirect,
          special, incidental, consequential, or other damages based on any use
          of this website or any other website to which this site is linked,
          including, without limitation, any lost profits, business
          interruption, or loss of programs or information, even if the
          Government of British Columbia has been specifically advised of the
          possibility of such damages.
        </p>
      </PageContainer>
    </DocumentTitle>
  );
}

export default Disclaimer;
