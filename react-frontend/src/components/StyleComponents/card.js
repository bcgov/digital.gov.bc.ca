import styled from 'styled-components';
import { Card } from 'antd';
import { Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import { HrefLinkStandalone } from './htmlTags';

const cardBorderRadius = '21px';
const cardBorderInsetRadius = '16px';

//clickable cards
export const CardClickable = styled(Link).attrs({
  className: 'cardClickable styled-card-clickable',
})`
&.styled-card-clickable{
  border: 6px solid transparent;
  border-radius: ${cardBorderRadius};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
}
  &.styled-card-clickable:hover,
  &.styled-card-clickable:focus {
    border-color: #fdb917;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    transition: 0.15s; /* These make the interaction less jumpy */
    transition-timing-function: ease-in-out;
  }
  &.styled-card-clickable:focus {
    outline: -webkit-focus-ring-color auto 6px !important;
  }

`;

export const CardClickableBody = styled.div.attrs({
  className: 'cardBody styled-card-body',
})`
&.styled-card-body{
  background: #fff;
  border-radius: 0 0 ${cardBorderInsetRadius} ${cardBorderInsetRadius};
  height: 100%;
  padding: 24px;
}
`;

export const CardClickableDescription = styled.p.attrs({
  className: 'cardClickableDescription styled-card-clickable-desc',
})`
&.styled-card-clickable-desc{
  background: #ffffff;
  margin: 0;
}
`;

export const CardClickableHeader = styled.div.attrs({
  className: 'cardClickableHeader styled-card-clickable-header',
})`
&.styled-card-clickable-header{
  border-radius: ${cardBorderInsetRadius} ${cardBorderInsetRadius} 0 0;
  margin: 0;
}
`;

export const CardClickableThumnail = styled.img.attrs({
  className: 'styled-card-clickable-thumb',
})`
&.styled-card-clickable-thumb{
  border-radius: ${cardBorderInsetRadius} ${cardBorderInsetRadius} 0 0;
  height: 200px;
  object-fit: cover;
  width: 100%;
}
`;

//basic styled cards (with link)
export const CardStyled = styled(Card).attrs({
  className: 'cardRound styled-card-round',
})`
&.styled-card-round{
  border-radius: ${cardBorderRadius};
  height: 95%;
  margin-bottom: 20px;
  width: 100%;
}
`;

export const CardHorizontal = styled.div.attrs({
  className: 'cardHorizontal styled-card-hor',
})`
  &.styled-card-hor{
    display: block;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    &.styled-card-hor{
      align-items: stretch;
      display: flex;
      width: 100%;
    }
  }
`;

export const CardHorizontalDescription = styled.p.attrs({
  className: 'cardHorizonalDescription styled-card-hor-des',
})`
&.styled-card-hor-des{
  margin-bottom: 25px;
}
`;

export const CardHorizontalImage = styled.div.attrs({
  className: 'cardHorizontalImage styled-card-hor-image',
})`
&.styled-card-hor-image{
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  height: 200px;
  width: 100%;
}
  @media only screen and (min-width: 768px) {
    &.styled-card-hor-image{
      border-radius: ${cardBorderRadius} 0 0 ${cardBorderRadius};
      height: initial;
      width: 50%;
    }
  }

`;

export const CardHorizontalCoCoImage = styled.div.attrs({
  className: 'cardHorizontalImage styled-card-hor-coco-img',
})`
&.styled-card-hor-coco-img{
  background: white;
  background-position: center;
  background-size: cover;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  text-align: center;
  width: 100%;
}
  @media only screen and (min-width: 768px) {
    &.styled-card-hor-coco-img{
      border-radius: ${cardBorderRadius} 0 0 ${cardBorderRadius};
      height: initial;
      width: 50%;
    }
  }
`;

export const CardHorizontalText = styled.div.attrs({
  className: 'cardHorizontalText styled-card-hor-text',
})`
&.styled-card-hor-text{
  border-radius: 0 0 ${cardBorderRadius} ${cardBorderRadius};
  background: #fff;
  height: fit-content;
  padding: 24px;
  text-align: left;
}
  @media only screen and (min-width: 768px) {
    &.styled-card-hor-text{
    border-radius: 0 ${cardBorderRadius} ${cardBorderRadius} 0;
    width: 50%;
    }
  }
`;

export const CardHorizontalTitle = styled.h5.attrs({
  className: 'cardHorizontalTitle styled-card-hor-title',
})`
&.styled-card-hor-title{
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 31px;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
}
  @media only screen and (max-width: 800px) {
    &.styled-card-hor-title{
      font-size: 22px;
      line-height: 1.25;
    }
  }
`;

export const CardDescription = styled.p.attrs({
  className: 'cardDescription styled-card-des',
})`
&.styled-card-des{
  padding-bottom: 25px;
}
`;

export const CardImg = styled.img.attrs({
  className: 'cardImage styled-card-image',
})`
&.styled-card-image{
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0 !important;
  height: auto;
  max-width: 100%;
  min-height: 330px;
  min-width: 100%;
  object-fit: cover;
}
`;

export const CardIllustration = styled.img.attrs({
  className: 'cardIllustration styled-card-illustration',
})`
  &.styled-card-illustration {
    margin: auto;
    max-height: 180px;
    padding: 24px 0 0;
    width: auto;
  }
`;

export const CardLinkDiv = styled.div.attrs({
  className: 'cardLink styled-card-link-div',
})`
  &.styled-card-link-div {
    bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
  }
`;

export const CardTitle = styled.h2.attrs({
  className: 'cardTitle styled-card-title',
})`
&.styled-card-title{
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 31px;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
}
  @media only screen and (max-width: 800px) {
    &.styled-card-title{
      font-size: 22px;
      line-height: 1.25;
    }
  }
`;

// common component cards
export const CoCoCardDescription = styled(CardClickableDescription).attrs({
  className: 'coCoCardDescription',
})``;

export const CoCoCardHeader = styled(CardClickableHeader).attrs({
  className: 'coCoCardHeader styled-coco-header',
})`
&.styled-coco-header{
  background: #fff;
  padding: 24px 24px 0;
}
`;

export const CoCoCardStyled = styled(CardClickable).attrs({
  className: 'coCoCardStyled',
})``;

export const CoCoCardTitle = styled(CardTitle).attrs({
  className: 'coCoCardTitle styled-coco-card-title',
})`
&.styled-coco-card-title{
  font-size: 26px;
  margin-bottom: 0;
}
`;

//community cards
export const CommunityCardDescription = styled(CardClickableDescription).attrs({
  className: 'communityCardDescription',
})``;

export const CommunityCardHeader = styled(CardClickableHeader).attrs({
  className: 'communityCardHeader styled-comm-card-header',
})`
&.styled-comm-card-header{
  background: #003366;
  color: #ffffff;
  font-weight: 700;
  font-size: 21px;
  padding: 24px;
}
`;

export const CommunityCardHeading = styled.h5.attrs({
  className: 'communityCardHeading styled-comm-card-heading',
})`
&.styled-comm-card-heading{
  background: #003366;
  color: #ffffff;
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 0;
}
`;

export const CommunityCardStyled = styled(CardClickable).attrs({
  className: 'communityCard',
})``;

//blog cards
export const BlogCardAuthorLine = styled.div.attrs({
  className: 'styled-blog-card-auth-line',
})`
&.styled-blog-card-auth-line{
  align-items: center;
  color: #606060;
  display: flex;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 12px;
  justify-content: space-between;
  padding-bottom: 12px;
  width: 100%;
}
`;

export const BlogCardBody = styled(CardClickableBody).attrs({
  className: 'cardBody styled-blog-card-body',
})`
&.styled-blog-card-body{
  border-radius: 0 0 ${cardBorderInsetRadius} ${cardBorderInsetRadius};
}
`;

export const BlogCardDescription = styled(CardClickableDescription).attrs({
  className: 'blogCardDescription styled-blog-card-des',
})`
&.styled-blog-card-des{
  border-radius: 0;
  height: fit-content;
  margin-bottom: 0;
  padding: 0;
}
`;

export const BlogCardStyled = styled(CardClickable).attrs({
  className: 'blogCard',
})``;

export const BlogCardThumnail = styled(CardClickableThumnail)``;

export const BlogCardThumnailNullImg = styled.div.attrs({
  className: 'styled-blog-card-thumb-null-img',
})`
&.styled-blog-card-thumb-null-img{
  border-radius: ${cardBorderInsetRadius} ${cardBorderInsetRadius} 0 0;
  background: #003366;
  height: 200px;
}
`;

export const BlogCardTitle = styled(CardTitle).attrs({
  className: 'blogCardTitle styled-blog-card-title',
})`
&.styled-blog-card-title{
  font-size: 24px;
}
`;

export const Icon = styled.img.attrs({
  className: 'icon styled-icon',
})`
&.styled-icon{
  height: 16px;
  position: relative;
  top: 2px;
}
`;

export const IconCol = styled(Col).attrs({
  className: 'iconCol styled-icon-col',
})`
&.styled-icon-col{
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-weight: 700;
}
`;

export const EventCardStyled = styled.div.attrs({
  className: 'cardRound styled-event-card-styled',
})`
&.styled-event-card-styled{
  background-color: white;
  border-radius: ${cardBorderRadius};
  height: 100%;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;
export const EventCardThumnail = styled.img.attrs({
  className: 'styled-event-card-thumb',
})`
&.styled-event-card-thumb{
  background: #e5e5e5;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  object-fit: contain;
  width: 100%;
}
`;

export const EventCardThumnailNullImg = styled.div.attrs({
  className: 'styled-event-card-thumb-null-img',
})`
&.styled-event-card-thumb-null-img{
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  background: #003366;
}
`;

export const EventCardTextBox = styled.div.attrs({
  className: 'styled-event-card-text-box',
})`
&.styled-event-card-text-box{
  background-color: white;
  border-radius: 0 0 ${cardBorderRadius} ${cardBorderRadius};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
}
`;

export const ResourceCardStyled = styled.div.attrs({
  className: 'cardRound styled-resource-card-styled',
})`
&.styled-resource-card-style{
  background-color: white;
  border-radius: ${cardBorderRadius};
  height: 100%;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;
export const ResourceCardThumnail = styled.img.attrs({
  className: 'styled-res-card-thumb',
})`
&.styled-res-card-thumb{
  background: #e5e5e5;
  border-radius: ${cardBorderRadius} ${cardBorderRadius} 0 0;
  object-fit: contain;
  width: 100%;
}
`;

export const ResourceCardTextBox = styled.div.attrs({
  className: 'styled-res-card-textbox',
})`
&.styled-res-card-textbox{
  background-color: white;
  border-radius: 0 0 ${cardBorderRadius} ${cardBorderRadius};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
}
`;

//employee contact card
export const CardContact = styled.div.attrs({
  className: 'cardContact styled-card-contact',
})`
&.styled-card-contact{
  align-items: center;
  display: flex;
}
`;

export const ContactAvatar = styled.img.attrs({
  className: 'contactAvatar styled-contact-avatar',
})`
&.styled-contact-avatar{
  border-radius: 50%;
  height: 90px;
  margin-right: 12px;
}
`;

export const ContactName = styled.p.attrs({
  className: 'contactName styled-contact-name',
})`
&.styled-contact-name{
  font-weight: bold;
  margin-bottom: 0;
}
`;

export const ContactTitle = styled.p.attrs({
  className: 'contactTitle styled-contact-title',
})`
&.styled-contact-title{
  font-size: 0.9em;
  margin-bottom: 0;
}
`;

export const ContactEmail = styled(HrefLinkStandalone).attrs({
  className: 'contactEmail styled-contact-email',
})`
&.styled-contact-email{
  font-size: 0.9em;
}
`;
