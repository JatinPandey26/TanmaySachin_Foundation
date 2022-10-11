import React from "react";
import styles from "./styles.module.scss";
const Mission = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mission}>
        <h3 className="font-bold">Our Mission</h3>
        <br />

        <p>
          Work for underprivileged people and animals by providing them meals,
          medical treatment and proper clothes .
        </p>
      </div>
      <div className={styles.vision}>
        <h3 className="font-bold">Our Vision</h3>
        <br />

        <p>
          The vision of the NGO is to empower poor people by improving their
          lives and livelihood .
        </p>
      </div>
    </div>
  );
};

export default Mission;
