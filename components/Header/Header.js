// import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = ({ scrollToSection }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Image
        src="/images/Datawayz-logo1.png"
        alt="Datawayz Logo"
        width={50}
        height={50}
      />
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>
          <a
            href="#ourExpertise"
            onClick={(e) => scrollToSection(e, "ourExpertise")}
          >
            Our Expertise
          </a>
        </li>
        <li>
          <a
            href="#whyChooseUs"
            onClick={(e) => scrollToSection(e, "whyChooseUs")}
          >
            Why Choose Us?
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
    {/* <button className={styles.exploreMore}>Explore more</button> */}
  </header>
);

export default Header;
