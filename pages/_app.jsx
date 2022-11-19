<<<<<<< HEAD:pages/_app.jsx
import Layout from "../layout/Layout";
import "../styles/globals.scss";
import "../styles/normalize.scss";
=======
import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Card from "../components/Card/Card";
>>>>>>> semight:pages/_app.js

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Card 
      title= {"Join us for the annual"}
      article= {"Completed"}
      body= {"Adeolu Ademuyiwa"}
    />
  </div>
  );
}

export default MyApp;
