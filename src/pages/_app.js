import Theme from '../styles/theme';
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Rufus Drew</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

