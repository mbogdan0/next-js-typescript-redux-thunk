import React from 'react';
import { NextPage } from 'next';
import { Invite } from '../containers/invite';
import { withRedux } from '../redux/with-redux';
import { thunkFetchInvites } from '../containers/invite/redux/thunk-actions';
import { ContextProps } from '../types/next-page-props';

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>OK</h1>
      <Invite />
    </div>
  );
};

IndexPage.getInitialProps = async ({ reduxStore: { dispatch } }: ContextProps) => {
  await dispatch(thunkFetchInvites());
  return {};
};

export default withRedux(IndexPage);
