import Image from "next/image";
import Pic from "../../assets/image.png";
import Icon from "../../assets/circle.png";
import { MdTimer } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import styles from "./Card.module.scss";

const Card = ({ title, body, article }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.image}>
            <Image src={Pic.src} alt="" width='30' height='30' />
          </div>

          <div className={styles.title}>
            <div className={styles.text}>
              <h1>{title}</h1>
              <div className={styles.right}>
                <Image src={Icon.src} alt="" width='30' height='30' />
                <p>{article}</p>
              </div>
            </div>
            <div className={styles.article}>{body}</div>
            <ul className={styles.icon}>
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
                Nurstreams Hall 1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
