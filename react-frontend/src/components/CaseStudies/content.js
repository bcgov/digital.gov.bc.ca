import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import {
  CardContact,
  ContactAvatar,
  ContactName,
  ContactTitle,
  ContactEmail,
} from '../StyleComponents/card';
import { HrefLink } from '../StyleComponents/htmlTags';
import CaseStudiesInfoCard from './caseStudiesInfocard';
import MiningBannerImage from '../../images/case-study-mining.jpg';
import MedicalBannerImage from '../../images/case-study-msp.jpg';
import FarmingBannerImage from '../../images/case-study-farming.jpg';
import OrgBookBannerImage from '../../images/case-study-orgbook.jpg';
import { resourceLinks, videoLinks } from '../../constants/urls';

const jill = require('../../images/jill.png').default;
const aaron = require('../../images/aaron.png').default;
const john = require('../../images/john.png').default;
const caseStudiesFarmingImg = require('../../images/case-study-farming.jpg')
  .default;
const caseStudiesMiningImg = require('../../images/case-study-mining.jpg')
  .default;
const caseStudiesMSPImg = require('../../images/case-study-msp.jpg').default;
const caseStudiesOrgBookImg = require('../../images/case-study-orgbook.jpg')
  .default;

const MiningContent = {
  title: 'Monitoring Mining Operations in B.C.',
  backgroundImage: MiningBannerImage,
  contacts: (
    <Row>
      <Col sm={12} md={6}>
        <CardContact>
          <div>
            <ContactAvatar src={aaron} />
          </div>
          <div>
            <ContactName>Aaron Unger</ContactName>
            <ContactTitle>Product Owner, Mines Digital Services</ContactTitle>
            <ContactEmail href="mailto:Aaron.Unger@gov.bc.ca" target="_blank">
              Aaron.Unger@gov.bc.ca
            </ContactEmail>
          </div>
        </CardContact>
      </Col>
      <Col sm={12} md={6}>
        <CardContact>
          <div>
            <ContactAvatar src={jill} />
          </div>
          <div>
            <ContactName>Jillian Carruthers</ContactName>
            <ContactTitle>
              Executive Director, Service Transformation
            </ContactTitle>
            <ContactEmail
              href="mailto:Jillian.Carruthers@gov.bc.ca"
              target="_blank"
            >
              Jillian.Carruthers@gov.bc.ca
            </ContactEmail>
          </div>
        </CardContact>
      </Col>
    </Row>
  ),
  description: (
    <p>
      BC’s mining industry is an integral part of the economy, with over $9
      billion dollars in annual revenue. Following the collapse of a mine
      tailings dam in 2014, the Ministry of Energy, Mines and Petroleum
      Resources (EMPR) sought to improve the way it used technology for record
      management, mine oversight, and to provide information to the public.
    </p>
  ),
  approach: (
    <div>
      <p>
        The Ministry’s team of designers, user-researchers, and developers uses
        an iterative, open-sourced, user-focused approach to develop products
        continuously, in the following steps:
      </p>
      <ol>
        <li>
          <p>
            <strong>Identifying user needs.</strong> First, the team conducts
            user research and develops user stories to better understand the
            problem they need to solve. Often, this process identifies user
            needs that could not be defined up front.
          </p>
        </li>
        <li>
          <p>
            <strong>Testing small pieces.</strong> Next, the team develops
            prototypes and works with users to validate that it is solving the
            right problems and delivering simple and easy-to-use services. The
            team fosters creativity and innovation by conducting hackathons and
            inviting members of the local technology community to collaborate.
          </p>
        </li>
        <li>
          <p>
            <strong>Delivering value quickly.</strong> Once the team has solved
            a problem, it delivers its product to users to use immediately with
            real data. The team uses feedback from users to identify user needs,
            repeating the process.
          </p>
        </li>
      </ol>
    </div>
  ),
  others: (
    <Row>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/orgbook-study'}
          linkText={'Read the case study'}
          title={'OrgBook BC'}
          description={
            'Organizations and citizens need easy access to verified information about registered BC organizations. To streamline and modernize this access, the OrgBook BC digital service was developed by the Government of British Columbia using proven technologies in Digital Trust.'
          }
          img={caseStudiesOrgBookImg}
          height="650px"
        />
      </Col>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/farming-study'}
          linkText={'Read more'}
          title={'Helping farmers understand their soil'}
          description={
            'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to provide farmers with the support and resources they needed.'
          }
          img={caseStudiesFarmingImg}
          height="650px"
        />
      </Col>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/medical-study'}
          linkText={'Read more'}
          title={'Transforming the Medical Services Plan'}
          description={
            'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the Ministry of Health wanted to introduce a digital self-serve product, an online enrolment form.'
          }
          img={caseStudiesMSPImg}
          height="650px"
        />
      </Col>
    </Row>
  ),
  outcomes: (
    <ol>
      <li>
        <p>
          <strong>Public-facing information portal.</strong> From 2017 to 2018,
          the Ministry developed and launched a user-friendly website that helps
          people access inspection reports, permits, and other reports on mining
          and the environment from multiple agencies.
        </p>
      </li>
      <li>
        <p>
          <strong>Real-time mine data.</strong> Building on the success of the
          public facing portal, the small, initial team doubled in size and set
          its sights on developing a modern mine oversight system capable of
          sharing real-time mine data and interacting directly with mines. The
          new system reduces the time to gather a major mine’s regulatory
          requirement submissions from over six hours to less than a minute
        </p>
      </li>
      <li>
        <p>
          <strong>Ongoing product development.</strong> Using an iterative,
          user-focused approach, the team is building a mine oversight system
          that will be responsive to the needs of Ministry staff, the mining
          industry, Indigenous communities, stakeholders, and the public. By
          enhancing usability, efficiency, and transparency, this system will
          transform the province’s regulation of mines.
        </p>
      </li>
    </ol>
  ),
  resourceText: [
    'B.C Mine Information Website',
    'Mines Digital Service GitHub repo',
    '2016 Vancouver Sun article ‘B.C. ministry change gives public online access to mine inspections and dam safety information’',
    '2017 Vancouver Sun article ‘B.C. announces more changes resulting from Mount Polley mine failure’',
    '2019 CTV News article ‘British Columbia proposes reforms to strengthen oversight of mining industry’',
  ],
  resourceLinks: [
    resourceLinks.bcMineInfo,
    resourceLinks.mdsGitHub,
    resourceLinks.news1,
    resourceLinks.news2,
    resourceLinks.news3,
  ],
};

