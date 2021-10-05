import React from 'react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import {
  CardClickable,
  CardClickableBody,
  CardClickableDescription,
  CardClickableHeader,
  CardClickableThumnail,
  CardTitle,
} from '../StyleComponents/card';

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
      <CardClickable to={routePath}>
        <CardClickableThumnail alt="" src={img} />
        <CardClickableBody>
          <CardTitle>{title}</CardTitle>
          <CardClickableDescription>{description}</CardClickableDescription>
        </CardClickableBody>
      </CardClickable>
    );
  } else {
    return (
      <CardClickable>
        <CardClickableHeader>{title}</CardClickableHeader>
        <CardClickableDescription>{description}</CardClickableDescription>
      </CardClickable>
    );
  }
}

export default CaseStudiesInfoCard;
