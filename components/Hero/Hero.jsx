import Styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={Styles.container} id="top">
            <p>Welcome to</p>
            <section>
                <h1>GDG IBADAN ANNUAL FESTIVAL 2022</h1>
                <img src="/hero-icon.svg" />
            </section>

        </div>
    )
}

export default Hero;
