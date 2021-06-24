import React from 'react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  BlogCardThumnail,
  BlogCardThumnailNullImg,
  BlogCardStyled,
  CardTitle,
  CardDescription,
  EventCardStyled,
} from '../StyleComponents/card';
import { HrefLinkStandalone } from '../StyleComponents/htmlTags';

function EventCard({ name, description, eventbriteUrl, coverImgSrc }) {
  return (
    <EventCardStyled>
      {coverImgSrc ? (
        <BlogCardThumnail src={coverImgSrc} data-testid="thumbnail" />
      ) : (
        <BlogCardThumnailNullImg />
      )}
      <div style={{ padding: '24px' }}>
        <CardTitle
          style={{ fontSize: '25.92px', clear: 'both' }}
          data-testid="title"
        >
          {name}
        </CardTitle>
        <CardDescription data-testid="description">
          {description}
        </CardDescription>
        <HrefLinkStandalone
          href={eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Details &amp; Register
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            style={{ paddingLeft: '5px' }}
          />
        </HrefLinkStandalone>
      </div>
    </EventCardStyled>
  );
}

export default EventCard;
