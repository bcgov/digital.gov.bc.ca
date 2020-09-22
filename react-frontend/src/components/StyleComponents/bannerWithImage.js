import styled from 'styled-components';

// "pageText"
// "pageTitle" style = {{ color: 'white' }}
// "pageDescription"

// export const PageContainerCaseStudies = styled.div`
//   background-color: #f2f2f2;
//   z-index: -2;
//   padding-bottom: 70px;
//   padding-top: 100px;
//   @media only screen and (max-width: 800px) {
//     padding-top: 65px;
//   }
// `;

export const HomeBannerImage = styled.img`
  margin-left: -10%;
  max-width: 200%;
  min-height: 100%;
  min-width: 100%;
  pointer-events: none;
  position: absolute;
  @media only screen and (max-width: 800px) {
    margin-left: -50%;
    max-width: 500%;
  }
`;

export const PageTextBanner = styled.div`
  background: rgba(0, 51, 102, 0.7);
  margin-bottom: 120px;
  margin-top: 260px;
  padding: 25px;
  position: absolute;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 800px) {
    margin-top: 60px;
    padding-top: 0;
  }
`;

export const PageTop = styled.div`
  height: 600px;
  margin-bottom: 120px;
  overflow: hidden;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 800px) {
    height: 520px;
    margin-bottom: 60px;
    margin-top: -50px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
`;
