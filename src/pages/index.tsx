import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { Invite } from '../containers/invite';
import { thunkFetchInvites } from '../containers/invite/redux/thunk-actions';
import { ContextProps } from '../types/next-page-props';
import { Layout } from '../containers/layout';
import { wrapPage } from '../utils/wrapPage';


const IndexPage: NextPage = () => {
  return (
    <Layout hasHeader>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cuprum:wght@400;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <Title>OK</Title>
      <Link href="/create-post">
        <a>create post</a>
      </Link>
      <Invite />
    </Layout>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red}
`;

IndexPage.getInitialProps = async ({ reduxStore: { dispatch } }: ContextProps) => {
  await dispatch(thunkFetchInvites());
  return {};
};

export default wrapPage(IndexPage);
