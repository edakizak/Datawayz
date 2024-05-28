import React from "react";
import styles from "./Expertise.module.css";

const Expertise = () => (
  <section className={styles.expertise}>
    <h2>Our Expertise</h2>
    <p>
      Empowering your business with tailored solutions to meet your unique
      challenges. From data analysis to software engineering, we provide a
      comprehensive suite of services designed to optimize your operations.
    </p>
    <div className={styles.cards}>
      <div className={`${styles.card} ${styles.active}`}>
        <h3>Operation</h3>
        <p>
          Streamline your business processes with our innovative operational
          strategies.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Optimization</h3>
        <p>
          Maximize efficiency and performance through our advanced optimization
          techniques.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Data</h3>
        <p>
          Leverage your data for actionable insights and smarter
          decision-making.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Engineering</h3>
        <p>Implement robust engineering solutions to support your growth.</p>
      </div>
      <div className={styles.card}>
        <h3>Software</h3>
        <p>Custom software development tailored to your business needs.</p>
      </div>
      <div className={styles.card}>
        <h3>Assistance</h3>
        <p>Comprehensive support to ensure your success.</p>
      </div>
    </div>
  </section>
);

export default Expertise;
