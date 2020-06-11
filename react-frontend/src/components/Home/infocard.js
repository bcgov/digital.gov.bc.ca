import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function InfoCard(props) {
  return (
    <Card
      className="cardBody"
      hoverable
      style={{ height: '575px' }}
      cover={<img className="cardImage" alt="example" src={props.img} />}
    >
      <div className="cardText">
        <div className="cardTitle">{props.title}</div>
        <div className="cardDescription">{props.description}</div>
        <div className="cardLink">
          <a>{props.linkText}</a>
        </div>
      </div>
    </Card>
  );
}

export default InfoCard;
