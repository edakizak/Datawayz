import React, { useState } from "react";
import styles from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <p>
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
        <a href="/privacy-policy" className={styles.link}>
          Learn more
        </a>
        .
      </p>
      <button onClick={handleAccept} className={styles.button}>
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
