import React from 'react';
import DocumentTitle from 'react-document-title';

import { privacyLinks } from '../../constants/urls';
import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { FAQHeading, Heading, Title } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

function Privacy() {
  return (
    <DocumentTitle title="Privacy - Digital Government - Province of British Columbia">
      <PageContainer>
        <GlobaStyleSize />
        <Title>Privacy</Title>

        <Heading>Introduction</Heading>
        <p>
          The British Columbia (B.C.) government is committed to protecting your
          privacy. The B.C. Government collects, uses and discloses your
          personal information in accordance with the{' '}
          <HrefLink href={privacyLinks.FOIPPA}>
            Freedom of Information and Protection of Privacy Act
          </HrefLink>{' '}
          (<em>FOIPPA</em>) and other applicable legislation. ‘Personal
          information’ is defined broadly in the Freedom of Information and
          Protection of Privacy Act as recorded information about an
          identifiable individual, other than contact information, which is the
          information used to contact a person at a place of business. The
          purpose of this privacy statement is to inform you of the personal
          information that may be collected from you when visiting a B.C.
          government website and how that information may be used.
        </p>

        <Heading>Scope</Heading>
        <p>
          This privacy statement relates only to the information automatically
          collected from you as a result of your visit to the website. It does
          not include information a website requests from you. Any additional
          collections of personal information by a website will be addressed in
          a collection notice on that website.
        </p>

        <FAQHeading>How is my personal information collected?</FAQHeading>
        <p>
          B.C. government websites collect information about your visit,
          including personal information, through the use of audit logs and
          cookies. A cookie is a small file stored on your computer by your web
          browser when using some websites.
        </p>
        <FAQHeading>What personal information is being collected?</FAQHeading>
        <p>The information collected is:</p>
        <ul>
          <li>
            The web browser and operating system you are using (e.g. Vista, XP,
            Safari).
          </li>
          <li>The date and time of the visit.</li>
          <li>The pages or services accessed.</li>
          <li>
            If you were on another website before visiting the B.C. government
            website, the URL (web address) of that previous website if it
            referred you to the B.C. government website.
          </li>
          <li>
            The URL (web address) of the first website you visit immediately
            upon leaving the B.C. government website if you were referred to
            that website by the B.C. government website.
          </li>
          <li>
            The Internet Protocol (IP) network domain name (e.g. shaw.ca) and
            address (e.g. 192.10.100.20) of the computer you are using. IP
            address and domain are identifiers that may be used to distinguish
            between users and identify your internet service provider or your
            computer itself.
          </li>
        </ul>
        <p>
          The B.C. government, via its websites, will notify you if cookies will
          be collecting additional information from you. A cookie may remain on
          your computer after the Internet session finishes (until the cookie
          expires or is deleted by you).
        </p>
        <p>
          The B.C. government collects personal information under the authority
          of section 26(c) of <em>FOIPPA</em> for the purposes stated below in
          the next section.
        </p>

        <FAQHeading>
          What is the purpose for collecting my personal information and how
          will it be used?
        </FAQHeading>
        <p>
          The B.C. government collects personal information through cookies to
          better understand general user trends at an aggregate level and
          improve web performance, web services, and website maintenance.
          Personal information will only be used by authorized staff to fulfill
          the purpose for which it was originally collected or for a use
          consistent with that purpose, unless you expressly consent otherwise.
          The B.C. government collects personal information through security
          audits to protect against threats from hackers, and for other
          enforcement and security purposes. The B.C. government does not use
          this data to determine your identity unless required to do so as part
          of an internal investigation or for another enforcement-related
          purpose, and then, only in compliance with <em>FOIPPA</em>.
        </p>

        <FAQHeading>
          Can I opt out of the collection of my personal information?
        </FAQHeading>
        <p>
          Your browser may permit you to disable cookies, but you cannot opt out
          of the information collected for audit purposes. Also, your decision
          to disable cookies may impair your ability to browse, read, and
          download information contained on B.C. government websites, and
          government may be unable to personalize your web experience. However,
          you may still be able to access B.C. government services by other
          methods such as personal contact, fax or mail.
        </p>

        <FAQHeading>
          What safeguards are in place to protect my personal information?
        </FAQHeading>
        <p>
          The Government of B.C. is obligated to protect your personal
          information by making reasonable security arrangements against such
          risks as unauthorized access, collection, use, disclosure or disposal.
          Specifically, access to systems, applications and the collected data
          is restricted to authorized personnel only. Furthermore, any personal
          information collected and used for identifying user trends (e.g. IP
          address) is aggregated and made anonymous during report generation.
        </p>

        <FAQHeading>How long is information retained?</FAQHeading>
        <p>
          Some cookies will remain on your computer for only as long as your
          browser remains open, or until you delete them off your computer.
          Other cookies will remain on your computer so that you may be
          recognized when you return to the website. These cookies will expire
          no later than 18 months from when they are first placed on your
          computer. Information collected as a part of a cookie or a security
          audit log is retained for 2 years. Information collected or created by
          the Government of B.C. is maintained in accordance with{' '}
          <HrefLink href={privacyLinks.retentionSchedules}>
            government's records retention schedules
          </HrefLink>{' '}
          and other legislative requirements.
        </p>

        <FAQHeading>
          How can I access and correct information I submit to a web site?
        </FAQHeading>
        <p>
          You can review any personal information collected about you by
          requesting access to it by the ministry holding the information, or by
          submitting a Freedom of Information request. You may request changes
          or annotate your personal information if you believe it to be
          inaccurate by submitting a written request describing the error.
          Please contact the ministry or other government body holding your
          personal information. The Privacy, Compliance and Training Branch may
          be contacted for general information.
        </p>

        <FAQHeading>
          What about links to external websites from B.C. government websites?
        </FAQHeading>
        <p>
          B.C. government websites may include links to external websites. Once
          you leave a B.C. government website, this privacy statement does not
          apply. The B.C. government is not responsible for the privacy
          practices or content of external websites.
        </p>

        <FAQHeading>
          Who can I contact for more information about this privacy statement?
        </FAQHeading>
        <p>
          Questions regarding this privacy statement, including the collection
          of personal information, can be directed to a Senior Privacy Advisor
          at the Privacy, Compliance and Training Branch in the Ministry of
          Citizens’ Services, PO Box 9406 Stn Prov Govt, Victoria BC, V8W9V1,
          telephone (250) 356-1851.{' '}
          <HrefLink href="mailto:Privacy.Helpline@gov.bc.ca" target="_blank">
            Privacy.Helpline@gov.bc.ca
          </HrefLink>
          .
        </p>
      </PageContainer>
    </DocumentTitle>
  );
}

export default Privacy;
