import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

const HorizontalInfoCard = (props) => {
  return (
    <Card
      className="cardBodyHorizontal overFlowHidden"
      bordered={false}
      cover={
        <div className="cardImageContainer">
          <img className="cardImageHorizontal" alt="example" src={props.img} />
        </div>
      }
    >
      <div className="cardTextHorizontal">
        <div>
          <p className="cardTitleHorizontal">{props.title}</p>
        </div>
        <div>
          <p className="cardDescriptionHorizontal">{props.description}</p>
        </div>
        <div className="cardLinkHorizontal">
          {props.routePath ? (
            <Link to={props.routePath}>{props.linkText}</Link>
          ) : (
            <a href={props.linkPath} target="_blank">
              {props.linkText}
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default HorizontalInfoCard;
