import styled from 'styled-components';

export const Badge = styled.span.attrs({
  className: 'customBadge',
})`
  z-index: auto;
  min-width: 20px;
  height: 25px;
  padding: 3px 8px 3px 8px;
  color: black;
  font-family: BC Sans, Noto Sans, Verdana, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  margin-right: 4px;
  white-space: nowrap;
  text-align: center;
  background: #f2f2f2;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 0 1px #fff;
  box-shadow: 0 0 0 1px #fff;
`;

export const BadgeDot = styled.div.attrs({
  className: 'badgeDot',
})`
  height: 14px;
  width: 14px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  vertical-align: text-top;
`;

export const BadgeWrapper = styled.div.attrs({
  className: 'badgeWrapper',
})`
  padding-bottom: 18px;
`;
