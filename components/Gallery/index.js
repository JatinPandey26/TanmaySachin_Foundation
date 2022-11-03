import React from "react";
import styles from "./styles.module.scss";

const Gallery = () => {
  const images = [
    "9.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "/gp1.jpg",
    "/gp2.jpg",
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
    "/gp14.jpg",
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
