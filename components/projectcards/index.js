import React from "react";
import styles from "./styles.module.scss";



const ProjectCard = (prop) => { 
  return (
    <div className={styles.card}>
      <img src ={prop.image} />
      <div>
        <h4>{prop.title}</h4>
        <p>{prop.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;