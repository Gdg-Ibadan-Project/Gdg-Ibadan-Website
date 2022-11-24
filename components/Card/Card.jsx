import Image from "next/image";
import { MdTimer } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import YoutubeIcon from "../../assets/yicon.svg"
import styles from "./Card.module.scss";

const Card = ({ title, body, article, type }) => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles["container__header"]}>
          <div className={styles["container__header--dot"]}>
            <span className={styles[`${type}`]}></span> {type.toLowerCase()}
          </div>
          <h3>Frontend Optimization with React</h3>
          <p>Joshua Olajide</p>
          <ul className={styles["container__header--footer"]}>
            <li>
              <MdTimer />
              02:00 PM
            </li>
            <li>
              <BiCalendar />
              03, December 2022
            </li>
            <li>
              <CiLocationOn />
              Nustreams Hall 1
            </li>
          </ul>
        </header>
        <div className={styles["container__body"]}>
          <article>
            This talk by Adeolu Ademuyiwa is going to present a deep dive into te new updates that has been made to react in 2022. This would help you learn how to beeter handle frontend issues wth react. The speaker Adeolu Ademuyiwa is a Principal frontend engineer with Meta. He has 15+ years of experience working in big tech. This talk by Adeolu Ademuyiwa is going to present a deep dive into te new updates that has been made to react in 2022.
          </article>
          <section>
            <Image src={YoutubeIcon} alt="" width='39' height='39' />
          </section>
        </div>
      </div>
    </>
  );
};

export default Card;
