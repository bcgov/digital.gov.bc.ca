import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { CardTitle, CardDescription } from '../StyleComponents/card';
import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';

function InfoCard({
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
      <Card
        style={{ height: '95%', width: '100%' }}
        className="cardBody overFlowHidden"
        cover={
          <div className="cardImageContainer">
            <img className="cardImage" alt="" src={img} />
          </div>
        }
      >
        <div className="cardText">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="cardLink">
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
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="cardBody" style={{ height: '95%', width: '100%' }}>
        <div className="cardText">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="cardLink">
            {isRouteCard ? (
              <Link to={routePath}>{linkText}</Link>
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
          </div>
        </div>
      </Card>
    );
  }
}

export default InfoCard;
