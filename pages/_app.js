import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Card from "../components/Card/Card";

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
