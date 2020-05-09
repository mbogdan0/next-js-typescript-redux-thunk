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
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cuprum:wght@400;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <CreateForm />
      <Link href="/">
        <a>back</a>
      </Link>
    </Layout>
  );
};


// CreatePost.getInitialProps = async ({ reduxStore: { dispatch } }: ContextProps) => {
//   return {};
// };

export default wrapPage(CreatePost);
