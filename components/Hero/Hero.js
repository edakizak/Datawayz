import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.logo}>
        <Image src="/images/Datawayz-logo2.png" alt="Datawayz Logo" />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Revolutionize Your Business with Data-Driven Solutions
        </h1>
        {/* <p className={styles.subtitle}>
          Unlock the full potential of your business with our cutting-edge data
          analytics and optimization services. Drive efficiency, enhance
          decision-making, and achieve unprecedented growth.
        </p> */}
        <button className={styles.exploreMore}>Explore more</button>
      </div>
    </div>
    <div className={styles.heroImage}>
      <img src="/images/image1.png" alt="Hero Image" />
    </div>
  </section>
);

export default Hero;
