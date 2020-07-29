import React from 'react';
import CollaborationTool from './collaborationTool';

import { Title, Title2, Title3, Title4 } from '../../StyleComponents/headings';
import {
  SimpleTextContainer,
  GlobaStyleSize,
} from '../../StyleComponents/pageContent';

function CollaborationTools() {
  return (
    <SimpleTextContainer>
      <GlobaStyleSize />
      <Title>
        Video Communication Platforms – Information for the Broader Public
        Sector
      </Title>
      <p>
        <strong>
          <i>
            Note: This guidance is intended primarily to provide broader public
            sector entities with information on video communications platforms
            during the COVID-19 pandemic. This information should not be
            considered exhaustive. Information for government ministries can be
            found under the heading “Video Communications Platforms –
            Information for Government Ministries” below. This is a rapidly
            changing space, and you are encouraged to research the latest
            updates to ensure protection of information.
          </i>
        </strong>
      </p>
      <Title2>
        <strong>Getting started</strong>
      </Title2>
      <p>
        When you can’t meet with your coworkers or clients face-to-face,
        communicating with them by video can be the next best thing.
        Fortunately, there are many options available for video communication
        platforms or tools, many of which can also be used for instant messaging
        or chat, screen sharing and transferring files. These options vary by:
      </p>
      <ul>
        <li>Cost</li>
        <li>
          Compatibility (some may require a download, while others work in a web
          browser)
        </li>
        <li>Capacity (the maximum number of people who can join a meeting)</li>
        <li>Privacy and security.</li>
      </ul>
      <Title3>
        <strong>Video Communication Options</strong>
      </Title3>
      <p>
        Options with a star (*) have strong privacy and security features.
        (Please note this information was current as of May 2020. Service
        providers may be modifying their service plans and features based on
        increased demand and changing user needs.)
      </p>
      <CollaborationTool
        url="http://www.skype.com/"
        name="Skype"
        cost="free"
        platform="Browser (Edge or Chrome), desktop or mobile"
        capacity="Up to 50 participants"
        features="Instant messaging, screensharing, recording calls (stored up to 30 days), no account required for external users"
      />
      <CollaborationTool
        url="https://products.office.com/en-ca/microsoft-teams/group-chat-software"
        name="Microsoft Teams"
        cost="Free and paid versions (Essentials and Premium), bundled with Microsoft 365"
        platform="Browser, desktop or mobile app"
        capacity="Up to 300 participants (free) or 10,000 (paid)"
        features="Screensharing, instant messaging, recording, document collaboration, user management tools"
      />
      <CollaborationTool
        url="http://www.webex.com/"
        name="Cisco Webex"
        cost="Free and paid versions (Starter, Plus and Business)"
        platform="Browser, desktop or mobile app"
        capacity="Up to 100 participants (free) or 200 (paid)"
        features="Screensharing, whiteboard, mute and remove participants at free level; edit users, recording, and transcriptions at paid levels"
      />
      <CollaborationTool
        url="http://www.mattermost.com/"
        name="Mattermost"
        cost="Free and paid versions (Enterprise E10 and E20)"
        platform="Desktop or mobile app"
        capacity="Unspecified"
        features="Messaging, screensharing, file sharing, guest accounts, integration with applications"
      />
      <CollaborationTool
        url="http://www.slack.com/"
        name="Slack"
        cost="Free and paid versions (Standard, Plus and Enterprise Grid)"
        platform="Video calls only via desktop"
        capacity="1:1 video calls (free) or up to 15 participants (paid)"
        features="Screen sharing, streaming, annotations (mostly for desktop), integration for G Suite, Office 365 and others"
      />
      <CollaborationTool
        url="http://www.gotomeeting.com/"
        name="GoToMeeting"
        cost="Paid only (Professional, Business and Enterprise)"
        platform="Browser, desktop or mobile app"
        capacity="Up to 150 (Professional), 250 (Business), 3000 (Enterprise)"
        features="Screensharing, recording, transcripts, user management, integration with Microsoft 365, G Suite, Slack and others"
      />
      <CollaborationTool
        url="https://zoom.us/"
        name="Zoom"
        cost="Free and paid versions (Pro, Business, Enterprise)"
        platform="Browser, desktop or mobile app"
        capacity="Up to 100 participants for 40 minutes maximum (free), or up to 100, 300 or 500 participants (paid)"
        features="Annotation, screensharing, chat, local recording, user management, transcripts"
      />
      <CollaborationTool
        url="http://www.whatsapp.com/"
        name="WhatsApp"
        cost="Free"
        platform="Desktop or mobile app"
        capacity="Up to 16 participants; no external users allowed"
        features="Instant messaging, sharing images and documents"
      />
      <CollaborationTool
        url="https://gsuite.google.ca/intl/en_ca/products/meet/"
        name="Google Meet"
        cost="Paid only (Basic, Business and Enterprise)"
        platform="Browser, desktop or mobile app"
        capacity="Up to 100 participants (Basic), 150 (Business), or 250 (Enterprise)"
        features="Screensharing, instant messaging, document sharing, recording, integration"
      />
      <Title2>
        <strong>Privacy and Security</strong>
      </Title2>
      <p>
        Video communication platforms are crucial to working remotely, but it is
        important to ensure that use of these tools addresses privacy, security
        and legal risks. Here we provide some general considerations and
        information  to assist broader public sector entities in determining
        which platforms may be suitable for their particular needs.  Broader
        public sector entities are encouraged to consult their privacy and
        security experts and to seek legal advice as appropriate based on their
        intended use of a particular tool.
      </p>
      <Title3>
        <strong>B.C. legislation and data residency</strong>
      </Title3>
      <p>
        Since many video communication platforms store data in the United
        States, using these platforms in B.C. may not comply with{' '}
        <a href="http://www.bclaws.ca/civix/document/id/complete/statreg/96165_03#section30.1">
          section 30.1 of the Freedom of Information and Protection of Privacy
          Act
        </a>{' '}
        (the data residency provision). However,{' '}
        <a href="http://www.bclaws.ca/civix/document/id/mo/mo/2020_m085">
          Ministerial Order 085
        </a>{' '}
        – issued during the COVID-19 public health emergency – allows disclosure
        of personal information outside Canada in specific circumstances. One of
        these circumstances allows public bodies to use third-party tools or
        applications such as video communication platforms, which may be hosted
        outside Canada, to support and maintain the operation of programs or
        activities of the public body where such use supports public health
        recommendations or requirements related to minimizing transition of
        COVID-19 (e.g., social distancing, working from home, etc.).
      </p>
      <p>
        Ministerial Order 085 also outlines conditions for the use of these
        tools or applications, including that:  they are reasonably secure; the
        public body make all reasonable efforts to remove personal information
        from the tools or applications as soon as possible when the order
        expires (June 30, 2020, unless rescinded or extended); and  records
        created using these tools or applications are managed appropriately. For
        more information, please read the{' '}
        <a href="https://www2.gov.bc.ca/assets/gov/british-columbians-our-governments/services-policies-for-government/information-management-technology/information-privacy/resources/guidance_on_ministerial_order_085.pdf">
          Guidance on Ministerial Order 085: Respecting Disclosures During
          COVID-19 Emergency
        </a>
        .
      </p>
      <Title3>Security measures</Title3>
      <p>
        Security measures should be proportional to the sensitivity of
        information. The more sensitive the information, the more secure it
        should be. For example, your health information is more sensitive than
        your opinion of the weather, so it would be reasonable to expect your
        health information be protected to a higher degree. If you are an
        employee of a broader public sector entity and your job includes sharing
        potentially personal, sensitive or confidential information, you are
        encouraged to consult your organization for specific guidance on which
        tools to use.
      </p>
      <p>
        The information provided below is for general informational purposes
        only and does not replace the need for broader public sector
        organizations to conduct their own due diligence, including seeking
        legal advice, where appropriate, on video communication platform use
        within their organization.
      </p>
      <Title2>Security best practices and tips</Title2>
      <p>
        <strong>
          Determine whether you will be sharing personal/sensitive/confidential
          or public information.{' '}
        </strong>
      </p>
      <p>Some questions to ask:</p>
      <ul>
        <li>
          How sensitive is the information that I will be sharing or processing
          over my intended platform or tool?
        </li>
        <li>
          Is it okay if other people, aside from my intended audience, have
          access to this information without my knowledge?
        </li>
        <li>
          Who would want to steal this information and does my intended platform
          or tool protect this information from them?
        </li>
        <li>
          What are the risks to sharing this information, and is my organization
          willing to accept those risks to achieve our business objectives? Are
          there any risks that must be addressed in order to ensure compliance
          with legislative requirements?
        </li>
      </ul>
      <p>
        If your information is personal/sensitive/confidential, ensure the tool
        you are using has sufficient security controls in place to protect the
        information.
      </p>
      <p>
        <strong>
          Choose a service provider with strong security and privacy policies
          and features.{' '}
        </strong>
      </p>
      <ul>
        <li>
          Consider how the service provider responds to privacy breaches and
          security incidents. Look for a reliable provider who proactively
          engages their customers to address privacy and security issues.
        </li>
        <li>
          Be familiar with and comply with the service provider’s customer use
          and responsibility policy.
        </li>
        <li>
          Seek advice from your organization’s privacy and security experts and
          legal advisors before using any tool or agreeing to any terms and
          conditions. That way, you can avoid inadvertently accepting terms and
          conditions that breach your organization’s security requirements
          (e.g., if the service provider claims ownership of any recorded
          conversations, content, metadata, or files shared over their
          platform).
        </li>
        <li>
          Consider the service provider’s encryption standards. They should be
          encrypting data while it is in transit <em>and</em> at rest. Strong
          encryption, such as Transport Layer Security (TLS), is necessary.
        </li>
        <li>
          Find out what personal and potentially sensitive information the
          service provider collects about meeting participants. For example, do
          they collect names, roles, organizations, email addresses, usernames,
          passwords, or the devices used? Learn how the service provider will
          use this information and let participants know what to disclose during
          registration.
        </li>
        <li>
          Use different passwords and credentials than the ones you use for your
          work accounts.
        </li>
        <li>
          Compare the privacy and security features offered between providers
          and between subscription plans. You may discover a paid-for plan
          offers better security than a free one.
        </li>
      </ul>
      <p>
        <strong>Set up a secure video conference or meeting.</strong>
      </p>
      <ul>
        <li>
          Modify the meeting’s settings when the default settings do not meet
          your organization’s security requirements.
        </li>
        <li>
          Send invitations securely. Use email or encrypted messaging apps to
          send links to your meeting. Do not share links or access credentials
          over public websites or social media.
        </li>
        <li>
          Update your access credentials periodically to reduce the risk of
          uninvited guests at your future meetings.
        </li>
      </ul>
      <p>
        <strong>Choose a secure physical setting.</strong>
      </p>
      <ul>
        <li>
          Host your video conference from a private location. If you can’t find
          one, use headphones so that only meeting participants can hear the
          full discussion.
        </li>
        <li>
          Consider muting participants. This eliminates background noise and
          prevents nearby private or confidential discussions from being
          overheard.
        </li>
        <li>
          Consider what others can see behind you. Remove or conceal anything
          that should be kept private. Some video communication tools (e.g., MS
          Teams) let you blur the background or use a virtual background.
        </li>
        <li>
          Check that meeting participants have also secured their physical
          setting and devices.
        </li>
      </ul>
      <p>
        <strong>Limit and monitor meeting participants.</strong>
      </p>
      <ul>
        <li>
          Consider who you allow to join your meeting. You can restrict access
          by requiring participants to enter a password to join. You can also
          allow authenticated users only, or registered or domain-verified users
          only (i.e., people whose email addresses include approved domains). On
          some tools, you can make participants wait in virtual lobbies before
          they join the meeting.
        </li>
        <li>
          Watch or listen for cues that someone has joined the meeting. Ask
          participants to identify themselves when they join by phone. Do not
          share information if unidentified participants are in your meeting.
        </li>
        <li>Lock the meeting once all participants have joined.</li>
        <li>
          Learn how to eject unwanted participants quickly and prevent them from
          re-joining.
        </li>
        <li>
          Invite a participant to co-host the meeting. Having two people in
          control means you can deal with unwanted participants or content
          faster.
        </li>
      </ul>
      <p>
        <strong>
          Provide a collection notice, if required, and conduct due diligence
          whenever personal information will be collected or disclosed.{' '}
        </strong>
      </p>
      <ul>
        <li>
          If a public body is using a video communication tool{' '}
          <strong>to collect personal information</strong> directly from
          individuals, then the{' '}
          <em>Freedom of Information and Protection of Privacy Act</em> requires
          each individual to be informed of:
          <ul>
            <li>The purpose for which the information is being collected,</li>
            <li>The legal authority for collecting it, and</li>
            <li>
              The title, business address and business telephone number of an
              officer or employee of the public body who can answer questions
              about the collection.
            </li>
          </ul>
        </li>
        <li>
          If you are using a video communication tool{' '}
          <strong>to disclose personal information</strong> between public
          bodies, no collection notice is required; however, there may be other
          legislative requirements that must be met.
        </li>
        <li>
          Public bodies are encouraged to conduct appropriate due diligence,
          including seeking legal advice where appropriate, for use of any video
          communication platform in situations where personal information will
          be collected or disclosed, particularly where the platform provider is
          based in the U.S.
        </li>
      </ul>
      <p>
        <strong>Only share what is appropriate and necessary.</strong>
      </p>
      <ul>
        <li>
          Review your settings for screen sharing, annotation or private
          messaging, or chat. Limiting or disabling these channels will avert
          unauthorized content and other distractions.
        </li>
        <li>
          Share an application rather than the entire screen, if you need to
          show your screen to others.
        </li>
        <li>
          Do not click on suspicious links or attachments sent via chat or
          emails about the platform or tool.
        </li>
        <li>
          Before you upload or share a document, consider whether it is
          appropriate. For example, documents where the copyright is owned by a
          third party should not be shared, unless your organization has a
          license that permits this.
        </li>
        <li>
          Notify participants in advance if you will be recording or
          transcribing the meeting and manage recordings in accordance with your
          organization’s policies.
        </li>
        <li>
          Do not use private messaging for confidential information, as hosts
          may have access to chat logs.
        </li>
      </ul>
      <Title3>
        <strong>Free Zoom and security </strong>
      </Title3>
      <p>
        During the COVID-19 public health emergency, many of you across the B.C.
        public sector may be using the free version of Zoom to communicate with
        colleagues and clients. Please be aware of the privacy and security
        vulnerabilities – primarily, weak encryption that generally falls short
        of B.C. government standards. This vulnerability means information is
        not adequately protected. If you are sharing confidential information,
        do not use Zoom if you have access to a secure alternative.
      </p>
      <p>
        Other vulnerabilities include the ability for hackers to steal your
        Windows login credentials, and for uninvited participants to join and
        disrupt your Zoom meetings – called “Zoombombing.”
      </p>
      <p>
        It is up to each broader public sector entity to determine whether Zoom
        is appropriate for use within that organization. Broader public sector
        entities are encouraged to consult with their privacy and security
        experts and legal advisors to assess the risks associated with their
        intended use of Zoom. Where a broader public sector entity has
        determined that the use of Zoom is appropriate within its organization,
        the following steps can be taken  to improve the security of the free
        version of Zoom.
      </p>
      <p>
        <strong>General tips</strong>
      </p>
      <ul>
        <li>
          <strong>Use the web version of Zoom </strong>on your desktop or
          laptop.
        </li>
        <li>
          <strong>Ensure the Zoom client app is the current version</strong> and
          regularly check for updates. For more information on installing apps,
          read the{' '}
          <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/appropriate-use-policy">
            Applications and Software Guide
          </a>
          .
        </li>
        <li>
          <strong>
            Use your full first and last name for your Zoom account
          </strong>{' '}
          (e.g., firstname_lastname, or Jane_Smith). This helps the meeting host
          verify participants against the invitation list.
        </li>
        <li>
          <strong>Do not use your organization credentials </strong>to log into
          Zoom.
        </li>
        <li>
          Choose a strong password (see{' '}
          <a href="https://www2.gov.bc.ca/gov/content/governments/services-for-government/information-management-technology/information-security/information-security-awareness/password-best-practices">
            Password Best Practices
          </a>
          ) and change your password immediately if you think someone may have
          access to your account.
        </li>
        <li>
          <strong>
            Do not use the “Personal Meeting ID” option to host events
          </strong>
          . Instead, allow Zoom to automatically generate a random meeting ID
          for you.
        </li>
        <li>
          <strong>
            Do not share your meeting link on social media or other public
            forums,
          </strong>{' '}
          and ask participants not to share the link as well.
        </li>
        <li>
          <strong>Password protect your meeting when possible.</strong>
        </li>
      </ul>
      <p>
        <strong>Setting up a meeting</strong>
      </p>
      <ul>
        <li>
          <strong>Set screen sharing to “Host Only.</strong>” This allows you,
          as the host, to reject any unwanted content from participants.
        </li>
        <li>
          <strong>Disable “Join Before Host.</strong>” Instead, use the “Waiting
          Room” feature to admit participants and keep out uninvited guests.
        </li>
        <li>
          <strong>Enable “Co-Host</strong>” if you (as the host) want to assign
          moderating duties to other participants.
        </li>
        <li>
          <strong>Be aware of everything your camera can see around you</strong>{' '}
          (e.g., family photos, sensitive documents).
        </li>
      </ul>
      <p>
        <strong>During a meeting</strong>
      </p>
      <ul>
        <li>
          <strong>Verify participants </strong>by comparing names against the
          invitation list.
        </li>
        <li>
          <strong>Lock the meeting</strong> once all attendees have joined to
          prevent uninvited guests.
        </li>
        <li>
          <strong>Disable “Allow Removed Participants to Rejoin.”</strong>
        </li>
        <li>
          <strong>Disable “File Transfer” </strong>and do not click on links or
          open attachments.
        </li>
        <li>
          <strong>Do not use Zoom’s cloud storage</strong>. You can stream or
          edit documents that do not have any personal, sensitive or
          confidential information, but do not upload or save documents onto
          Zoom’s cloud storage.
        </li>
        <li>
          <strong>Do not record meetings</strong> unless necessary and with
          proper authority under the{' '}
          <em>Freedom of Information and Protection of Privacy Act.</em> If you
          do record a meeting, save the recording locally and never in Zoom’s
          cloud storage.
        </li>
        <li>
          <strong>
            Disclose personal information only if your organization has
            determined that it is appropriate and lawful to do so, and limit any
            disclosure of personal information
          </strong>{' '}
          to the minimum amount reasonably necessary for performing your duties
          as an employee, officer or minister of the public body. In other
          words, consider what personal information is needed to get the job
          done and only share that information via Zoom.
        </li>
        <li>
          <strong>Turn off video and/or audio by default</strong> when joining a
          meeting (in Zoom Settings) to protect your privacy.
        </li>
      </ul>
      <p>
        <strong>Miscellaneous</strong>
      </p>
      <ul>
        <li>
          Zoom collects account information, including IP addresses, usage
          analytics, names, email addresses, credit card information for the
          host account, product interaction analytics, and content uploaded,
          provided or created on Zoom, as well as metadata.
        </li>
        <li>
          Zoom is based in the United States and may store data outside Canada.
          Your organization will need to assess whether the use of Zoom,
          including for meetings that may include the collection and/or
          disclosure of personal information, is appropriate and lawful.
        </li>
      </ul>
      <p>
        You can find training and tutorials on Zoom’s website in{' '}
        <a href="https://blog.zoom.us/wordpress/2020/04/01/a-message-to-our-users/">
          A Message to Our Users
        </a>
        .
      </p>
      <Title4>
        <strong>Use of Zoom in B.C. schools</strong>
      </Title4>
      <p>
        The B.C. Ministry of Education has secured and funded licences for the
        enterprise version of Zoom for all K-12 public and independent schools
        in B.C. This version of Zoom has many features to enable secure
        meetings. Find more information and resources for teachers and school
        administrators on the ministry’s{' '}
        <a href="https://www.openschool.bc.ca/keeplearning/#sections">
          Keep Learning
        </a>{' '}
        website.
      </p>
      <Title2>
        <strong>Contact Information for Broader Public Sector Entities</strong>
      </Title2>
      <p>
        Privacy and Access Helpline 250-356-1851{' '}
        <a href="mailto:privacy.helpline@gov.bc.ca">
          privacy.helpline@gov.bc.ca
        </a>
      </p>
      <Title2>
        <strong>
          Video Communication Platforms – Information for Government Ministries
        </strong>
      </Title2>
      <p>
        The video communication platforms that have been approved at a corporate
        level for use within government are:
      </p>
      <ul>
        <li>Skype</li>
        <li>Microsoft Teams</li>
      </ul>
      <p>
        If the intended use case involves sensitive information, Ministries
        should seek internal legal advice. Other tools may become available, and
        employees are encouraged to check here regularly for updated
        information.
      </p>
      <Title2>
        <strong>Contact Information for Government Ministries</strong>
      </Title2>
      <strong>
        <a href="mailto:OCIO.Communications@gov.bc.ca">
          OCIO.Communications@gov.bc.ca
        </a>
      </strong>
    </SimpleTextContainer>
  );
}

export default CollaborationTools;