const FarmerContent = {
  title: 'Helping farmers understand their soil',
  backgroundImage: FarmingBannerImage,
  description: (
    <p>
      The Ministry of Agriculture wanted to understand how farmers monitor and
      manage their soils. With new environmental regulations around soil
      management pending, the research aimed to provide farmers with the support
      and resources they needed.
    </p>
  ),
  context: (
    <p>
      Healthy soil is an important part of farming – crops need the right amount
      of nutrients to grow. Too few nutrients can contribute to low yields and
      poor-quality crops, but too many nutrients in the soil can impact water
      quality and lead to run-off and pollution.\n The Ministry of Agriculture
      engaged the Service Design Team to help understand how farmers monitor and
      manage their soils, and to identify opportunities for the Ministry to
      provide soil management resources and support. With new environmental
      regulations around soil management pending, the research aimed to provide
      farmers with the support and resources they needed.
    </p>
  ),
  approach: (
    <div>
      <p>
        The Service Design Team worked with Ministry of Agriculture staff to
        engage farmers and farming consultants to understand their knowledge,
        needs, challenges and experiences with soil management.{' '}
      </p>
      <ol>
        <li>
          <p>
            <strong>Getting out on the farm.</strong> Through in-person
            interviews, attendance at training sessions, and on site-farm
            visits, the project team highlighted the sector-specific context and
            considerations of soil management and the varying levels of
            familiarity with soil management. The team also provided insights
            into existing soil management educational materials and
            opportunities for further development or revision.
          </p>
        </li>
        <li>
          <p>
            <strong>Calculating nutrient levels.</strong> The project team
            tested a prototype online calculator to help farmers record and
            calculate the nutrients in their soil. Farmers were able to enter
            the levels of key soil nutrients like phosphate and nitrogen into
            the calculator, then calculate the amount of fertilizer their crops
            would require – or the amount of nutrients that would need to be
            removed from the soil to meet environmental regulations and prevent
            pollution. This in-person testing showcased the learning
            opportunities related to improved understanding of soil management,
            as well as the usability of the calculator itself.
          </p>
        </li>
      </ol>
    </div>
  ),
  others: (
    <Row>
      <Col sm={12} md={6}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/mining-study'}
          linkText={'Read more'}
          title={'Mines Digital Service'}
          description={
            'BC’s mining industry is an integral part of the economy, with over $9 billion dollars in annual revenue. Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public.'
          }
          img={caseStudiesMiningImg}
          height="650px"
        />
      </Col>
      <Col sm={12} md={6}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/medical-study'}
          linkText={'Read more'}
          title={'Transforming the Medical Services Plan'}
          description={
            'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the Ministry of Health wanted to introduce a digital self-serve product, an online enrolment form.'
          }
          img={caseStudiesMSPImg}
          height="650px"
        />
      </Col>
    </Row>
  ),
  outcomes: (
    <div>
      <p>
        <strong>Important research.</strong> After two rounds of interviews and
        prototype testing with farmers, the Ministry had a clearer picture of
        how to support farmers with their soil management. The service design
        process highlighted the need to engage with farmers when designing
        informational resources; the research showed that the calculator was a
        useful tool to help farmers monitor and manage the nutrients in their
        soils, but it needed to be a part of a larger education and outreach
        program.
      </p>
      <p>
        <strong>Hit the ground running.</strong> As a result of working with the
        Service Design Team, the Ministry was able to “hit the ground running”
        when it moved into the technical build of the online calculator and
        other resources. The project team worked at the Exchange Lab on the
        technical builds and created a roadmap of activities and actions to
        support the development of these resources – from brochures, to website
        information and the calculator.
      </p>
      <p>
        <strong>Ongoing impact.</strong> User research helped define the
        technical requirements for farmers to use the calculator, as well as its
        design and interface. In addition, this work produced a list of design
        principles that the Ministry has been using when developing other
        engagement and educational resources.
      </p>
    </div>
  ),
  resourceText: ['Nutrient Management Calculator'],
  resourceLinks: ['resourceLinks.nutrientCalculator'],
};

