import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import * as Scroll from 'react-scroll';

import DocumentTitle from 'react-document-title';
import InfoCard from '../Home/infocard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { PageContainer } from '../StyleComponents/pageContent';
import { HrefLink, HrefLinkScrollTo } from '../StyleComponents/htmlTags';
import { hostingOptionUrls } from '../../constants/urls';
import { Title, Heading, SubSubHeading } from '../StyleComponents/headings';

import HADSpdf from '../../documents/Hosting-and-Application-Development-Strategy.pdf';

function HostingOptions() {
  const ScrollElement = Scroll.Element;

  return (
    <DocumentTitle title="Hosting Options - Digital Government - Province of British Columbia">
      <div>
        <PageContainer>
          <Row middle="xs">
            <Col xs={12} lg={8}>
              <Title>Hosting Options</Title>
              <p>
                Before you create your awesome digital service, you should
                consider where it will live. The term “hosting” refers to the
                collection of infrastructure technologies that provide a
                foundation for the digital service.
              </p>
              <p>What is the solution you’re looking to deliver? </p>
              <ul>
                <li>
                  A modern web-based application? Use{' '}
                  <HrefLinkScrollTo
                    to="containers"
                    spy={true}
                    smooth={true}
                    offset={-180}
                  >
                    containers
                  </HrefLinkScrollTo>
                </li>
                <li>
                  Commercial off-the-shelf software? Use{' '}
                  <HrefLinkScrollTo
                    to="virtualServers"
                    spy={true}
                    smooth={true}
                    offset={-180}
                  >
                    virtual servers
                  </HrefLinkScrollTo>
                </li>
                <li>
                  Big data warehouse for hosting and working with massive
                  amounts of data? Use{' '}
                  <HrefLinkScrollTo
                    to="physicalServers"
                    spy={true}
                    smooth={true}
                    offset={-180}
                  >
                    physical servers
                  </HrefLinkScrollTo>
                </li>
              </ul>
              <p>
                The B.C. government has several hosting options, which are
                further described below. If you’re not sure, contact{' '}
                <HrefLink href="mailto:CITZAS@gov.bc.ca">
                  CITZAS@gov.bc.ca
                </HrefLink>{' '}
                to discuss the option that best fits your needs.
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <InfoCard
                title={'IM/IT Standards'}
                description="A vision and approach for modernizing government’s efforts to provide excellent digital services by using best practices."
                linkText="Read the standards"
                linkPath={HADSpdf}
                height="300px"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ScrollElement name="containers" className="element" />
              <Heading>Containers </Heading>
              <SubSubHeading>Overview</SubSubHeading>
              <p>
                Containers provide a way for several digital services to share a
                single operating system. Digital teams can focus their efforts
                on the service they’re providing rather than installing or
                maintaining the infrastructure. Containers also support the idea
                of “infrastructure as code”, which means that a service can
                increase or decrease the resources it requires based on demand
                or even launch new instances of itself if something goes wrong.
              </p>
              <SubSubHeading>Pros </SubSubHeading>
              <ul>
                <li>Less maintenance</li>
                <li>Lower costs </li>
                <li>Most resilient of available hosting options </li>
                <li>
                  Promotes good practices such as automation and portability{' '}
                </li>
              </ul>
              <SubSubHeading>Cons </SubSubHeading>
              <ul>
                <li>
                  Steep learning curve, particularly among traditional teams{' '}
                </li>
                <li>
                  Requires increased diligence around how the service is
                  designed to take full advantage of built-in resilience of
                  containers{' '}
                </li>
                <li>
                  Limited to systems able to use the Linux operating system,
                  does not work well for Windows Server or large databases{' '}
                </li>
                <li>Emerging service with evolving support </li>
              </ul>

              <SubSubHeading>Recommendation</SubSubHeading>
              <p>
                Containers are the recommended hosting option for new digital
                services.{' '}
              </p>
              <SubSubHeading>How to onboard </SubSubHeading>
              <p>
                The container hosting options for the B.C. government are
                evolving and include public and private cloud platforms. Contact
                the{' '}
                <HrefLink href="mailto:pathfinder@gov.bc.ca">
                  platform services team
                </HrefLink>{' '}
                to discuss the best option for your service.
              </p>
              <ScrollElement name="virtualServers" className="element" />
              <Heading>Virtual servers </Heading>
              <SubSubHeading>Overview</SubSubHeading>
              <p>
                A virtual server provides a way for several digital services to
                share a single physical server. Virtual servers are an
                established hosting option for the B.C. government. They are
                more expensive than containers and require additional
                maintenance.
              </p>
              <SubSubHeading>Pros </SubSubHeading>
              <ul>
                <li>Supports Windows Server </li>
                <li>More resilient than physical servers </li>
                <li>Established service with well-documented support</li>
              </ul>
              <SubSubHeading>Cons </SubSubHeading>
              <ul>
                <li>
                  Requires ongoing management and upgrades to operating system
                </li>
              </ul>

              <SubSubHeading>Recommendation</SubSubHeading>
              <p>
                Virtual servers are recommended for off-the-shelf software and
                small/medium databases.{' '}
              </p>
              <SubSubHeading>How to onboard</SubSubHeading>
              <p>
                The B.C. government offers virtual servers in its data centers
                via the{' '}
                <HrefLink href={hostingOptionUrls.iStore}>
                  iStore order management tool
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{ paddingLeft: '5px' }}
                  />
                </HrefLink>
                .{' '}
              </p>
              <p>
                Virtual servers are also available to early adopters via the{' '}
                <HrefLink href="mailto:Cloud.Questions@gov.bc.ca">
                  Cloud Pathfinder team
                </HrefLink>
                .
              </p>
              <ScrollElement name="physicalServers" className="element" />
              <Heading>Physical servers</Heading>
              <SubSubHeading>Overview</SubSubHeading>
              <p>
                Physical servers represent the oldest hosting option currently
                available for onboarding for B.C. government teams. When using
                physical servers, teams need to be mindful that there is
                significant maintenance overhead.
              </p>
              <SubSubHeading>Pros </SubSubHeading>
              <ul>
                <li>Established service with well-documented support</li>
                <li>
                  Simplified licensing for certain types of legacy software
                </li>
              </ul>
              <SubSubHeading>Cons </SubSubHeading>
              <ul>
                <li>Most expensive hosting option</li>
                <li>Least resilient hosting option</li>
              </ul>
              <SubSubHeading>Recommendation</SubSubHeading>
              <p>Physical servers are not recommended.</p>
              <SubSubHeading>How to onboard</SubSubHeading>
              <p>
                The B.C. government offers physical servers in its data centers
                via the{' '}
                <HrefLink href={hostingOptionUrls.iStore}>
                  iStore order management tool
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    style={{ paddingLeft: '5px' }}
                  />
                </HrefLink>
                .
              </p>
            </Col>
          </Row>
        </PageContainer>
      </div>
    </DocumentTitle>
  );
}

export default HostingOptions;
