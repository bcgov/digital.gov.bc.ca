import styled from 'styled-components';

export const Heading = styled.h2.attrs({
  className: 'heading',
})`
  font-size: 22pt;
  line-height: 24pt;
`;

export const SubHeading = styled.h3.attrs({
  className: 'subHeading',
})`
  font-size: 18pt;
  line-height: 24pt;
`;

export const CaseStudyHeading = styled(Heading)`
  margin-bottom: 24px;
`;

export const DigitalFrameworkHeading = styled(Heading)`
  margin-bottom: 5px;
`;

export const DigitalFrameworkSubHeading = styled(SubHeading)`
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const DigitalPrinciplesHeading = styled.h2.attrs({
  className: 'digitalPrinciplesHeading',
})`
  font-size: 2.5rem;
  margin-top: 30px;
`;

export const ProductPageHeading = styled(Heading)`
  margin-bottom: 5px;
`;

export const ProductPageSubHeading = styled(SubHeading)`
  margin-bottom: 5px;
`;

export const ResourcePageHeading = styled.h2.attrs({
  className: 'resourceHeading',
})`
  font-size: 31px;
  margin-bottom: 24px;
`;

export const ResourcePageSubHeading = styled.h3.attrs({
  className: 'resourceSubHeading',
})`
  font-size: 16pt;
  margin-bottom: 10px;
`;

export const SimpleTextPageTitle = styled.h1`
  font-size: 3rem;
  margin-top: 30px;
`;
export const Title2 = styled.h2`
  font-size: 31px;
  margin-bottom: 24px;
`;
export const Title3 = styled.h3`
  font-size: 2.5rem;
  margin-top: 30px;
`;
export const Title4 = styled.h4`
  font-size: 2.25rem;
  margin-top: 28px;
`;
