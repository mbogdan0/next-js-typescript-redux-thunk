import React from 'react';
import styled from 'styled-components';
import { mq } from '../../styled/mq';

export const Div = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1;
  letter-spacing: 0;
  font-weight: bold;
  ${mq.mobile} {
    font-size: 51px;
    margin: 9vh 0 14vh;
  }
  ${mq.tablet} {
    font-size: 64px;
    margin: 11vh 0 13vh;
  }
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.33);
  .cl1 {
    color: ${({ theme }) => theme.colors.headerColor1};
  }
  .cl2 {
    color: ${({ theme }) => theme.colors.headerColor2};
  }
  .cl3 {
    color: ${({ theme }) => theme.colors.headerColor3};
  }
`;

export const Header = () => (
  <Div>
    <span className="cl1">Путешествия,</span>
    <br />
    <span className="cl2">наблюдения,</span>
    <br />
    <span className="cl3">размышления</span>
  </Div>
);
