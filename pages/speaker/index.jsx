import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./speaker.module.scss";
import Speakers from "./Speaker";

const Index = () => {
  const [cardIndex, setCardIndex] = useState(0);

  let settings = {
    className: "slider",
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    focusOnSelect: true,
    centerMode: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          // padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className={styles.speaker__container}>
      <div className={styles.speaker__card}>
        <Slider {...settings} className={styles.slider__container}>
          {Speakers.map((speaker, index) => (
            <div className={styles.speakercard__container} key={index}>
              <Image
                src={speaker.pic}
                className={styles.speakercard__img}
                alt="Speaker's picture"
              />
              <h3 className={styles.speakercard__title}>{speaker.name}</h3>
              <p className={styles.speakercard__desc}>{speaker.desc}</p>
              <div className={styles.speakercard__social}>
                <div>
                  <a href={speaker.facebook}>
                    <FaFacebookF />
                  </a>
                </div>
                <div>
                  <a href={speaker.twitter}>
                    <FaTwitter />
                  </a>
                </div>
                <div>
                  <a href={speaker.linkedin}>
                    <FaLinkedinIn />
                  </a>
                </div>
                <div>
                  <a href={speaker.instagram}>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.speaker__text}>
        <h3 className={styles.speaker__text_title}>Speakers</h3>
        <p className={styles.speaker__text_desc}>
          Join us for the annual developer festival of sessions, workshops,
          training, codelabs, and much more by awesome.
        </p>
        {/* <ul className={styles.speaker__bullet}>
          {Speakers.map((speaker, index) => (
            <li
              key={index}
              onClick={() =>
                // slickGoTo(index)
                setCardIndex(index)
              }
            ></li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Index;
