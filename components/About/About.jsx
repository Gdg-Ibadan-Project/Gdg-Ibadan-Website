import styles from "./About.module.scss";
import Image from "next/image";
import globe from "../../assets/globe.svg";
import Head from "next/head";
import Counter from "../Counter/Counter";

const About = () => {
  return (
    <>
      <Head>
        <title>GDG Ibadan Website | About</title>
        <meta name="keywords" content="GDG, Ibadan, devfest, community" />
      </Head>
      <div className={styles.about_container}>
        <section>
          <div>
            <p className={styles.about_text}>About Event</p>

            <div className={styles.headings}>
              <h2>GDG GENERAL OVERVIEW</h2>
              <h2 className={styles.outline}>COMMUNITY RUN</h2>
              <h2>DEVELOPER FESTIVAL</h2>
            </div>

            <div>
              <p>
                Join us for the annual developer festival of sessions,
                workshops, training, codelabs, and much more by awesome
                speakers. With over 2,000 developers from across the South West
                Region of Nigeria in 2018, more than 2,200 from #DevFestLagos
                2019, and also our virtual DevFestLagos event in 2020.
              </p>
            </div>

            <Counter />
          </div>

          <div>
            <Image src={globe} alt="globe's icon" />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
