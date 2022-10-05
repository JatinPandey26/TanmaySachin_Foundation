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
      desc: "Proper vaccines & medicines  to underprivileged people & animals ",
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
          <h4>FOOD FOR ALL</h4>
          <p>
            Thanks to a grant from the Illinois Criminal Justice Information
            Authority (ICJIA), we are able to provide free legal consultation
            and representation in addition to free mental health services for
            survivors of domestic abuse or sexual assault. If you have
            experienced the trauma of domestic abuse, sexual assault or other
            violent crimes, we are here to support you with the care and
            resources you need to find healing and move forward. You might also
            be eligible for certain immigration benefits.
          </p>
        </div>
        <div className={styles.rightBox}>
          <img src="/6660.jpg"></img>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.leftPicDiv}>
        <div className={styles.rightBox}>
          <img src="/6660.jpg"></img>
        </div>
        <div className={styles.leftBox}>
          <h4>FOOD FOR ALL</h4>

          <p>
            Thanks to a grant from the Illinois Criminal Justice Information
            Authority (ICJIA), we are able to provide free legal consultation
            and representation in addition to free mental health services for
            survivors of domestic abuse or sexual assault. If you have
            experienced the trauma of domestic abuse, sexual assault or other
            violent crimes, we are here to support you with the care and
            resources you need to find healing and move forward. You might also
            be eligible for certain immigration benefits.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.rightPicDiv}>
        <div className={styles.leftBox}>
          <h4>FOOD FOR ALL</h4>
          <p>
            Thanks to a grant from the Illinois Criminal Justice Information
            Authority (ICJIA), we are able to provide free legal consultation
            and representation in addition to free mental health services for
            survivors of domestic abuse or sexual assault. If you have
            experienced the trauma of domestic abuse, sexual assault or other
            violent crimes, we are here to support you with the care and
            resources you need to find healing and move forward. You might also
            be eligible for certain immigration benefits.
          </p>
        </div>
        <div className={styles.rightBox}>
          <img src="/6660.jpg"></img>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.leftPicDiv}>
        <div className={styles.rightBox}>
          <img src="/6660.jpg"></img>
        </div>
        <div className={styles.leftBox}>
          <h4>FOOD FOR ALL</h4>

          <p>
            Thanks to a grant from the Illinois Criminal Justice Information
            Authority (ICJIA), we are able to provide free legal consultation
            and representation in addition to free mental health services for
            survivors of domestic abuse or sexual assault. If you have
            experienced the trauma of domestic abuse, sexual assault or other
            violent crimes, we are here to support you with the care and
            resources you need to find healing and move forward. You might also
            be eligible for certain immigration benefits.
          </p>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
