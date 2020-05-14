import styled from 'styled-components';
import { mq } from '../mq';

export const HeaderText = styled.div`
  margin: 14px 0;
  font-size: 2em;
  ${mq.mobile} {
    font-size: 1.85em;
  }
  color: ${({ theme }) => theme.colors.headerColor2};
`;
