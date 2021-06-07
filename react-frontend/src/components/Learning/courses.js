import React from 'react';
import { Col, Row } from 'react-flexbox-grid';

import { ContentBlockContainer } from '../StyleComponents/pageContent';
import { Heading } from '../StyleComponents/headings';

// const fetchCourses = () => {
//   // dispatch(eventsAreLoading);
//   const paginationQueryString = `${paginationData.initialRequestUrl}&page=${paginationData.page_number + 1}`;

//   const homePageUrl = BASE_URL;
//   fetch(paginationQueryString, {
//     method: "GET",
//     headers: {
//       "Authorization": 'Bearer <token>',
//       "Origin": homePageUrl
//     }
//   })
//     .then(resp => resp.json())
//     .then(paginatedEventsData => dispatch({
//       type: 'ADD_PAGINATED_EVENTS_SUCCESS',
//       events: paginatedEventsData
//     })
//       .catch(err => dispatch(eventsHasErrored(err)))

// }
//  TODO MAKE 100% CERTAIN THAT I CAN STORE THE BEARER TOKEN IN THE REACT FRONTEND
// https://create-react-app.dev/docs/adding-custom-environment-variables/
// This says no.
// The courses are pulled from eventbrite and the content populates cards
function Courses() {
  return (
    <ContentBlockContainer id="courses">
      <Row>
        <Col sm={12}>
          <Heading>Courses</Heading>
        </Col>
      </Row>
      <Row>{console.log(process.env.REACT_APP_EVENTBRITE_BEARER_TOKEN)}</Row>
    </ContentBlockContainer>
  );
}

export default Courses;
