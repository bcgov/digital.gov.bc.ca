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
      <Card className="cardBody" style={{ height: '300px' }}>
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
