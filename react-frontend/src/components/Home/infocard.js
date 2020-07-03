import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function InfoCard(props) {
  var isRouteCard = false;
  if (props.routePath != null) {
    isRouteCard = true;
  }

  if (props.img != null) {
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
            {isRouteCard ? (
              <Link to={props.routePath}>{props.linkText}</Link>
            ) : (
              <a href={props.linkPath}>{props.linkText}</a>
            )}
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="cardBody" hoverable style={{ height: '300px' }}>
        <div className="cardText">
          <div>
            <h2 className="cardTitle">{props.title}</h2>
          </div>
          <div className="cardDescription">{props.description}</div>
          <div className="cardLink">
            {isRouteCard ? (
              <Link to={props.routePath}>{props.linkText}</Link>
            ) : (
              <a href={props.linkPath}>{props.linkText}</a>
            )}
          </div>
        </div>
      </Card>
    );
  }
}

export default InfoCard;
