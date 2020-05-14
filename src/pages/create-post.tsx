import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '../containers/layout';
import { CreateForm } from '../containers/create-form';
import { wrapPage } from '../utils/wrapPage';

const CreatePost: NextPage = () => {
  return (
    <Layout hasHeader={false}>
      <CreateForm />
      <Link href="/">
        <a>back</a>
      </Link>
    </Layout>
  );
};


CreatePost.getInitialProps = async () => {
  return {};
};

export default wrapPage(CreatePost);
