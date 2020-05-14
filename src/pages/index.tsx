import React from 'react';
import { NextPage } from 'next';
import { ContextProps } from '../types/next-page-props';
import { Layout } from '../containers/layout';
import { wrapPage } from '../utils/wrapPage';
import { thunkFetchEntriesMain } from '../containers/entries-main/redux/thunk-actions';
import { EntriesMain } from '../containers/entries-main';


const IndexPage: NextPage = () => {
  return (
    <Layout hasHeader>
      <EntriesMain />
    </Layout>
  );
};


IndexPage.getInitialProps = async ({ reduxStore: { dispatch } }: ContextProps) => {
  await dispatch(thunkFetchEntriesMain());
  return {};
};


export default wrapPage(IndexPage);
