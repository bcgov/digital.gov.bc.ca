import React from 'react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  EventCardThumnail,
  EventCardThumnailNullImg,
  EventCardTextBox,
  CardTitle,
  EventCardStyled,
} from '../StyleComponents/card';
import { HrefLinkStandalone } from '../StyleComponents/htmlTags';

function EventCard({ name, description, eventbriteUrl, coverImgSrc }) {
  return (
    <EventCardStyled>
      {coverImgSrc ? (
        <EventCardThumnail alt="" src={coverImgSrc} data-testid="thumbnail" />
      ) : (
        <EventCardThumnailNullImg />
      )}
      <EventCardTextBox>
        <CardTitle
          style={{ fontSize: '25.92px', clear: 'both' }}
          data-testid="title"
        >
          {name}
        </CardTitle>
        <p data-testid="description">{description}</p>
        <HrefLinkStandalone
          href={eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 'auto' }}
        >
          View Details &amp; Register
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="fa-xs"
            style={{ marginLeft: '0.3em' }}
          />
        </HrefLinkStandalone>
      </EventCardTextBox>
    </EventCardStyled>
  );
}

export default EventCard;
