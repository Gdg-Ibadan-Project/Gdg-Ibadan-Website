import React, { useState } from "react";
import styles from "./BottomNav.module.scss";
import Image from "next/image";
import play from "../../assets/play.svg";

const BottomNav = () => {
  const links = ["About", "Schedule", "Speakers", "Sponsors", "Organizers"];
  const [navIndex, setNavIndex] = useState(-1);

  const handleClick = (index) => {
    setNavIndex(index);
  };

  return (
    <div className={styles.nav_container}>
      <section>
        <nav>
          {links.map((link, index) => (
            <a
              href="#"
              key={index}
              onClick={() => handleClick(index)}
              className={index === navIndex ? `${styles.active}` : null}
            >
              {link}
            </a>
          ))}
        </nav>

        <div>
          <button>
            <Image
              src={play}
              className={styles.play_icon}
              alt="play button's icon"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BottomNav;
