import { Navigation } from "swiper";
import { NavigationProvider } from "../context/Navigation.context";
import Layout from "../layout/Layout";
import "../styles/globals.scss";
import "../styles/normalize.scss";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationProvider>
   
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
     </NavigationProvider>
  );
}

export default MyApp;
