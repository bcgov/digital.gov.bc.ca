import styled from 'styled-components';

export const NavTitle = styled.p.attrs({
  className: 'navTitle',
})`
  color: white;
  font-family: ‘BC Sans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-weight: normal;
  margin: 0px 5px 0px 25px;

  @media screen and (min-width: 900px) {
    font-size: 28px;
    visibility: visible;
  }
  @media screen and (min-width: 400px) and (max-width: 899px) {
    font-size: 18px;
    visibility: visible;
  }
  @media screen and (max-width: 400px) {
    font-size: 16px;
    margin: 0px 5px 0px -5%;
  }
`;
