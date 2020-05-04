import React from 'react';
import { NextPage } from 'next';
import { Invite } from '../containers/invite';
import { withRedux } from '../redux/with-redux';
import { inviteFetchAsync } from '../containers/invite/redux/actions';

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>OK</h1>
      <Invite />
    </div>
  );
};

IndexPage.getInitialProps = async ({ reduxStore, runSaga }: any) => {
  const { dispatch } = reduxStore;

  dispatch(inviteFetchAsync());
  await runSaga.toPromise();
  return {};
};


export default withRedux(IndexPage);
