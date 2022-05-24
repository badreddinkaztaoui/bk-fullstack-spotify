import { Fragment } from "react";
// Layout
import Layout from "../Layout";
// Styles
import "../styles/styles.global.scss";
import "reset-css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {Component.public ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Fragment>
  );
}

export default MyApp;
