import React from 'react';
import { NextPage } from 'next';
import { Invite } from '../containers/invite';
import { withRedux } from '../redux/with-redux';
import { thunkFetchInvites } from '../containers/invite/redux/thunk-actions';

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>OK</h1>
      <Invite />
    </div>
  );
};

IndexPage.getInitialProps = async ({ reduxStore }: any) => {
  const { dispatch } = reduxStore;
  await dispatch(thunkFetchInvites());
  return { reduxStore };
};

export default withRedux(IndexPage);
