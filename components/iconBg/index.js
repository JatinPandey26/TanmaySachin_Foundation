import React from "react";
import styles from "./styles.module.scss";
// import IconContainer from "../iconContainer";
import dynamic from "next/dynamic";
const IconContainer = dynamic(() => import("../iconContainer"), {
  ssr: false,
});
const IconBg = () => {
  const data = [
    { img: "/fooddonation.png", text: "Food Donation" },
    { img: "/medicalaid.png", text: "Medical Aid" },
    { img: "/animalcare.png", text: "Animal Care" },
    { img: "clothdonation.png", text: "Cloth Donation" },
  ];
  return (
    <div className={styles.mainWrapper}>
    <div className={styles.wrapper}>
      <div>
        {data.map((ele, index) => {
          return <IconContainer key={index} img={ele.img} text={ele.text} />;
        })}
      </div>
    </div>
    </div>
  );
};

export default IconBg;
