import React from "react";
import styles from "./styles.module.scss";
const IconContainer = ({ img, text }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={img}></img>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default IconContainer;
