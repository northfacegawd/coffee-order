import React from 'react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@styles/globals.scss';
import Layout from '@components/layout';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((response) => response.data),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
