import React, { useState, useEffect } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';

const DigitalFrameworkTable = (props) => {
  const initial = window.innerWidth < 800;
  const [isMobile, setIsMobile] = useState(initial);

  useEffect(() => {
    function handleResize() {
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

  const body = props.priorityActions.map((priorityAction, i) => (
    <Row key={i} className={i === entries - 1 ? 'lastRow' : 'contentRow'}>
      <Col sm={12} md={6}>
        {isMobile && (
          <div>
            <h3 className="digitalTableTitle">Priority Action</h3>
          </div>
        )}
        <div className="digitalParagraph">
          <p>{priorityAction}</p>
        </div>
      </Col>
      <Col sm={12} md={6}>
        {isMobile && (
          <div>
            <h3 className="digitalTableTitle">Objective</h3>
          </div>
        )}
        <div className="digitalParagraph">
          <p>{props.objectives[i]}</p>
        </div>
      </Col>
    </Row>
  ));

  return (
    <div>
      <Grid className="digitalTable">
        {!isMobile ? (
          <Row className="firstRow">
            <Col md={6} lg={6}>
              <div>
                <h2 className="digitalTitle">Priority Actions</h2>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div>
                <h2 className="digitalTitle">Objectives</h2>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="firstRow">
            <Col sm={12}>
              <div>
                <h2 className="digitalTitle">
                  Priority Actions and Objectives
                </h2>
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
