import React, { useState, useEffect } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';

const DigitalFrameworkTable = (props) => {
  const initial = window.innerWidth < 800;
  const [isMobile, setIsMobile] = useState(initial);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });

  //create list of rows using props
  const entries = props.priorityActions.length;
  //jsut use row col again but have title show up when screensize is less than a certain height
  let body = [];

  for (var i = 0; i < entries; i++) {
    let row = (
      <Row key={i} className={i === entries - 1 ? 'lastRow' : 'contentRow'}>
        <Col sm={12} md={6}>
          {isMobile && <div className="digitalTableTitle">Priority Action</div>}
          <div className="digitalParagraph">{props.priorityActions[i]}</div>
        </Col>
        <Col sm={12} md={6}>
          {isMobile && <div className="digitalTableTitle">Objective</div>}
          <div className="digitalParagraph">{props.objectives[i]}</div>
        </Col>
      </Row>
    );

    body.push(row);
  }
  return (
    <div>
      <Grid className="digitalTable">
        {!isMobile ? (
          <Row className="firstRow">
            <Col md={6} lg={6}>
              <div className="digitalTitle">Priority Actions</div>
            </Col>
            <Col md={6} lg={6}>
              <div className="digitalTitle">Objectives</div>
            </Col>
          </Row>
        ) : (
          <Row className="firstRow">
            <Col sm={12}>
              <div className="digitalTitle">
                Priority Actions and Objectives
              </div>
            </Col>
          </Row>
        )}
        {body}
      </Grid>
    </div>
  );
};

export default DigitalFrameworkTable;
