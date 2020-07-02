import React from 'react';
import DigitalFrameworkBlock from './digitalframeworkblock';
import DigitalFrameworkBanner from './digitalframeworkbanner';
import DigitalFrameworkTable from './digitalframeworktable';
import '../../css/digital.css';

const titles = [
  'Our Vision',
  'Transformation has begun',
  'Accelerating our digital transformation',
  'Our approach: learning by doing',
  'Our priorities',
  'Service Delivery',
  'Data and Information',
  'Tools, processes and practices',
  'External partners',
];

const descriptions = [
  'Technology has changed everything, including expectations. If you were a teenager in the 1980s, you probably remember feeding 25 cents into a payphone. Maybe you remember life before payphones. Or maybe you’re asking Siri, “What’s a payphone?”\nThat’s just one example of how technology has evolved in the Internet era, but you could name hundreds more. The point is, digital technology has changed everything – how we learn, communicate, do business, and go about our daily lives. And this has changed what people expect from government.\nGovernments everywhere have been grappling with these changes, and the changing expectations. The short answer is we must change too. We know what you know: digital is the new normal.\n',
  'Here in B.C., ministries and agencies have started using new tools and ways of working to provide online services that respond to people’s raised expectations. But these changes are happening in pockets across government despite our current structure and systems, not because of them. It’s time to drive a coordinated shift towards digital government.',
  'Our challenge now is to accelerate our transformation into a digital government, keeping the focus squarely on people: our employees, our partners and our citizens. We want to make the best possible use of modern processes, business models and technologies to become a more effective government. This means working across ministry boundaries to share tools, data and learning so we can deliver government’s priorities at the fastest pace, lowest cost and greatest equity to British Columbians.',
  'The Digital Framework sets an overarching direction – the guiding policies, objectives and actions – that will accelerate our transformation into a digital government. But this plan is not set in stone. It was developed through consultation across government, and it remains a working draft – a starting point that lets us learn and adapt as we go. We consider this to be a draft, an “alpha” version, that will be continually updated and improved based on feedback and lessons learned.',
  'Sharing data across government’s organizational boundaries in safe, privacy-protecting ways to deliver truly citizen-centered services and better understand today’s complex social challenges.\n In becoming a digital government, we are focused on four priority areas:',
  'Our first priority is designing and delivering simple, easy-to-use online services for British Columbians.\nWe think modern online services should be:',
  'The foundation of a modern, digital government is data – accessible, reliable data that can be used to inform research and decision-making.\nBy safely integrating and de-identifying data from across government, we can gain new insights about population-level trends and complex issues, which can ultimately lead to better programs, policies and services for British Columbians.',
  'Government’s digital transformation is being driven by BC Public Service employees, so we need to ensure they are empowered with modern processes, tools and practices to do their best work.',
  'By partnering with academic institutions and companies, government can co-develop new products and services for citizens and help grow B.C.’s digital economy. We also need to partner with communities and other levels of government and First Nations to ensure everyone can thrive in the Internet era.',
];

const priorityActions = [
  [
    'Launch digital service principles that set the expectation teams will use user-focused, agile approaches, open standards and common components to develop online services.',
    'Identify and invest in self-serve and easy-to-use common components.',
    'Improve BC Services Card onboarding to make it simpler for ministries to use.',
    'Scale OrgBook BC and the Verifiable Organizations Network to help people share and verify important credentials about B.C. businesses.',
    'Deliver two new online services to demonstrate the value of modern tools and ways of working.',
  ],
  [
    'Create an updated digital and data policy framework, starting with modernizing Core Policy on information management and information technology.',
    'Launch a sustained public dialogue on the use of digital technologies and data for social, environmental and economic benefit.',
    'Deliver the Data Innovation Program, which provides ministries with safely integrated cross-government data to better understand important policy issues.',
    'Identify priority data registers and invest in making them easy to use and re-use.',
  ],
  [
    'Create a Digital Services Office and appoint a Chief Digital Officer to help bring modern tools and ways of working into the hands of BC Public Service employees.',
    'Modernize the way government funds technology.',
    'Provide clear direction to government on the use of modern tools and infrastructure.',
    'Create a program to develop and retain existing digital talent within the BC Public Service, and to attract new talent from outside government.',
  ],
  [
    'Extend and share B.C.’s world-leading digital procurement programs, such as Sprint With Us.',
    'Launch digital.gov.bc.ca, a website that will showcase our work on digital government.',
    'Continue expanding connectivity for rural and Indigenous communities in B.C.',
    'Provide guidance and support for developing data commons.',
  ],
];