const MedicalContent = {
  title: 'Transforming the Medical Services Plan',
  backgroundImage: MedicalBannerImage,
  description: (
    <p>
      In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance
      applications. Thirty percent of application forms were returned due to
      errors. To improve the process, the Ministry of Health wanted to introduce
      a digital self-serve product, an online enrolment form.
    </p>
  ),
  context: (
    <div>
      <p>
        The Medical Services Plan (MSP) is British Columbia’s public health
        insurance. It covers the cost of medically necessary insured physician
        services. New B.C. residents, existing residents applying for financial
        support through Premium Assistance, and residents changing marital or
        living status are all required to enroll or update their personal
        information with MSP in order to receive coverage.
      </p>
      <p>
        In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance
        applications. Thirty percent of application forms were returned due to
        errors. As the applications were paper-based, citizens found the process
        frustrating– especially new B.C. residents, 18- to 20-year-olds and
        seniors. Finding relevant information online or in print was equally
        frustrating.
      </p>
      <p>
        To improve the enrolment and Premium Assistance application processes,
        the Ministry of Health wanted to introduce a digital self-serve product
        an online enrolment form. The project was guided by the following
        objectives:
      </p>
      <ul>
        <li>
          <p>
            Improve how MSP and Premium Assistance are delivered to the public
            online, specifically focusing on overall service awareness,
            enrolment and communications.
          </p>
        </li>
        <li>
          <p>
            Provide recommendations to inform development of a digital enrolment
            solution based on the needs of B.C. citizens.
          </p>
        </li>
      </ul>
    </div>
  ),
  others: (
    <Row>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/mining-study'}
          linkText={'Read more'}
          title={'Mines Digital Service'}
          description={
            'BC’s mining industry is an integral part of the economy, with over $9 billion dollars in annual revenue. Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public.'
          }
          img={caseStudiesMiningImg}
          height="650px"
        />
      </Col>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/farming-study'}
          linkText={'Read more'}
          title={'Helping farmers understand their soil'}
          description={
            'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to provide farmers with the support and resources they needed.'
          }
          img={caseStudiesFarmingImg}
          height="650px"
        />
      </Col>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/orgbook-study'}
          linkText={'Read the case study'}
          title={'OrgBook BC'}
          description={
            'Organizations and citizens need easy access to verified information about registered BC organizations. To streamline and modernize this access, the OrgBook BC digital service was developed by the Government of British Columbia using proven technologies in Digital Trust.'
          }
          img={caseStudiesOrgBookImg}
          height="650px"
        />
      </Col>
    </Row>
  ),
  approach: (
    <div>
      <p>
        Working together, the Ministry of Health and the Service Design Team
        took an iterative, citizen-focused approach to the development of online
        services.
      </p>
      <p>The project included three key phases:</p>
      <ol>
        <li>
          <p>
            <strong>Desk and field research.</strong> First, a jurisdictional
            analysis of health insurance plans in Canada was completed. Then,
            the team spoke with 62 people across B.C., including First Nations
            health authorities support workers, Service BC frontline staff,
            Health Insurance BC customer service managers, third-party support
            workers and residents.
          </p>
        </li>
        <li>
          <p>
            <strong>Prototyping and testing.</strong> The team took an agile
            approach to design and development and engaged citizens and key
            stakeholders in prototyping and testing to improve the usability of
            the digital forms.
          </p>
        </li>
        <li>
          <p>
            <strong>Implementing better services.</strong> Once basic working
            online forms were developed MSP and Premium Assistance enrolment,
            they were released to the public without marketing or advertising.
          </p>
        </li>
      </ol>
    </div>
  ),
  videoContent: videoLinks.healthServices,
  outcomes: (
    <div>
      <p>
        <strong>Iteration is key.</strong> Even though the online enrolment
        forms were released without marketing or advertising, over 1,000
        applications were submitted in the first week. The team tracked
        application error rates, which after launch initially dropped but soon
        bounced back up. The team identified the key issues, came up with a
        solution and ultimately brought the error rate down to its current one
        percent.
      </p>
      <p>
        <strong>Normalizing the conversation about data. </strong>The project
        focused on a data-driven approach to service delivery and prototyped and
        tested solutions based on statistical evidence and user research – even
        with limited government resources.
      </p>
      <p>
        <strong>Improve the service, then improve delivery.</strong> A key
        insight from research was that before government invests in the digital
        delivery of services, they first need to improve the service itself. The
        project demonstrated the value that service design brings to digital
        transformation, both in healthcare and other government services.
      </p>
    </div>
  ),
};

