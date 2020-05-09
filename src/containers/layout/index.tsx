import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { mq } from '../../styled/mq';
import { Header } from './Header';
import { Entry } from '../../types/entry';
import { EntryBlock } from './EntryBlock';
import { Content } from './Content';
import { ThemeSelector } from '../theme-selector';


const J: Entry = {
  title: 'Архитектура Подола — Киев май 2020',
  short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  slug: 'ololoev-2020',
  tags: ['Киев', 'архитектура', 'фото'],
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date: '6 мая 2020',
  id: 1,
};


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
        {/*<EntryBlock data={J} />*/}
        {/*<EntryBlock data={J} />*/}
        {/*<EntryBlock data={J} />*/}
        {/*<EntryBlock data={J} />*/}
        {/*<EntryBlock data={J} />*/}
      </Content>
      {children}
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
