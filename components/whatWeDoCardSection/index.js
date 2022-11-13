import React from "react";
import styles from "./styles.module.scss";
// import { ProjectCard } from "../projectcards";
import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import("../projectcards"), {
  ssr: false,
});
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
        <ProjectCard
          title="Love Lunch Mission"
          desc="By enrolling in our love lunch mission,each 
          & every needy can be served properly
          with good meal every day.
          "
          image="/foodddd.jpg"
        />

        <ProjectCard
          title="Animals Paradise Project"
          desc="Since lockdown 2020 we have been feeding stray dogs & cats. Till now we have fed almost 5000 plus stray dogs & cats."
          image="/animalsss.png"
        />
        <ProjectCard
          title="Miracle School Project"
          desc="India has the largest population of illiterate adults in the world. Nowadays we also started miracle school project by providing educational facilities to the poor children & by providing proper stationery items to them."
          image="/godsproject.jpg"
        />
      </div>
    </div>
  );
};
