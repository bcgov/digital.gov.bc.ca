import React, { useState, useEffect } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import {
  DigitalFrameworkHeading,
  DigitalFrameworkSubHeading,
} from '../StyleComponents/headings';
import {
  DigitalFrameworkP,
  DigitalFrameworkRow,
} from '../StyleComponents/htmlTags';
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
    <DigitalFrameworkRow key={i} underlined={i === entries - 1 ? null : true}>
      <Col sm={12} md={6}>
        {isMobile && (
          <DigitalFrameworkSubHeading>
            Priority Action
          </DigitalFrameworkSubHeading>
        )}
        <DigitalFrameworkP>{priorityAction}</DigitalFrameworkP>
      </Col>
      <Col sm={12} md={6}>
        {isMobile && (
          <DigitalFrameworkSubHeading>Objective</DigitalFrameworkSubHeading>
        )}
        <DigitalFrameworkP>{props.objectives[i]}</DigitalFrameworkP>
      </Col>
    </DigitalFrameworkRow>
  ));

  return (
    <div>
      <Grid>
        {!isMobile ? (
          <Row>
            <Col md={6} lg={6}>
              <DigitalFrameworkHeading>
                Priority Actions
              </DigitalFrameworkHeading>
            </Col>
            <Col md={6} lg={6}>
              <DigitalFrameworkHeading>Objectives</DigitalFrameworkHeading>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col sm={12}>
              <DigitalFrameworkHeading>
                Priority Actions and Objectives
              </DigitalFrameworkHeading>
            </Col>
          </Row>
        )}
        {body}
      </Grid>
    </div>
  );
};

export default DigitalFrameworkTable;
