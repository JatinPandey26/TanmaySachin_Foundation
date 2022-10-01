import React from "react";
import styles from "./styles.module.scss";
const Story = () => {
  return (
    <div className={styles.wrapper} style = {{backgroundImage : `url(./trypic.jpg)`}}>
      <div className={styles.heading}>
        <h3 className="font-bold">Our Story</h3>
      </div>
      <div className={styles.content}>
        <div>
          <p>
            The organization started during the first lockdown and has been
            working tirelessly to serve more and more people and animals across
            different cities.
          </p>
          <br />
          <p>
            <span>Sachin Karanje</span>, the founder, along with co-founder <span>Tanmay Keny</span> has
            been at the forefront of the different initiatives and programs.
          </p>
          <p>
            During the lockdown, when daily workers, labourers, and beggars were
            struggling to afford basic necessities, the TS foundation managed to
            feed more than 1 lakh people and provide ration kits and medicines
            on regular basis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
