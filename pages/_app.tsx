import React from "react";
import type { AppProps } from "next/app";
import VCardProvider from "../context";

import Layout from "../components/Layout";

import "../styles/globals.scss";
import "../services";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VCardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VCardProvider>
  );
}

export default MyApp;
