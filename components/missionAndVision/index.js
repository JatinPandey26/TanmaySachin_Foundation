import React from "react";
import styles from "./styles.module.scss";
const Mission = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h3 className="font-bold">Our Mission & Vision</h3>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            TanmaySachin Foundation is an independent Not-for-Profit
            Organization working for underprivileged people and animals by
            providing them meals, medical treatment and proper clothes. It is <b>
              <i>incorporated under the Companies Act, 2013</i>
            </b>
            .
          </p>
          <br />
          <p>
            The vision of the NGO is{" "}
            <b>
              <i>
                to empower poor people by improving their lives and livelihood
              </i>
            </b>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
