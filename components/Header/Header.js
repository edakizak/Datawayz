import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Image src="/images/Datawayz-logo1.png" alt="Datawayz Logo" />
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/demos">Demos</Link>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <button className={styles.exploreMore}>Explore more</button>
  </header>
);

export default Header;
