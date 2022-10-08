import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export const DonateBand = () => {
  return (
    <div className={styles.donateBandWrap}>
      <div className="text-3xl text-white w-[40vw] ">
        Let's make a difference in lives of others
      </div>
      <div className={styles.buttons}>
        <button className="font-extralight">
          <Link href={"/donate"}>Help Us by Donating</Link>
        </button>
      </div>
    </div>
  );
};
