import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
const IconContainer = ({ img, text }) => {
  return (
    <div className={styles.wrapper}>
      <Link href='/gallery'>
        <div>
          <img src={img}></img>
        </div>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default IconContainer;
