import React from "react";
import styles from "./styles.module.scss";

const ProjectCard = ({
  title = "Serving the Masses",
  desc = "Providing access to state-of-the-art healthcare, education, employment, and technological advancements to people across the country.",
}) => {
  return (
    <div className={styles.card}>
      <img src="/trypic.jpg" />
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;