import Layout from "../layout/Layout";
import "../styles/globals.scss";
import "../styles/normalize.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
