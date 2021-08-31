import React from 'react';
import DocumentTitle from 'react-document-title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { aboutLinks } from '../../constants/urls';
import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { Heading, Title } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';

const linkIcon = (
  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ paddingLeft: '5px' }} />
);

function About() {
  return (
    <DocumentTitle title="About - Digital Government - Province of British Columbia">
      <PageContainer>
        <GlobaStyleSize />
        <Title>About</Title>
        <p>
          We are working to make digital.gov.bc.ca into the comprehensive
          directory of information to help the B.C. Public Service adopt modern
          technology and ways of working and deliver better digital services for
          our province.
        </p>
        <p>Our key partners are:</p>
        <ul>
          <li>
            The Digital Delivery Unit, Office of the Chief Information Officer
            (OCIO)
          </li>
          <li>The Digital Investment Office (OCIO)</li>
          <li>Strategic Policy and Legislation (OCIO)</li>
          <li>Enterprise Services (OCIO)</li>
          <li>Government Digital Experience (GDX) Division</li>
          <li>The Public Service Agency</li>
          <li>Workforce Planning and Succession</li>
          <li>The Innovation Hub</li>
          <li>Digital delivery teams and IM/IT branches across government</li>
        </ul>
        <Heading>Product Team</Heading>
        <p>
          The individuals responsible for creating and maintaining this site
          are:
        </p>
        <ul>
          <li>Steve Chapman – Product Owner</li>
          <li>Jonathan Sharman – Full-Stack Developer</li>
          <li>Nanthini Mathavan – Scrum Master</li>
          <li>Inderdeep Singh – UX Designer</li>
          <li>Mark Wilson – Researcher, Service Designer</li>
        </ul>
        <Heading>Technology</Heading>
        <p>
          Our frontend is built in React and integrates an open-source, headless
          content management system microservice called{' '}
          <HrefLink href={aboutLinks.Strapi} target="_blank">
            Strapi{linkIcon}
          </HrefLink>
          . Please peruse and reuse what we’ve built — it’s all shared in the
          open{' '}
          <HrefLink href={aboutLinks.gitHub} target="_blank">
            here on GitHub{linkIcon}
          </HrefLink>
          .
        </p>
        <Heading>How to get your content on digital.gov.bc.ca</Heading>
        <p>
          If you have insights, stories or resources you think should be offered
          on digital.gov.bc.ca, please reach out to our Product Owner,{' '}
          <HrefLink href={aboutLinks.productOwner} target="_blank">
            Steve.Chapman@gov.bc.ca
          </HrefLink>
          .
        </p>
        <p>
          If you have content that is identified to be added to the site, here’s
          how we can work with you:
        </p>
        <ol>
          <li>
            <strong>Research</strong> — Our designer and researcher will meet
            with you to understand the goals you have for your content, what
            kind of interaction/interface features may be required, and who
            should have oversight over publication.
          </li>
          <li>
            <strong>Estimation</strong> — Our designer and developer will
            discuss your requirements and estimate the work it will take to
            implement.
          </li>
          <li>
            <strong>Prioritization</strong> — Once estimated, our product owner
            will prioritize the work in our product backlog.
          </li>
          <li>
            <strong>Design</strong> — Once the work has been moved into our
            current sprint, we’ll get back in touch to collaborate with you on a
            content model and wireframe to represent how your content will look
            in production.
          </li>
          <li>
            <strong>Development</strong> — Once you and we are happy with the
            design, our developer will create the new content and grant you
            access to the content management system. (Not making promises, but
            he’s getting pretty fast at this!)
          </li>
          <li>
            <strong>Content Management Orientation</strong> — Finally, we’ll
            show you around the CMS to make sure you're confident in how to
            publish and maintain your content.
          </li>
        </ol>
      </PageContainer>
    </DocumentTitle>
  );
}

export default About;
