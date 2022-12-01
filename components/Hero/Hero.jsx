import Image from "next/image";
import Styles from "./Hero.module.scss";
import hero from "../../public/hero-icon.svg";

const Hero = () => {
  return (
    <div className={Styles.container} id="home">
      <p >Welcome to</p>
      <section>
        <h1 >GDG IBADAN ANNUAL FESTIVAL 2022</h1>
        <Image src="/hero-icon.svg" alt="" width="100" height="100" />
      </section>

    </div>
  )
}

export default Hero;
