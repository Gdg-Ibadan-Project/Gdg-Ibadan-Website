import Head from "next/head";
import favicon from "../assets/favicon.webp"

const Home = () => {
  return (
    <div>
      <Head>
        <title>GDG Ibadan Website</title>
        <meta name="keywords" content="GDG, Ibadan, devfest, community" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href={favicon.src} />

      </Head>
      <h1>HELLO Dev.</h1>
      <h1>Pick it up from here</h1>
    </div>
  );
};
export default Home;
