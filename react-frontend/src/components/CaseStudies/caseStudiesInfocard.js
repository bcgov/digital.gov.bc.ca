import React from 'react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import {
  CardTitle,
  CardDescription,
  CardImg,
  CardLinkDiv,
  CardStyled,
} from '../StyleComponents/card';
import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';

function CaseStudiesInfoCard({
  height,
  routePath,
  img,
  linkText,
  linkPath,
  title,
  description,
}) {
  var isRouteCard = false;

  if (routePath != null) {
    isRouteCard = true;
  }

  if (img != null) {
    return (
      <CardStyled
        style={{ overflow: 'hidded' }}
        cover={<CardImg alt="" src={img} />}
      >
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLinkDiv>
          {isRouteCard ? (
            <HrefLinkStandaloneInternal to={routePath}>
              {linkText}
            </HrefLinkStandaloneInternal>
          ) : (
            <HrefLinkStandalone
              href={linkPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
              {linkPath && (
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ paddingLeft: '5px' }}
                />
              )}
            </HrefLinkStandalone>
          )}
        </CardLinkDiv>
      </CardStyled>
    );
  } else {
    return (
      <CardStyled>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLinkDiv>
          {isRouteCard ? (
            <HrefLinkStandaloneInternal to={routePath}>
              {linkText}
            </HrefLinkStandaloneInternal>
          ) : (
            <HrefLinkStandalone
              href={linkPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
              {linkPath && (
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ paddingLeft: '5px' }}
                />
              )}
            </HrefLinkStandalone>
          )}
        </CardLinkDiv>
      </CardStyled>
    );
  }
}

export default CaseStudiesInfoCard;
