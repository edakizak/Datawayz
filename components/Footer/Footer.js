import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/images/Datawayz-logo1.png"
          alt="Datawayz Logo"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.links}>
        <div className={styles.linkGroup}>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h4>Product</h4>
          <ul>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className={styles.linkGroup}>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/imprint">Impressum</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.socialMedia}>
      <a
        href="https://twitter.com/datawayz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://facebook.com/datawayz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href="https://instagram.com/datawayz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://linkedin.com/company/datawayz"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
