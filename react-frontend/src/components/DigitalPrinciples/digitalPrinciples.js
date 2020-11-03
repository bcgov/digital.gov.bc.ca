import React from 'react';
import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { DigitalPrinciplesHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

const digitalPrinciplesImage = require('../../images/pngIllustrations/digitalPrinciplesWhite.png');

function DigitalPrinciples() {
  return (
    <DocumentTitle title="Digital Principles - Digital Government - Province of British Columbia">
      <PageContainer>
        <GlobaStyleSize />
        <BannerSideImage
          title={
            'Digital Principles for the Government of British Columbia (Version 1.0)'
          }
          image={digitalPrinciplesImage}
        />
        <p>
          The Digital Principles are meant to guide the work of individual
          public servants and vendor partners as the Province of British
          Columbia continues to evolve into a{' '}
          <HrefLink href="https://digital.gov.bc.ca/">
            Digital Government
          </HrefLink>
          . This includes everything from the day-to-day work of individuals to
          the design, development and delivery of digital products and services.
        </p>
        <p>
          The Digital Principles were co-developed with BC public service
          employees and members of the wider community. The principles are meant
          to be considered as a set rather than individually as there is
          purposeful overlap among them. They should also be considered within a
          wider context, which includes but isn’t limited to:
        </p>
        <ul>
          <li>Applicable legislation</li>
          <li>
            <HrefLink href="https://www2.gov.bc.ca/gov/content/careers-myhr/about-the-bc-public-service/ethics-standards-of-conduct/standards-of-conduct">
              Standards of Conduct for BC Public Service Employees
            </HrefLink>
          </li>
          <li>
            <HrefLink href="https://www2.gov.bc.ca/assets/gov/careers/about-the-bc-public-service/diversity-inclusion-respect/draft_principles.pdf">
              Draft Principles that Guide the Province of British Columbia’s
              Relationship with Indigenous Peoples
            </HrefLink>
          </li>
          <li>Gender-Based Analysis Plus (GBA+)</li>
        </ul>
        <p>The Province’s Digital Principles are: </p>

        <DigitalPrinciplesHeading>
          1. Deliver value for British Columbians & cultivate trust
        </DigitalPrinciplesHeading>
        <p>
          Recognize that government products and services should ultimately
          improve people’s lives. Build products and services for outcomes
          rather than outputs, prioritizing according to citizens' needs. Use
          resources judiciously to benefit citizens and BC’s homegrown digital
          economy. Build trust in every interaction, using data to make fair,
          ethical and evidence-based decisions.
        </p>
        <DigitalPrinciplesHeading>
          2. Design with people & embed inclusion
        </DigitalPrinciplesHeading>
        <p>
          Deliver simple, effective products and services in response to
          citizens' needs. Apply human-centered design practices, working
          directly with people who will use the product or service. Communicate
          in plain language. Strive to meet the highest standards of
          accessibility, inclusion and equity. Endeavour to create a seamless
          experience across government’s various digital and physical channels.
        </p>

        <DigitalPrinciplesHeading>3. Integrate ethics</DigitalPrinciplesHeading>
        <p>
          Take an ethical approach to designing or modifying digital products
          and services. Evaluate the potential ethical, social, cultural and
          environmental implications of emerging priorities. Ensure there is
          clear oversight and documentation for automated decision-making
          processes (e.g. when using artificial intelligence).
        </p>

        <DigitalPrinciplesHeading>
          4. Continuously learn & improve
        </DigitalPrinciplesHeading>
        <p>
          Iterate and improve products and services to support learning and
          innovation. Use modern tools and approaches. Be flexible to change,
          even at the last minute. Seek and accept feedback on an ongoing basis.
          Test early and often. Try to “fail fast" and accept failures as
          learning opportunities.
        </p>

        <DigitalPrinciplesHeading>5. Work in the open</DigitalPrinciplesHeading>
        <p>
          Collaborate, co-design and co-create with product and service users
          transparently. Default towards open licenses, open and interoperable
          standards and open-source code. Share information and data whenever
          possible.
        </p>

        <DigitalPrinciplesHeading>
          6. Take an ecosystem approach
        </DigitalPrinciplesHeading>
        <p>
          Think holistically. Design and deliver forward-thinking, adaptable and
          scalable solutions. Support interoperability, common components and
          enterprise approaches. Share work and learnings with the aim of
          contributing to the wider community. Strive to collect data from users
          only once, re-using and sharing data whenever possible.
        </p>

        <DigitalPrinciplesHeading>
          7. Take care of information & data
        </DigitalPrinciplesHeading>
        <p>
          Act as a trusted information steward. Manage information, including
          data, as a public asset in accordance with its value and user needs.
          Strive to improve the quality of information and data. Recognize that
          people own their personal data and have a stake in how it’s used. Work
          with citizens to ensure they understand how and why government
          collects their information.
        </p>

        <DigitalPrinciplesHeading>
          8. Manage risks proportionately
        </DigitalPrinciplesHeading>
        <p>
          Promote a risk-balanced approach that addresses security and privacy
          by design. Recognize risks associated with maintaining the status quo
          — remember that no decision is also a decision. Design clear and
          flexible risk-mitigation strategies.
        </p>

        <DigitalPrinciplesHeading>
          9. Build diverse teams & internal capacity
        </DigitalPrinciplesHeading>
        <p>
          Empower all public servants and vendor partners to deliver excellent
          products and services. Create and support teams with diverse skillsets
          and backgrounds. Enable teams to use technology as an effective
          collaboration tool. Encourage innovation and controlled
          experimentation. Build an organizational culture and structure to
          support constant learning and engagement.
        </p>

        <DigitalPrinciplesHeading>
          10. Express cultural & historical awareness & respect
        </DigitalPrinciplesHeading>
        <p>
          Acknowledge the historical relationships, inequity, trauma, and
          discrimination created by government. Work in the spirit of
          reconciliation and{' '}
          <HrefLink href="https://www2.gov.bc.ca/assets/gov/careers/about-the-bc-public-service/diversity-inclusion-respect/draft_principles.pdf">
            B.C.’s Draft Principles
          </HrefLink>{' '}
          guiding our relationship with Indigenous peoples. Respect that First
          Nations have control over data-collection processes in their
          communities, and that they own their information and control how it
          can be used.
        </p>
        <hr></hr>
        <p>
          <em>
            These Principles are being developed in the open on GitHub. If you
            would like to comment,{' '}
            <HrefLink
              href="https://github.com/bcgov/digital-principles"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit the GitHub repository
            </HrefLink>{' '}
            and open an Issue, or send an email to{' '}
            <HrefLink href="mailto:Daniel.Pizarro@gov.bc.ca">
              Daniel.Pizarro@gov.bc.ca
            </HrefLink>
            .
          </em>
        </p>
      </PageContainer>
    </DocumentTitle>
  );
}

export default DigitalPrinciples;
