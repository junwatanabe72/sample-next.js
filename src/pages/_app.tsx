import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import { AppProps } from 'next/app';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
