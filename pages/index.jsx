import Head from "next/head";
<<<<<<< HEAD:pages/index.jsx
import Event from "../components/Event/Event";
import Hero from "../components/Hero/Hero";
=======
import favicon from "../assets/favicon.webp"
>>>>>>> semight:pages/index.js

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
      <Hero />
      <Event />
      {/* <h1>HELLO Dev.</h1>
      <h1>Pick it up from here</h1> */}
    </div>
  );
};
export default Home;
