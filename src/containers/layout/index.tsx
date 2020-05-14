import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { mq } from '../../styled/mq';
import { Header } from './Header';
import { Content } from './Content';
import { ThemeSelector } from '../theme-selector';

type Props = {
  children: ReactNode;
  hasHeader: boolean;
}
export const Layout: FC<Props> = ({ children, hasHeader }: Props) => {
  return (
    <Body>
      <ThemeSelector />
      {hasHeader && <Header />}
      <Content>
        {children}
      </Content>
    </Body>
  );
};

const Body = styled.div`
  ${mq.mobile} {
    margin: 0 6px;
  }
  ${mq.tablet} {
    margin: 0 16px;
  }
  ${mq.desktop} {
    margin: 0 11%;
  }
  ${mq.large} {
    margin: 0 16%;
  }
`;
