import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

const HorizontalInfoCard = (props) => {
  return (
    <Card
      className="cardBodyHorizontal"
      hoverable
      bordered={false}
      cover={
        <img className="cardImageHorizontal" alt="example" src={props.img} />
      }
    >
      <div className="cardTextHorizontal">
        <div className="cardTitleHorizontal">{props.title}</div>
        <div className="cardDescriptionHorizontal">{props.description}</div>
        <div className="cardLinkHorizontal">
          {props.routePath ? (
            <Link to={props.routePath}>{props.linkText}</Link>
          ) : (
            <a href={props.linkPath}>{props.linkText}</a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default HorizontalInfoCard;
