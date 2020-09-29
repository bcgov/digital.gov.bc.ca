import styled from 'styled-components';

export const CardHorizontalDescription = styled.p.attrs({
  className: 'cardHorizonalDescription',
})``;

export const CardHorizontalTitle = styled.h5.attrs({
  className: 'cardHorizontalTitle',
})`
  font-family: 'BC Sans';
  font-size: 31px;
  font-weight: bold;
  line-height: 41px;
  position: relative;
`;

export const CardDescription = styled.p.attrs({
  className: 'cardDescription',
})`
  padding-bottom: 25px;
`;

export const CardTitle = styled.h5.attrs({
  className: 'cardTitle',
})`
  font-family: 'BC Sans';
  font-size: 31px;
  font-weight: bold;
  line-height: 44px;
  position: relative;
  @media only screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: -10px;
  }
`;
