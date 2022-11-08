import React from "react";
import styles from "./styles.module.scss";

const Gallery = () => {
  const images = [
    "4.jpg",
    "6.jpg",
    "1.jpg",
    "3.jpg",
    "11.jpg",
    "8.jpg",

    "15.jpg",
    "16.jpg",

    "18.jpg",
    "40.jpg",
    "/gp1.jpg",
    "/gp2.jpg",
    "2.jpg",
    "/gp3.jpg",
    "/gp4.jpg",
    "/gp5.jpg",
    "/gp6.jpg",
    "/gp7.jpg",
    "/gp8.jpg",
    "/gp9.jpg",
    "/gp10.jpg",
    "/gp11.jpg",
    "/gp12.jpg",
    "/gp13.jpg",
  ];

  return (
    <div className={styles.wrapper}>
      {images.map((image, index) => {
        return <img key={index} src={image}></img>;
      })}
    </div>
  );
};

export default Gallery;
