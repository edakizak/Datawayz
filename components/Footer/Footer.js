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
      <div className={styles.companyInfo}>
        <h2 className={styles.title}>DATAWAYZ</h2>
        <p>Inh. Ömer-Faruk Cat</p>
        <p>Sr.-Linolda-Weg 9, 97506 Grafenrheinfeld</p>
        <p>mobile: +49 170 2203050</p>
        <p>
          mail:{" "}
          <a href="mailto:omer.cat@datawayz.com" className={styles.link}>
            omer.cat@datawayz.com
          </a>
        </p>
        <p>
          web:{" "}
          <a
            href="https://www.datawayz.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            www.datawayz.com
          </a>
        </p>
      </div>
      <div className={styles.links}>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#ourExpertise" className={styles.link}>
              Our Expertise
            </a>
          </li>
          <li>
            <a href="#whyChooseUs" className={styles.link}>
              Why Choose Us?
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.legal}>
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-conditions" className={styles.link}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/impressum" className={styles.link}>
              Impressum
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2024 DATAWAYZ. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
