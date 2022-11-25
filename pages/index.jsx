import Head from "next/head";
import About from "../components/About/About";
import Event from "../components/Event/Event";
import Hero from "../components/Hero/Hero";
import Sponsors from "../components/Sponsors/Sponsors";
import Gallery from "../components/Gallery/Gallery";
import favicon from "../assets/favicon.webp"
import Organizers from "../components/Organizers/Organizers";



const Home = () => {
  return (
    <div>
      <Head>
        <title>GDG Ibadan Website</title>
        <meta name="keywords" content="GDG, Ibadan, devfest, community" />
        <link rel="shortcut icon" href={favicon.src} />

      </Head>
      <Hero />
      <About />
      <Event />
      <Sponsors />
      <Organizers />
      <Gallery />
    </div>
  );
};
export default Home;