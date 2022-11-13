import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export const DonateBand = () => {
  return (
    <div className={styles.donateBandWrap}>
      <div >
        <img src="/images.jpg" ></img>
      </div>
      <div className={styles.donateText}>
        <div className="text-[2.5rem] text-white w-[60% ] ">
          Make a difference in lives <br />
          of others!
        </div>
        <div className={styles.buttons}>
          <button className="font-extralight">
            <Link href={"https://rzp.io/l/cLPVuqwKtx"}>
              Help Us By Donating
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
