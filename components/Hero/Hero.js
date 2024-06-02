import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.logo}>
        <Image
          src="/images/Datawayz-logo2.png"
          alt="Datawayz Logo"
          width={380}
          height={80}
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Revolutionize Your Business with Data-Driven Solutions
        </h1>

        {/* <button className={styles.exploreMore}>Explore more</button> */}
      </div>
    </div>
    <div className={styles.heroImage}>
      <Image
        src="/images/image1.png"
        alt="Hero Image"
        width={600}
        height={400}
      />
    </div>
  </section>
);

export default Hero;
