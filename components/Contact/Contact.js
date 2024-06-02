import React, { forwardRef } from "react";
import styles from "./Contact.module.css";

const Contact = forwardRef((props, ref) => (
  <section ref={ref} id="contact" className={styles.contact}>
    <h2>Contact Us </h2>
    <p>
      We&apos;re here to help you with any questions or inquiries. Reach out to
      us and we&apos;ll respond as soon as possible.
    </p>
    <div className={styles.contactInfo}>
      {/* <h2 className={styles.title}>DATAWAYZ</h2> */}
      <p className={styles.owner}>Inh. Ömer-Faruk Cat</p>
      <address className={styles.address}>
        Sr.-Linolda-Weg 9<br />
        97506 Grafenrheinfeld
      </address>
      <p className={styles.contactDetails}>
        <span className={styles.label}>mobile:</span> +49 170 2203050
        <br />
        <span className={styles.label}>mail:</span>{" "}
        <a href="mailto:omer.cat@datawayz.com" className={styles.link}>
          omer.cat@datawayz.com
        </a>
        <br />
        <span className={styles.label}>web:</span>{" "}
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
  </section>
));

Contact.displayName = "Contact";

export default Contact;
