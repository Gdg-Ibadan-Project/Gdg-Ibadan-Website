import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { NavigationContext } from "../../context/Navigation.context";

import styles from "./Navbar.module.scss";
import { Location, Calendar, TextalignJustifyright } from "iconsax-react";
import close from "../../public/close.svg";

import favicon from "../../assets/favicon.webp";

const Navbar = () => {
  const navigationState = useContext(NavigationContext);

  const [navToggle, setNavToggle] = navigationState;

  // console.log(navToggle)

  const router = useRouter();
  const { pathname } = router;

  return (
    <nav
      style={navToggle ? { visibility: "hidden" } : { visibility: "visible" }}
      className={styles.navbar_container}
      data-scroll
      data-scroll-sticky
      data-scroll-target="#home"
    >
      {pathname === "/" ? (
        <a href="#home" data-scroll-to rel="noreferrer">
          {/* <h1> GDG IBADAN </h1> */}
          <Image src={favicon.src} height={50} width={50} alt="favicon" />
        </a>
      ) : (
        <Link href="/">
          {/* <h1> GDG IBADAN </h1> */}
          <Image src={favicon.src} height={50} width={50} alt="favicon" />
        </Link>
      )}

      <div className={styles.calendar}>
        <Calendar size={23} />
        <p>03, December 2022</p>
      </div>

      <div className={styles.register}>
        <Link href="/map">
          <Location size={25} variant="Linear" />
        </Link>
        <button>Register</button>
      </div>

      <div className={styles.toggle_icon} onClick={() => setNavToggle(true)}>
        <button>
          <TextalignJustifyright size={30} />
        </button>
      </div>
    </nav>
  );
};

export const MobileNavigation = () => {
  const [clicked, setClicked] = useState(false);

  const navigationState = useContext(NavigationContext);

  const [navToggle, setNavToggle] = navigationState;

  return (
    <div
      className={`${styles.mobile_navbar}  animate__animated  ${
        navToggle ? "animate__fadeInRight" : ""
      }`}
      style={navToggle ? { display: "block" } : { visibility: "hidden" }}
    >
      <div
        onClick={() => {
          setNavToggle(false);
          setClicked(!clicked);
        }}
      >
        <Image
          src={close}
          width={40}
          height={40}
          alt="navigation close"
        ></Image>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            {" "}
            <Link href="#about">About</Link>
          </li>

          <li>
            {" "}
            <Link href="#schedule">Events</Link>
          </li>

          <li>
            {" "}
            <Link href="#organizers">Sponsors</Link>
          </li>

          <li>
            {" "}
            <Link href="#speakers">Speakers</Link>
          </li>

          <li>
            {" "}
            <Link href="#gallery">Gallery</Link>
          </li>

          <li onClick={() => setNavToggle(false)}>
            {" "}
            <Link href="/map">Map</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