const objectives = [
  [
    'Online services meet British Columbians’ modern expectations.',
    'People will have a common experience of government, and digital teams will be able to deliver services quickly and cost-effectively.',
    'British Columbians will have a safe, common way to identify who they are when interacting with government.',
    'Faster, more streamlined services for B.C. businesses.',
    'Two new online services – fast, simple and intuitive to use – meet the needs of British Columbians.',
  ],
  [
    'Better use of data to support the public good while protecting sensitive and personal information.',
    'Co-develop a trusted approach to using digital technologies and data to better serve people and businesses in British Columbia.',
    'Improve decision-making about some of B.C.’s most complex issues.',
    'Improve service delivery for citizens, who will no longer need to understand how government is organized to find the services they need.',
  ],
  [
    'BC Public Service employees will have the access, support and guidance they need to use modern tools and ways of working.',
    'Funding for priority digital initiatives will be evidence-based, faster, more flexible and agile, and ensure better value for citizens.',
    'Digital teams will have the tools they need to deliver better value to citizens, faster.',
    'The BC Public Service will be better equipped to deliver government’s priorities.',
  ],
  [
    'Government procurement will help grow local economies, create local jobs, and take advantage of made-in-B.C. innovations.',
    'B.C.’s work on digital transformation will be shared and amplified, helping us connect with partners.',
    'Increased economic and social development, educational opportunities, access to online services, health and public safety for all British Columbians.',
    'Enhanced collaboration with industry and other levels of government and First Nations to solve complex problems using data.',
  ],
];

const digitalBody = [];
var j = 0;
for (var i = 0; i < titles.length; i++) {
  digitalBody.push(
    <DigitalFrameworkBlock
      key={i}
      title={titles[i]}
      paragraph={descriptions[i]}
    />
  );
  if (i === 4) {
    digitalBody.push(
      <div key={i + (j + 1) * 10} className="someLinks">
        <ul>
          <li>
            <a className="digitalLink" href=".">
              Service delivery
            </a>
            <br />
          </li>
          <li>
            <a className="digitalLink" href=".">
              Data and information
            </a>
            <br />
          </li>
          <li>
            <a className="digitalLink" href=".">
              Tools, processes and practices
            </a>
            <br />
          </li>
          <li>
            <a className="digitalLink" href=".">
              External Partners
            </a>
          </li>
        </ul>
      </div>
    );
  }
  if (i === 5) {
    digitalBody.push(
      <div key={42} style={{ marginTop: '-20px' }}>
        <ul>
          <li>Based on user needs (as identified by users themselves)</li>
          <li>Designed and tested with the people who will be using them</li>
          <li>Accessible and inclusive for all British Columbians</li>
          <li>Designed to work end-to-end</li>
          <li>
            Joined across all channels (online, phone, mail, face-to-face)
          </li>
        </ul>
      </div>
    );
  }
  if (i > 4) {
    digitalBody.push(
      <DigitalFrameworkTable
        key={i + (j + 1) * 10}
        priorityActions={priorityActions[j]}
        objectives={objectives[j]}
      />
    );
    j++;
  }
}

const DigitalFramework = () => {
  return (
    <div className="digitalContainer">
      <DigitalFrameworkBanner />
      <div className="digitalBody">{digitalBody}</div>
    </div>
  );
};

export default DigitalFramework;
