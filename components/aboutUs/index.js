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
          <b>
            <i>incorporated under the Companies Act, 2013</i>
          </b>
          .
        </p>
        <br />

        <p>
          <b>
            <i>Sachin Karanje</i>
          </b>
          , the founder, along with co-founder{" "}
          <b>
            <i>Tanmay Keny</i>
          </b>{" "}
          has been at the forefront of the different initiatives and programs.
        </p>
        <br />
        <p>
          The organization started during the first lockdown and has been
          working tirelessly to serve more and more people and animals across
          different cities. During the lockdown, when daily workers, labourers,
          and beggars were struggling to afford basic necessities, the TS
          foundation managed to feed more than 1 lakh people and provide ration
          kits and medicines on regular basis. In Lockdown March 2020 we managed
          to distribute & serve over 8600 meals & ration kits to the needy. We
          took care of several families residing in slums in Mumbai and also
          provided medicines for suffering people & animals.
        </p>
        <br />
      </div>
      <div className={styles.Image}>
        <img src="gp11.jpg" className="w-[100%] h-[100%] object-cover rounded-2xl"></img>
      </div>
    </div>
  );
};
