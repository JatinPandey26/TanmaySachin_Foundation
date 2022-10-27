import React from "react";
import Navbar from "../../components/navbar";
import RegBanner from "../../components/reginfobanner";
import ContactUsCards from "../../components/contactusCards";
import Footer from "../../components/footer";
import styles from "./styles.module.scss";
import SvgCard from "../../components/svgCard";
const WhatWeDo = () => {
  const info = [
    {
      title: "Food Charity",
      img: "/food.png",
      desc: "Meals to needy people on daily basis.",
    },
    {
      title: "Medcial Help",
      img: "/medical.png",
      desc: "Proper vaccines and medicines  to underprivileged people and animals ",
    },
    {
      title: "Clothes Donation",
      img: "/clothes.png",
      desc: "Clothes and blankets to poor people",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <RegBanner />
      <h1 className={styles.heading}>What We Do</h1>
      <h3>
        <i>We Spread Happiness By</i>
      </h3>
      <div className={styles.svgCardContainer}>
        {info.map((ele, index) => {
          return (
            <SvgCard
              key={index}
              title={ele.title}
              img={ele.img}
              desc={ele.desc}
            />
          );
        })}
      </div>
      <h3>
        <i>Our Projects</i>
      </h3>

      <div className={styles.rightPicDiv}>
        <div className={styles.leftBox}>
          <h4> {"God's"} Meal Project</h4>
          <p>
            Around 4500 children die every day due to hunger and
            malnutrition.According to a source Newspaper, out of 117 countries
            India ranked 104 on the global hunger index. 50% of the Indian
            population sleeps hungry every night. This {"day's"} India is loud and
            clear talks that about the issue of food crisis. Almost 3 lac deaths
            every year are caused by hunger, It is a serious issue nowadays.
          </p>
        </div>
        <div className={styles.rightBox}>
          <img src="/gp2.jpg"></img>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.leftPicDiv}>
        <div className={styles.rightBox}>
          <img src="/foodddd.jpg"></img>
        </div>
        <div className={styles.leftBox}>
          <h4>Love Lunch Mission</h4>

          <p>
            By enrolling in our love lunch mission,each & every needy can be
            served properly with good meal every day. We also provide good
            medical facility & medical Aid. No matter what you serve, what you
            donate what you give,each & every donation will make & a creative
            impact & spread happiness. Every donation will lead to a great
            future & Inspire many more people. It's a good investment as your
            contribution will fund your medical emergencies & will be a great
            mission ahead.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.rightPicDiv}>
        <div className={styles.leftBox}>
          <h4>Animal Paradise Project</h4>
          <p>
            Since lockdown 2020 we have been feeding stray dogs & cats. Till now
            we have fed almost 5000 plus stray dogs & cats.During lockdown 2020
            Around 200 stray dogs have died in Mumbai & Navi Mumbai due to
            insufficient food & nutrition. As per the information the lockdown's
            worst effect has been on animals as they did not get enough food.We
            also provide animals with proper medicines & vaccines for a
            veterinary hospital.
          </p>
        </div>
        <div className={styles.rightBox}>
          <img src="/animalsss.png"></img>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.leftPicDiv}>
        <div className={styles.rightBox}>
          <img src="/godsproject.jpg"></img>
        </div>
        <div className={styles.leftBox}>
          <h4>Miracle School Project</h4>

          <p>
            India has the largest population of illiterate adults in the world.
            Nowadays we also started miracle school project by providing
            educational facilities to the poor children & by providing proper
            stationery items to them.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
