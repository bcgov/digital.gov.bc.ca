import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

import {
  CardHorizontalTitle,
  CardHorizontalDescription,
} from '../StyleComponents/card';

import {
  HrefLinkStandalone,
  HrefLinkStandaloneInternal,
} from '../StyleComponents/htmlTags';
const HorizontalInfoCard = (props) => {
  return (
    <Card
      className="cardBodyHorizontal overFlowHidden"
      bordered={false}
      cover={
        <div className="cardImageContainerHorizontal">
          <img className="cardImageHorizontal" alt="" src={props.img} />
        </div>
      }
    >
      <div className="cardTextHorizontal">
        <CardHorizontalTitle>{props.title}</CardHorizontalTitle>
        <CardHorizontalDescription>
          {props.description}
        </CardHorizontalDescription>
        {props.routePath ? (
          <HrefLinkStandaloneInternal to={props.routePath}>
            {props.linkText}
          </HrefLinkStandaloneInternal>
        ) : (
          <HrefLinkStandalone
            href={props.linkPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkText}
          </HrefLinkStandalone>
        )}
      </div>
    </Card>
  );
};

export default HorizontalInfoCard;
