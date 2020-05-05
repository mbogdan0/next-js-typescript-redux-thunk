import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Invite } from '../containers/invite';
import { withRedux } from '../redux/with-redux';
import { thunkFetchInvites } from '../containers/invite/redux/thunk-actions';
import { ContextProps } from '../types/next-page-props';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Title>OK</Title>
      <Invite />
    </div>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red}
`;

IndexPage.getInitialProps = async ({ reduxStore: { dispatch } }: ContextProps) => {
  await dispatch(thunkFetchInvites());
  return {};
};

export default withRedux(IndexPage);
