import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import DocumentTitle from 'react-document-title';
import BannerSideImage from '../PageElements/Banners/bannerSideImage';
import InfoCard from '../Home/infocard';

import { PageContainer, GlobaStyleSize } from '../StyleComponents/pageContent';
import { DigitalPrinciplesHeading } from '../StyleComponents/headings';
import { HrefLink } from '../StyleComponents/htmlTags';
import { BannerSideImgTitle } from '../StyleComponents/bannerWithImage';
import { digitalPrincipleUrls } from '../../constants/urls';
import HADSpdf from '../../documents/Hosting-and-Application-Development-Strategy.pdf';

function HostingOptions() {
  return (
    <DocumentTitle title="Hosting Options - Digital Government - Province of British Columbia">
      <div>
        <PageContainer>
          <Row middle="xs">
            <Col xs={12} lg={8}>
              <BannerSideImgTitle>Hosting Options</BannerSideImgTitle>
              <p>
                Before you create your awesome digital service, you should
                consider where it will live. The term “hosting” refers to the
                collection of infrastructure technologies that provide a
                foundation for the digital service.
              </p>
              <p>What is the solution you’re looking to deliver? </p>
              <ul>
                <li>A modern web-based application? Use containers </li>
                <li>Commercial off-the-shelf software? Use virtual servers </li>
                <li>
                  Big data warehouse for hosting and working with massive
                  amounts of data? Use physical servers
                </li>
              </ul>
              <p>
                The B.C. government has several hosting options, which are
                further described below. If you’re not sure, contact
                CITZAS@gov.bc.ca to discuss the option that best fits your
                needs.
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
              <h2>Containers </h2>
              <h4>Overview</h4>
              <p>
                Containers provide a way for several digital services to share a
                single operating system. Digital teams can focus their efforts
                on the service they’re providing rather than installing or
                maintaining the infrastructure. Containers also support the idea
                of “infrastructure as code”, which means that a service can
                increase or decrease the resources it requires based on demand
                or even launch new instances of itself if something goes wrong.
              </p>
              <h4>Pros </h4>
              <ul>
                <li>Less maintenance</li>
                <li>Lower costs </li>
                <li>Most resilient of available hosting options </li>
                <li>
                  Promotes good practices such as automation and portability{' '}
                </li>
              </ul>
              <h4>Cons </h4>
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

              <h4>Recommendation</h4>
              <p>
                Containers are the recommended hosting option for new digital
                services.{' '}
              </p>
              <h4>How to onboard </h4>
              <p>
                The container hosting options for the B.C. government are
                evolving and include public and private cloud platforms. Contact
                the platform services team to discuss the best option for your
                service.
              </p>
              <h2>Virtual servers </h2>
              <h4>Overview</h4>
              <p>
                A virtual server provides a way for several digital services to
                share a single physical server. Virtual servers are an
                established hosting option for the B.C. government. They are
                more expensive than containers and require additional
                maintenance.
              </p>
              <h4>Pros </h4>
              <ul>
                <li>Supports Windows Server </li>
                <li>More resilient than physical servers </li>
                <li>Established service with well-documented support</li>
              </ul>
              <h4>Cons </h4>
              <ul>
                <li>
                  Requires ongoing management and upgrades to operating system
                </li>
              </ul>

              <h4>Recommendation</h4>
              <p>
                Virtual servers are recommended for off-the-shelf software and
                small/medium databases.{' '}
              </p>
              <h4>How to onboard</h4>
              <p>
                The B.C. government offers virtual servers in its data centers
                via the iStore order management tool.{' '}
              </p>
              <p>
                Virtual servers are also available to early adopters via the
                Cloud Pathfinder team.
              </p>
              <h2>Physical servers</h2>
              <h4>Overview</h4>
              <p>
                Physical servers represent the oldest hosting option currently
                available for onboarding for B.C. government teams. When using
                physical servers, teams need to be mindful that there is
                significant maintenance overhead.
              </p>
              <h4>Pros </h4>
              <ul>
                <li>Established service with well-documented support</li>
                <li>
                  Simplified licensing for certain types of legacy software
                </li>
              </ul>
              <h4>Cons </h4>
              <ul>
                <li>Most expensive hosting option</li>
                <li>Least resilient hosting option</li>
              </ul>
              <h4>Recommendation</h4>
              <p>Physical servers are not recommended.</p>
              <h4>How to onboard</h4>
              <p>
                The B.C. government offers physical servers in its data centers
                via the iStore order management tool.
              </p>
            </Col>
          </Row>
        </PageContainer>
      </div>
    </DocumentTitle>
  );
}

export default HostingOptions;
