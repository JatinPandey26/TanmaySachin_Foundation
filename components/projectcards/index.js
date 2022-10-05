import React from "react";
import styles from "./styles.module.scss";

export const ProjectCard = ({title = 'title' , desc = 'lafagjgahah'}) => {
  return (
    <div className={styles.card}>
      <br />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};
