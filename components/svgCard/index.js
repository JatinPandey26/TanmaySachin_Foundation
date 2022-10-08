import React from "react";
import styles from "./styles.module.scss";
const SvgCard = ({ title, img, desc }) => {
  return (
    <div className={styles.wrapper}>
      <h4>{title}</h4>
      <div>
        {" "}
        <img src={img}></img>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default SvgCard;
