import styled from 'styled-components';

export const CardHorizontal = styled.div.attrs({
  className: 'cardHorizontal',
})`
  display: block;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    align-items: stretch;
    display: flex;
    width: 100%;
  }
`;

export const CardHorizontalDescription = styled.p.attrs({
  className: 'cardHorizonalDescription',
})`
  margin-bottom: 25px;
`;

export const CardHorizontalImage = styled.div.attrs({
  className: 'cardHorizontalImage',
})`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    height: initial;
    width: 50%;
  }
`;

export const CardHorizontalText = styled.div.attrs({
  className: 'cardHorizontalText',
})`
  background: #fff;
  height: fit-content;
  padding: 24px;
  text-align: left;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const CardHorizontalTitle = styled.h5.attrs({
  className: 'cardHorizontalTitle',
})`
  font-family: 'BC Sans';
  font-size: 31px;
  font-weight: bold;
  line-height: 1.2;
  position: relative;
  @media only screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 1.25;
  }
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
  line-height: 1.2;
  position: relative;
  @media only screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 1.25;
  }
`;
