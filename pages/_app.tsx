import "../styles/globals.css";
import Layout from "@components/layout";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
