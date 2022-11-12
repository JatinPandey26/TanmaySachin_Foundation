import React from "react";
import styles from "./styles.module.scss";

const Whyweserve = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className="font-bold mb-3 text-[2rem] ">Why do we serve Poors & Animals?</h3>
        <p>
          According to FAO 2019 Reports, about 14.5% of the Indian population
          falls under the under-nourished category and around 8.8 lakhs children
          under five years of age lost their life due to starvation in 2018.
          More than 20 crores Indians sleep on empty stomach every day and 7000
          Indians die per day from hunger.The situation of hunger in India has
          been made worse by the onset of the COVID-19 pandemic.
        </p>
        <br />
        <p>
          In Slum places, many migrants, daily workers, labours, beggars reside
          & some of them don’t even have shelter they even struggle to afford
          basic food. Due to covid, many people drowned in personal loans for
          medical emergencies regarding healthcare and are unable to afford
          basic necessities.
        </p>
        <br />
        <p>
          With the country battling widespread hunger, a staggering 14% of
          India’s population is undernourished. Currently standing in the 94th
          position among the 107 countries, our country has a GHI score of 27.2,
          indicating acute hunger.
        </p>
        <br />
      </div>
      <div className={styles.Image}>
        <img
          src="gp12.jpg"
          className="w-[100%] h-[100%] object-cover rounded-2xl"
        ></img>
      </div>
    </div>
  );
};

export default Whyweserve;
