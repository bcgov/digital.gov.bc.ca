import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function InfoCard(props) {
  let cardHeight = 0;

  var isRouteCard = false;
  if (props.routePath != null) {
    isRouteCard = true;
  }

  cardHeight = props.height == null ? '300px' : props.height;

  if (props.img != null) {
    return (
      <Card
        style={{ height: '600px' }}
        className="cardBody"
        cover={<img className="cardImage" alt="example" src={props.img} />}
      >
        <div className="cardText">
          <div>
            <h2 className="cardTitle">{props.title}</h2>
          </div>
          <div className="cardDescription">
            <p>{props.description}</p>
          </div>
          <div className="cardLink">
            {isRouteCard ? (
              <Link to={props.routePath}>{props.linkText}</Link>
            ) : (
              <p>
                <a href={props.linkPath}>{props.linkText}</a>
              </p>
            )}
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="cardBody" style={{ height: cardHeight }}>
        <div className="cardText">
          <div>
            <h2 className="cardTitle">{props.title}</h2>
          </div>
          <div className="cardDescription">
            <p>{props.description}</p>
          </div>
          <div className="cardLink">
            {isRouteCard ? (
              <Link to={props.routePath}>{props.linkText}</Link>
            ) : (
              <p>
                <a href={props.linkPath}>{props.linkText}</a>
              </p>
            )}
          </div>
        </div>
      </Card>
    );
  }
}

export default InfoCard;
