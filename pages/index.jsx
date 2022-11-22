import Head from "next/head";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Head>
        <title>GDG Ibadan Website</title>
        <meta name="keywords" content="GDG, Ibadan, devfest, community" />
      </Head>
      <Hero />
      <About />
    </div>
  );
};
export default Home;
