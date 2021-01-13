import styled from 'styled-components';

export const Badge = styled.span.attrs({
  className: 'customBadge',
})`
  z-index: auto;
  min-width: 20px;
  height: 25px;
  padding: 3px 8px 3px 8px;
  color: black;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  margin-right: 4px;
  white-space: nowrap;
  text-align: center;
  background: #c0c0c0;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 0 1px #fff;
  box-shadow: 0 0 0 1px #fff;
`;

export const BadgeDot = styled.span.attrs({
  className: 'badgeDot',
})`
  height: 12px;
  width: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
`;

export const BadgeWrapper = styled.div.attrs({
  className: 'badgeWrapper',
})`
  padding-bottom: 18px;
`;
