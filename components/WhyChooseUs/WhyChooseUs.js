import React, { forwardRef } from "react";
import Image from "next/image";
import styles from "./Whychooseus.module.css";

const WhyChooseUs = forwardRef((props, ref) => (
  <section ref={ref} id="whyChooseUs" className={styles.whyChooseUs}>
    <h2>Why Choose Us?</h2>
    <p>
      Transform your business with our proven data-driven strategies and
      optimization solutions. Here&apos;s why we&apos;re the best choice for
      your business:
    </p>
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/image2.png"
          alt="Why Choose Us Image"
          width={500}
          height={400}
        />
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          <div className={styles.number}>1</div>
          <div>
            <h3>Tailored Solutions</h3>
            <p>We offer customized services to meet your specific needs.</p>
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.number}>2</div>
          <div>
            <h3>Expert Team</h3>
            <p>
              Our team of experts is dedicated to providing you with the best
              solutions.
            </p>
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.number}>3</div>
          <div>
            <h3>Proven Results</h3>
            <p>
              Our strategies deliver measurable improvements and tangible
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

WhyChooseUs.displayName = "WhyChooseUs";

export default WhyChooseUs;
