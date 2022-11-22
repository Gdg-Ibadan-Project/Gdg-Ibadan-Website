import Head from "next/head";
import React from "react";
import { Location, Calendar } from "iconsax-react";
import styles from "./map.module.scss";
import Counter from "../../../components/Counter/Counter";
import Map from "../../../components/Map/Map";

const map = () => {
  return (
    <>
      <Head>
        <title>GDG Ibadan Website | Map</title>
        <meta name="keywords" content="GDG, Ibadan, devfest, community" />
      </Head>
      <div className={styles.map__container}>
        <div className={styles.map__texts}>
          <h1>DEVFEST IBADAN</h1>
          <p>
            Join us for the annual developer festival of sessions, workshops,
            training, codelabs, and much more by awesome.
          </p>

          <div className={styles.venue}>
            <div>
              <Location size={23} />
              <h3>VENUE:</h3>
            </div>
            <p>
              Join us for the annual developer festival of sessions, workshops,
              training.
            </p>
          </div>

          <div className={styles.venue}>
            <div>
              <Calendar size={23} />
              <h3>DATE:</h3>
            </div>
            <p>03, December 2022.</p>
          </div>
          <Counter />
        </div>
        <div className={styles.map__wrapper}>
          <Map />
        </div>
      </div>
    </>
  );
};

export default map;
