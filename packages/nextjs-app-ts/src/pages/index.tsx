import Head from 'next/head';
import React, { FC } from 'react';

import Navbar from '~~/components/shared/navbar';
import { TPageProps } from '~~/models/TAppProps';

const Page: FC<TPageProps> = (props) => {
  return (
    <div className="App">
      <Head>
        <title>Scaffold-eth-typescript</title>
        <meta name="description" content="Generated from Scaffold-eth-typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <MainPage pageName="main" {...props}></MainPage>; */}
    </div>
  );
};

export default Page;
