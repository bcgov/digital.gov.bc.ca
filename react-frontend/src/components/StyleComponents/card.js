import styled from 'styled-components';
import { Card } from 'antd';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const cardBorderRadius = '25px';

export const CardStyled = styled(Card).attrs({
  className: 'cardRound',
})`
  border-radius: ${cardBorderRadius};
  height: 95%;
  margin-bottom: 20px;
  width: 100%;
`;

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
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  height: 200px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    border-radius: ${cardBorderRadius} 0 0 ${cardBorderRadius};
    height: initial;
    width: 50%;
  }
`;

export const CardHorizontalText = styled.div.attrs({
  className: 'cardHorizontalText',
})`
  border-radius: 0 0 ${cardBorderRadius} ${cardBorderRadius};
  background: #fff;
  height: fit-content;
  padding: 24px;
  text-align: left;
  @media only screen and (min-width: 768px) {
    border-radius: 0 ${cardBorderRadius} ${cardBorderRadius} 0;
    width: 50%;
  }
`;

export const CardHorizontalTitle = styled.h5.attrs({
  className: 'cardHorizontalTitle',
})`
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 31px;
  font-weight: 700;
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

export const CardImg = styled.img.attrs({
  className: 'cardImage',
})`
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0 !important;
  height: auto;
  max-width: 100%;
  min-height: 330px;
  min-width: 100%;
  object-fit: cover;
`;

export const CardIllustration = styled.img.attrs({
  className: 'cardIllustration',
})`
  padding: 25px;
`;

export const CardLinkDiv = styled.div.attrs({
  className: 'cardLink',
})`
  bottom: 25px;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
`;

export const CardTitle = styled.h5.attrs({
  className: 'cardTitle',
})`
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 31px;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  @media only screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 1.25;
  }
`;

//community cards
export const CommunityCardDescription = styled.p.attrs({
  className: 'cardHorizontalText',
})`
  background: #ffffff;
  border-radius: 0 0 ${cardBorderRadius} ${cardBorderRadius};
  height: fit-content;
  padding: 24px;
  text-align: left;
`;

export const CommunityCardHeader = styled.h5.attrs({
  className: 'cardHorizontalText',
})`
  background: #003366;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  color: #ffffff;
  font-weight: 700;
  font-size: 21px;
  height: fit-content;
  margin-bottom: 0;
  padding: 24px;
  text-align: left;
`;

export const CommunityCardStyled = styled(Link).attrs({
  className: 'cardRound',
})`
  background: #003366;
  border-radius: ${cardBorderRadius};
  height: 95%;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  > :nth-child(2) {
    margin-top: auto;
    margin-bottom: -2px;
  }
  :hover {
    box-shadow: 5px 7px grey;
  }
`;

export const Icon = styled.img.attrs({
  className: 'icon',
})`
  height: 16px;
  position: relative;
  top: 2px;
`;

export const IconCol = styled(Col).attrs({
  className: 'iconCol',
})`
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
`;
