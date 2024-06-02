import React, { forwardRef } from "react";
import styles from "./Contact.module.css";

const Contact = forwardRef((props, ref) => (
  <section ref={ref} id="contact" className={styles.contact}>
    <h2>Contact Us</h2>
    <p>
      We&apos;re here to help you with any questions or inquiries. Reach out to
      us and we&apos;ll respond as soon as possible.
    </p>
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Your Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>
        Send Message
      </button>
    </form>
    <div className={styles.contactInfo}>
      <p>
        <strong>Address:</strong> 123 Data Street, Tech City, TX 75001
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <p>
        <strong>Email:</strong> contact@datawayz.com
      </p>
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
    </div>
  </section>
));

export default Contact;
