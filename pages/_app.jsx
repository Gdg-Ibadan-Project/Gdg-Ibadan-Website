import Layout from "../layout/Layout";
import "../styles/globals.scss";
import "../styles/normalize.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
