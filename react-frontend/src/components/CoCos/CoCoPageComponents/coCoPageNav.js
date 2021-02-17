import React from 'react';

import { Col, Row } from 'react-flexbox-grid';

import { Heading } from '../../StyleComponents/headings';
import { HrefLinkScrollTo } from '../../StyleComponents/htmlTags';

function CoCoPageNav({
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
  name,
}) {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Heading>On this page</Heading>
        </Col>
      </Row>
      <Row between="xs">
        <Col sm={2}>
          <HrefLinkScrollTo
            to={location1}
            spy={true}
            smooth={true}
            offset={-180}
          >
            Overview
          </HrefLinkScrollTo>
        </Col>
        <Col sm={2}>
          <HrefLinkScrollTo
            to={location6}
            spy={true}
            smooth={true}
            offset={-180}
          >
            Why should I use this?
          </HrefLinkScrollTo>
        </Col>
        <Col sm={2}>
          <HrefLinkScrollTo
            to={location2}
            spy={true}
            smooth={true}
            offset={-180}
          >
            Who else is using this?
          </HrefLinkScrollTo>
        </Col>
        <Col sm={2}>
          <HrefLinkScrollTo
            to={location3}
            spy={true}
            smooth={true}
            offset={-180}
          >
            About {name}
          </HrefLinkScrollTo>
        </Col>
        <Col sm={2}>
          <HrefLinkScrollTo
            to={location4}
            spy={true}
            smooth={true}
            offset={-180}
          >
            Getting started
          </HrefLinkScrollTo>
        </Col>
        <Col sm={2}>
          <HrefLinkScrollTo
            to={location5}
            spy={true}
            smooth={true}
            offset={-180}
          >
            Support
          </HrefLinkScrollTo>
        </Col>
      </Row>
    </div>
  );
}

export default CoCoPageNav;
