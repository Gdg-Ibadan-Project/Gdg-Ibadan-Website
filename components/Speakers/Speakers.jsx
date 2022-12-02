import React, { useState, useEffect } from "react";
import styles from "./Speakers.module.scss";
import Image from "next/image";
import icon from "../../public/assets/social-1.svg";
import icon2 from "../../public/assets/social-2.svg";
import icon3 from "../../public/assets/social-3.svg";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import icon4 from "../../public/assets/social-4.svg";
import { speakersData } from "../Modals/data";

const Speakers = () => {
  const [images, setImages] = useState(speakersData);
  const [prevIndex, setPrevIndex] = useState(0);
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
    setPrevIndex((prevIndex + 1) % images.length);
    setNextIndex((nextIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // nextImage();
    }, 2000);
    return () => clearInterval(interval);
  }, [index, nextIndex, prevIndex]);

  // const prevImage = () => {
  //   setImages(prev => {
  //     const last = prev[prev.length - 1];
  //     const others = prev.slice(0, prev.length - 1);
  //     return [last, ...others]
  //   })
  // }

  return (
    <div className={styles.speakers_container} id="speakers">
      <div className={styles.images_container}>
        <div className={styles.prev}>
          <Image src={images[prevIndex].image} alt="Speaker's image" />
          <div>
            <h3>{images[prevIndex].title}</h3>
            <p>
              Kati Frantz is a software engineer and Auth0 Ambassador passionate
              about mentoring and training other developers. He’s published over
              150 hours of training resources on Udemy with over 65 000
              students.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.active}>
            <Image src={images[index].image} alt="Speaker's image" />
            <div>
              <h3>{images[index].title}</h3>
              <p>
                Chuka is an experienced enterprise software architect with a
                demonstrated history of working in the information technology
                and services industry. Skilled in Business Planning, Product
                Design & Development, Software Engineering, and DevOps. Strong
                entrepreneurship professional graduated from University of
                Lagos.
              </p>
            </div>

            <div className={styles.icons}>
              <a href="">
                <Image src={icon} alt="" />
              </a>
              <a href="">
                <Image src={icon2} alt="" />
              </a>
              <a href="">
                <Image src={icon3} alt="" />
              </a>
            </div>
          </div>
          {/* <div className={styles.controls}>
                <button onClick={prevImage} className={styles.first}><ArrowLeft /></button>
                <button onClick={nextImage} className={styles.second}><ArrowRight /></button>
            </div> */}
        </div>

        <div className={styles.next}>
          <Image src={images[nextIndex].image} alt="Speaker's image" />
          <div>
            <h3>{images[nextIndex].title}</h3>
            <p>
              Idris Olubisi is a graduate of Electrical and Electronics
              Engineering and a Software Engineer. He is a software engineer and
              technical writer with an extensive understanding of open-source,
              blockchain, software products, and serverless technologies, and he
              is a passionate speaker in these areas. A Freecodecamp
              author/contributor, Section engineering author. Moralis, Hashnode,
              LogRocket Web3 technical writer, AngelHack ambassador, Web3 Afrika
              founder, Developer DAO member, and the Backend Lead of
              SheCodeAfrica, a coding community with over 10,000+ active women
              in Africa.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.text}>
        <div className="heading">
          <h2>Speakers</h2>
        </div>

        <p>
          Join us for te annual developer festival of sessions, workshops,
          trainings, codelabs and much more by awesome
        </p>
      </div>
    </div>
  );
};

export default Speakers;
