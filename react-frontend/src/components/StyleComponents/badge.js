import styled from 'styled-components';

export const Badge = styled.span.attrs({
  className: 'customBadge styled-badge',
  role:'listitem'
})`
  &.styled-badge{
  z-index: auto;
  min-width: 20px;
  height: 25px;
  padding: 3px 8px 3px 8px;
  color: black;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 12px;
  line-height: 20px;
  margin-right: 4px;
  margin-top: 6px;
  white-space: nowrap;
  text-align: center;
  background: ${(props) => (props.background ? props.background : '#f2f2f2')};
  border-radius: 10px;
  -webkit-box-shadow: 0 0 0 1px #fff;
  box-shadow: 0 0 0 1px #fff;
  }
`;

export const BadgeDot = styled.div.attrs({
  className: 'badgeDot styled-badge-dot'
})`
&.styled-badge-dot{
  height: 14px;
  width: 14px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  vertical-align: text-top;
}
`;

export const BadgeWrapper = styled.div.attrs({
  className: 'badgeWrapper styled-badge-wrapper',
  role:'list',
  'aria-label':'tags'
})`
  &.styled-badge-wrapper{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  }
`;
