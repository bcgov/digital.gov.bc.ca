import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import '../../css/card.css';

function InfoCard({
  height,
  routePath,
  img,
  linkText,
  linkPath,
  title,
  description,
}) {
  let cardHeight = 0;

  var isRouteCard = false;
  if (routePath != null) {
    isRouteCard = true;
  }

  cardHeight = height ? '600px' : height;

  if (img != null) {
    return (
      <Card
        style={{ height: cardHeight }}
        className="cardBody"
        cover={<img className="cardImage" alt="example" src={img} />}
      >
        <div className="cardText">
          <div>
            <h2 className="cardTitle">{title}</h2>
          </div>
          <div className="cardDescription">
            <p>{description}</p>
          </div>
          <div className="cardLink">
            {isRouteCard ? (
              <Link to={routePath}>{linkText}</Link>
            ) : (
              <p>
                <a href={linkPath}>{linkText}</a>
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
            <h2 className="cardTitle">{title}</h2>
          </div>
          <div className="cardDescription">
            <p>{description}</p>
          </div>
          <div className="cardLink">
            {isRouteCard ? (
              <Link to={routePath}>{linkText}</Link>
            ) : (
              <p>
                <a href={linkPath}>{linkText}</a>
              </p>
            )}
          </div>
        </div>
      </Card>
    );
  }
}

export default InfoCard;