const OrgBookContent = {
  title: 'OrgBook BC',
  backgroundImage: OrgBookBannerImage,
  contacts: (
    <Row>
      <Col sm={12} md={6}>
        <CardContact>
          <div>
            <ContactAvatar src={john} />
          </div>
          <div>
            <ContactName>John Jordan</ContactName>
            <ContactTitle>
              Executive Director, Emerging Digital Initiatives
            </ContactTitle>
            <ContactEmail href="mailto:John.Jordan@gov.bc.ca" target="_blank">
              John.Jordan@gov.bc.ca
            </ContactEmail>
          </div>
        </CardContact>
      </Col>
    </Row>
  ),
  description: (
    <div>
      <p>
        Organizations and citizens need easy access to verified information
        about registered BC organizations. To streamline and modernize this
        access, the OrgBook BC digital service was developed by the Government
        of British Columbia using proven technologies in Digital Trust.
      </p>
    </div>
  ),
  context: (
    <div>
      <p>
        As part of a strong digital economy, citizens and organizations need
        confidence in online data that’s accurate, up-to-date, and trustworthy.
        The Government of British Columbia is continually exploring new ways to
        build that confidence and trust in government through improving the
        integrity of information.
      </p>
      <p>
        The official registry of BC organizations is an obvious candidate for
        those efforts. By providing easy access to those records, citizens can
        be reassured about their business interactions, legal entities can
        validate key organization details, government departments can streamline
        and simplify processes, and organizations can monitor and assess updates
        as an indicator of economic activity.
      </p>
      <p>
        This led to the origin of OrgBook BC. The BC Digital Trust Services and
        BC Registries teams identified an opportunity to collaborate, delivering
        registered organizations’ details online using a new digital trust
        technology called Verifiable Credentials (VCs). The OrgBook BC service
        was designed to be the intersection between the modernization of access
        to verified organization information, and the exploration of VC
        technology that could form part of a new digital trust ecosystem.
      </p>
      <p>
        VCs are like physical credentials—driving licenses and the like—we hold
        in our wallets, but are digital and are stored in digital wallets. They
        also go beyond just being digital equivalents of physical credentials. A
        verifier can prove who’s meant to hold a VC, who issued it, that it
        hasn’t been tampered with (which makes forging it impossible), and that
        it hasn’t been revoked. This means that VCs support confidentiality,
        information integrity, and the overall building of trust online.
      </p>
    </div>
  ),
  others: (
    <Row>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/mining-study'}
          linkText={'Read more'}
          title={'Mines Digital Service'}
          description={
            'BC’s mining industry is an integral part of the economy, with over $9 billion dollars in annual revenue. Following the collapse of a mine tailings dam in 2014, the Ministry of Energy, Mines and Petroleum Resources (EMPR) sought to improve the way it used technology for record management, mine oversight, and to provide information to the public.'
          }
          img={caseStudiesMiningImg}
        />
      </Col>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/farming-study'}
          linkText={'Read more'}
          title={'Helping farmers understand their soil'}
          description={
            'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to provide farmers with the support and resources they needed.'
          }
          img={caseStudiesFarmingImg}
        />
      </Col>
      <Col sm={12} md={4}>
        <CaseStudiesInfoCard
          routePath={'/case-studies/medical-study'}
          linkText={'Read more'}
          title={'Transforming the Medical Services Plan'}
          description={
            'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the Ministry of Health wanted to introduce a digital self-serve product, an online enrolment form.'
          }
          img={caseStudiesMSPImg}
        />
      </Col>
    </Row>
  ),
  approach: (
    <div>
      <p>
        BC Registries collaborated with Digital Trust Services to issue (that
        is, create and send) organization VCs to OrgBook BC as part of the
        organization registration process. In fact, any registration updates,
        including revocations and new business relationships, trigger a VC
        update to OrgBook BC. This step also laid the foundation for BC
        Registries to potentially issue VCs directly to organizations in the
        future.
      </p>
      <p>
        Digital Trust Services was able to leverage this functionality and
        further develop OrgBook BC to access the information in those VCs.
        Specifically, they developed the public-facing OrgBook BC website with
        an advanced search feature, an API for integrating OrgBook BC data into
        other services, and a notification feature so anyone can be notified
        about additions and updates. All the software is open source for others
        to use or adapt as desired.
      </p>
      <p>
        Taking advantage of VCs’ potential, OrgBook BC was also developed to
        allow other authorities to issue VCs. For example, BC’s Liquor and
        Cannabis Regulation Branch issues permit and license VCs against
        registered organizations. Those VCs have a relationship to the
        organizations in OrgBook BC.
      </p>
      <p>
        BC Government’s Digital Trust Services team has also been contributing
        to worldwide VC tools and technologies for several years, reducing this
        project’s risk and simplifying its execution.
      </p>
      <p>
        OrgBook BC was built on Hyperledger Aries and Indy, open-source Digital
        Trust technologies with many worldwide contributors including the
        Government of BC. It was deployed on a modern IT platform (Kubernetes)
        that supported the service’s goals of robustness and scale.
      </p>
    </div>
  ),
  outcomes: (
    <div>
      <p>
        OrgBook BC is a progression towards digital trust, yet is not the whole
        answer. All teams involved have learned much from this practical
        deployment of VCs. Our hope is that this work continues to evolve and be
        shaped by an ecosystem that continues to grow and learn. This is the
        beginning of a story, built on partnerships, collaboration and a shared
        vision.
      </p>
      <p>Specific outcomes include:</p>
      <ul>
        <li>
          As of June 2021 OrgBook BC has over 1.4 million active legal entities,
          has over 3.8 million VCs, and is usually updated within minutes of a
          new or changed registration. This has proved its ability, and
          Hyperledger Aries’ and Indy’s abilities, to scale and support
          real-world scenarios.
        </li>
        <li>
          Multiple practical uses are already possible, including verifying if
          an organization is legally registered in BC, searching for business
          numbers, and finding “Doing business as” names registered by
          corporations. An automatic business lookup field is built into several
          government COVID-related forms that cover 18 business areas. Many
          citizens have also provided feedback on OrgBook BC’s value to their
          work.
        </li>
        <li>
          VC technology, as used by OrgBook BC, is flexible enough to expand
          further and support ecosystem-like connections. For example, OrgBook
          BC might present VCs of registered organization information to aid in
          businesses obtaining a loan or for a government department processing
          subsidies. Businesses may even hold and present their registered
          organization VCs themselves rather than requesting proof from OrgBook
          BC or resorting to emailing a fallible document. VCs become the secure
          building blocks for seamless, confidential and trustworthy exchanges
          between parties.
        </li>
      </ul>
    </div>
  ),
  resourceText: ['Live OrgBook BC service'],
  resourceLinks: [resourceLinks.orgBookBC],
};

export { MiningContent, FarmerContent, MedicalContent, OrgBookContent };
