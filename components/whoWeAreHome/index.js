import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const WhoWeAreBand = () => {
  return (
    <div className={styles.whoweareWrap}>
      <div className={styles.container}>
        <h1>Who We Are</h1>

        <p>
          {" "}
          TanmaySachin Foundation is a Not-for-Profit Organization working for
          underprivileged people and animals by providing them meals, medical
          treatment and proper clothes. It is{" "}
          <b>
            <i>incorporated under the Companies Act, 2013</i>
          </b>
          . The organization started it’s working in 2020 during thr first
          lockdown with the vision{" "}
          <b>
            <i>
              to empower poor people by improving their lives and livelihood
            </i>
          </b>
          .{" "}
        </p>
        <button className="font-extralight">
          <Link href={"/whoweare"}>Know More</Link>
        </button>
      </div>
      <img src="/6660.jpg" className={styles.img1}></img>
      <div className={styles.charityPic}>
        <img src="/6660.jpg" className="object-cover h-full"></img>
      </div>
    </div>
  );
};

export default WhoWeAreBand;
