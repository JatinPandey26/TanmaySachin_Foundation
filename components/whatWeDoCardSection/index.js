import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "../projectcards";
import Link from "next/link";

export const CardSection = () => {
  return (
    <div className={styles.cardsContainer}>
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </head>
      <h2 className={styles.heading}>Our Campaigns</h2>
      <Link href={"/whatwedo"}>
        <h4 className="hover:underline">
          View All <ion-icon name="chevron-forward-outline"></ion-icon>
        </h4>
      </Link>
      <div className={styles.cardWrapper}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
