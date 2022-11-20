import Image from "next/image";
import Styles from "./Hero.module.scss";
import hero from "../../public/hero-icon.svg";

const Hero = () => {
  return (
    <div className={Styles.container}>
      <p>Welcome to</p>
      <section>
        <h1>GDG IBADAN ANNUAL FESTIVAL 2022</h1>
        <Image src={hero} alt="hero's icon" />
      </section>
    </div>
  );
};

export default Hero;
