import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 37.32px;
  font-weight: 700;
`;

export const Heading = styled.h2.attrs({
  className: 'heading',
})`
  font-size: 31px;
  font-weight: 700;
  line-height: 1.6;
`;

export const FAQHeading = styled.h3.attrs({
  className: 'faq-heading',
})`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 20px;
`;

export const SubHeading = styled.h3.attrs({
  className: 'subHeading',
})`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.6;
`;

export const SubSubHeading = styled.h4.attrs({
  className: 'subSubHeading',
})`
  font-size: 21.6px;
  font-weight: 700;
  line-height: 1.6;
`;

export const CaseStudyHeading = styled(Heading)`
  margin-bottom: 24px;
`;

export const CollapseContentHeading = styled.h4`
  font-weight: bold;
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
  font-weight: 700;
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
