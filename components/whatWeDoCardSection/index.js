import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "../projectcards";
export const CardSection = () => {

    const info = [
    {title : "Title1" , desc : "Description1"},
    {title : "Title2" , desc : "Description2"},
    {title : "Title3" , desc : "Description3"},
   
    ]

  return (
    
    <div className={styles.cardsContainer}>
        <h2 className={styles.heading}>What We Do</h2>
      <div className={styles.cardWrapper}>
        
        {
            info.map((ele,index) => {
                return <ProjectCard key={index} title = {ele.title} desc={ele.desc}  />
            })
        }
        
      </div>
    </div>
  );
};
