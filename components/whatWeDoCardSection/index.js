import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "../projectcards";
import Link from "next/link";

export const CardSection = () => {
  const info = [
    { title: "Title1", desc: "Description1" },
    { title: "Title2", desc: "Description2 " },
    { title: "Title3", desc: "Description3" },
    { title: "Title4", desc: "Description4" },
  ];

  return (
    <div className={styles.cardsContainer}>
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </head>
      <h2 className={styles.heading}>What We Do</h2>
      <Link href={"/whatwedo"}>
        <h4 className="hover:underline">
          View All <ion-icon name="chevron-forward-outline"></ion-icon>
        </h4>
      </Link>
      <div className={styles.cardWrapper}>
        {info.map((ele, index) => {
          return <ProjectCard key={index} title={ele.title} desc={ele.desc} />;
        })}
      </div>
    </div>
  );
};
