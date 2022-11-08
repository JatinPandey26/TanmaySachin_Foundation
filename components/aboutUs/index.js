import React from "react";
import styles from "./styles.module.scss";
export const AboutTSF = () => {
  return (
    <div className={styles.aboutTSFWrap}>
      {" "}
      <div className={styles.aboutTSF}>
        <p>
          TanmaySachin Foundation is an independent Not-for-Profit Organization
          working for underprivileged people and animals by providing them
          meals, medical treatment and proper clothes. It is{" "}
          <b>incorporated under the Companies Act, 2013</b>.
        </p>
        <br />

        <p>
          <b>Sachin Karanje</b>, the founder, along with co-founder{" "}
          <b>Tanmay Keny</b> has been at the forefront of the different
          initiatives and programs.
        </p>
        <br />
        <p>
          Tanmay Sachin Foundation is an initiative that has been feeding the
          poor and unemployed who are struggling to feed themselves during the
          lockdown. We managed to distribute over 8500 meals to the needy since
          the first lockdown hit through cooked meals and ration kits. Since the
          first lockdown, we have been taking care of several families in the
          largest & oldest waste dumping ground and slum in Mumbai - Govandi
          along with several other areas of Maharashtra like Machhimar Nagar in
          South Mumbai, Dharavi, Nallasopara, Mulund, and Ratnagiri. In these
          regions, migrants, daily wage workers, rickshaw drivers, rag pickers,
          etc. reside who were unemployed and struggling to afford basic food.
        </p>
        <br />
      </div>
      <div className={styles.Image}>
        <img
          src="aboutus.jpg"
          className="w-[100%] h-[100%] object-cover rounded-2xl"
        ></img>
      </div>
    </div>
  );
};
