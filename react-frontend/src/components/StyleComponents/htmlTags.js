import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarHeaderLink = styled.a.attrs({
  className: 'navBarHeaderLink',
})`
  -webkit-font-smoothing: antialiased;
  color: white;
  font-size: 1.4em;
  font-style: bold;
  line-height: 1;
  padding: 5px;
`;

export const NavBarLi = styled.li.attrs({
  className: 'navBarLi',
})`
  margin: 5px 0;
  @media screen and (min-width: 800px) {
    margin: 0;
  }
`;

export const NavBarLink = styled(Link).attrs({
  className: 'navBarLink',
})`
  color: #fff;
  display: flex;
  font-family: ‘BC Sans’;
  font-size: 16px;
  font-weight: normal; /* 400 */
  padding: 0 15px 0 15px;
  text-decoration: none;
  :hover {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: 800px) {
    border-right: 1px solid #9b9b9b;
  }
`;

export const NavBarUl = styled.ul.attrs({
  className: 'navBarUl',
})`
  color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-left: -75px;
  margin: 5px 0;
  .active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #fff;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
  @media screen and (max-width: 800px) {
    margin-left: -28px;
  }
`;
