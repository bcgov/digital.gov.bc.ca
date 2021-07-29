import styled from 'styled-components';
import { Card } from 'antd';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const cardBorderRadius = '25px';
const cardBorderInsetRadius = '18px';

export const BlogCardThumnail = styled.img`
  background: #003366;
  border-radius: ${cardBorderInsetRadius} ${cardBorderInsetRadius} 0 0;
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

export const BlogCardThumnailNullImg = styled.div`
  border-radius: ${cardBorderInsetRadius} ${cardBorderInsetRadius} 0 0;
  background: #003366;
  height: 200px;
`;

export const BlogCardAuthorLine = styled.div`
  align-items: center;
  color: #606060;
  display: flex;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 12px;
  justify-content: space-between;
  padding-bottom: 6px;
  width: 100%;
`;

//clickable cards
export const CardClickable = styled(Link).attrs({
  className: 'cardClickable',
})`
  border: 6px solid transparent;
  border-radius: ${cardBorderRadius};
  height: 100%;
  display: flex;
  flex-direction: column;
  :hover,
  :focus {
    border-color: #fdb917;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.15s; /* These make the interaction less jumpy */
    transition-timing-function: ease-in-out;
  }
  :focus {
    outline: -webkit-focus-ring-color auto 6px !important;
  }
`;

export const CardClickableDescription = styled.p.attrs({
  className: 'cardClickableDescription',
})`
  background: #ffffff;
  border-radius: 0 0 ${cardBorderInsetRadius} ${cardBorderInsetRadius};
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 24px;
  text-align: left;
`;

export const CardClickableHeader = styled.h5.attrs({
  className: 'cardClickableHeader',
})`
  border-radius: ${cardBorderInsetRadius} ${cardBorderInsetRadius} 0 0;
  margin: 0;
`;

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

export const CardHorizontalCoCoImage = styled.div.attrs({
  className: 'cardHorizontalImage',
})`
  background: white;
  background-position: center;
  background-size: cover;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  text-align: center;
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
  margin: auto;
  max-height: 180px;
  padding: 24px 0 0;
  width: auto;
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

//common components cards
export const CoCoCardStyled = styled(CardClickable).attrs({
  className: 'coCoCard',
})``;

export const CoCoCardHeader = styled(CardClickableHeader).attrs({
  className: 'coCoCardHeader',
})`
  background: #ffffff;
  padding: 24px 24px 0;
`;

export const CoCoCardDescription = styled(CardClickableDescription).attrs({
  className: 'coCoCardDescription',
})`
  padding: 40px 24px 24px;
`;

export const CoCoCardTitle = styled(CardTitle).attrs({
  className: 'coCoCardTitle',
})`
  font-size: 26px;
  margin-bottom: 0;
`;

//community cards
export const CommunityCardDescription = styled(CardClickableDescription).attrs({
  className: 'communityCardDescription',
})``;

export const CommunityCardHeader = styled(CardClickableHeader).attrs({
  className: 'communityCardHeader',
})`
  background: #003366;
  color: #ffffff;
  font-weight: 700;
  font-size: 21px;
  padding: 24px;
`;

export const CommunityCardStyled = styled(CardClickable).attrs({
  className: 'communityCard',
})``;

//blog cards
export const BlogCardHeader = styled(CardClickableHeader).attrs({
  className: 'blogCardHeader',
})`
  background: #ffffff;
  border-radius: 0;
  height: fit-content;
  margin: 0;
  max-height: 100%;
  padding: 24px 24px 0;
  text-align: left;
`;

export const BlogCardTitle = styled(CardTitle).attrs({
  className: 'blogCardTitle',
})`
  font-size: 26px;
  margin-bottom: 0;
`;

export const BlogCardDescription = styled(CardClickableDescription).attrs({
  className: 'blogCardDescription',
})`
  border-radius: 0 0 ${cardBorderInsetRadius} ${cardBorderInsetRadius};
  margin-bottom: 0;
  padding: 16px 24px 32px;
`;

export const BlogCardStyled = styled(CardClickable).attrs({
  className: 'blogCard',
})``;

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

export const EventCardStyled = styled.div.attrs({
  className: 'cardRound',
})`
  background-color: white;
  border-radius: ${cardBorderRadius};
  height: 100%;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const EventCardThumnail = styled.img`
  background: #e5e5e5;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  object-fit: contain;
  width: 100%;
`;

export const EventCardThumnailNullImg = styled.div`
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  background: #003366;
`;

export const EventCardTextBox = styled.div`
  background-color: white;
  border-radius: 0 0 ${cardBorderRadius} ${cardBorderRadius};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
`;
