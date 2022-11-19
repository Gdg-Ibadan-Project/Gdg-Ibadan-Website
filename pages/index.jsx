import Head from "next/head";
import Event from "../components/Event/Event";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Head>
        <title>GDG Ibadan Website</title>
        <meta name="keywords" content="GDG, Ibadan, devfest, community" />
      </Head>
      <Hero />
      <Event />
      {/* <h1>HELLO Dev.</h1>
      <h1>Pick it up from here</h1> */}
    </div>
  );
};
export default Home;
