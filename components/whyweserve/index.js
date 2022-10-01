import React from "react";
import styles from "./styles.module.scss";
const Whyweserve = () => {
  return (
    <div
      className={styles.wrapper}
      
    >
      <div className={styles.heading}>
        <h3 className="font-bold">Why do we serve Poors & Animals?</h3>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            According to FAO 2019 Reports, about 14.5% of the Indian population
            falls under the under-nourished category and around 8.8 lakhs
            children under five years of age lost their life due to starvation
            in 2018.
          </p>
          <br />
          <p>
            More than 20 crores Indians sleep on empty stomach every day and
            7000 Indians die per day from hunger.
          </p>
          <p>
            Due to covid, many people drowned in personal loans for medical
            emergencies regarding healthcare and are unable to afford basic
            necessities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyweserve;
