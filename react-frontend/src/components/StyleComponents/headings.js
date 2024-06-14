import styled from 'styled-components';

export const Title = styled.h1.attrs({
  className: 'heading styled-title',
})`
&.styled-title{
  font-size: 37.32px;
  font-weight: 700;
}
`;

export const Heading = styled.h2.attrs({
  className: 'heading styled-heading',
})`
&.styled-heading{
  font-size: 31px;
  font-weight: 700;
  line-height: 1.3;
}
`;

export const FAQHeading = styled.h3.attrs({
  className: 'faq-heading styled-faq-heading',
})`
&.styled-faq-heading{
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 20px;
}
`;

export const SubHeading = styled.h3.attrs({
  className: 'subHeading styled-sub-heading',
})`
&.styled-sub-heading{
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
}
`;

export const SubSubHeading = styled.h4.attrs({
  className: 'subSubHeading styled-sub-sub-heading',
})`
&.styled-sub-sub-heading{
  font-size: 21.6px;
  font-weight: 700;
  line-height: 1.3;
}
`;

export const CaseStudyHeading = styled(Heading).attrs({
  className: 'styled-case-study-heading',
})`
&.styled-case-study-heading{
  margin-bottom: 24px;
}
`;

export const CollapseContentHeading = styled.h4.attrs({
  className: 'styled-collapse-content-heading',
})`
&.styled-collapse-content-heading{
  font-weight: bold;
}
`;

export const DigitalFrameworkHeading = styled(Heading).attrs({
  className: 'styled-digital-framework-heading',
})`
&.styled-digital-framework-heading{
  margin-bottom: 5px;
}
`;

export const DigitalFrameworkSubHeading = styled(SubHeading).attrs({
  className: 'styled-digital-framework-sub-heading',
})`
&.styled-digital-framework-sub-heading{
  margin-bottom: 5px;
  margin-top: 5px;
}
`;

export const DigitalPrinciplesHeading = styled.h2.attrs({
  className: 'digitalPrinciplesHeading styled-digital-prin-heading',
})`
&.styled-digital-prin-heading{
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 30px;
}
`;

export const ProductPageHeading = styled(Heading).attrs({
  className: 'styled-product-page-heading',
})`
&.styled-product-page-heading{
  margin-bottom: 5px;
}
`;

export const ProductPageSubHeading = styled(SubHeading).attrs({
  className: 'styled-product-page-sub-heading',
})`
&.styled-product-page-sub-heading{
  margin-bottom: 5px;
}
`;

export const ResourcePageHeading = styled.h2.attrs({
  className: 'resourceHeading styled-resource-page-heading',
})`
&.styled-resource-page-heading{
  font-size: 31px;
  margin-bottom: 24px;
}
`;

export const ResourcePageSubHeading = styled.h3.attrs({
  className: 'resourceSubHeading styled-resource-page-sub-heading',
})`
&.styled-resource-page-sub-heading{
  font-size: 16pt;
  margin-bottom: 10px;
}
`;

export const SimpleTextPageTitle = styled.h1.attrs({
  className: 'styled-title-simple-text-page-title',
})`
&.styled-title-simple-text-page-title{
  font-size: 3rem;
  margin-top: 30px;
}
`;
export const Title2 = styled.h2.attrs({
  className: 'styled-title-2',
})`
&.styled-title-2{
  font-size: 31px;
  margin-bottom: 24px;
}
`;
export const Title3 = styled.h3.attrs({
  className: 'styled-title-3',
})`
&.styled-title-3{
  font-size: 2.5rem;
  margin-top: 30px;
}
`;
export const Title4 = styled.h4.attrs({
  className: 'styled-title-4',
})`
&.styled-title-4{
  font-size: 2.25rem;
  margin-top: 28px;
}
`;
