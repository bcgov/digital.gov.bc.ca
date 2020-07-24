import styled from 'styled-components';
import { BREAKPOINTS } from '../../styleTokens';

export const PaddedContainer = styled.div`
  padding: 0 150px;
  ${BREAKPOINTS.sm} {
    padding: 0 15px;
  }
`;
