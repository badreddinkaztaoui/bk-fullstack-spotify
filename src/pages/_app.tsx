// Layout
import Layout from "../Layout";
// Reset css
import "reset-css";
import "../styles/styles.global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
