import styles from "./styles.module.scss";
import React from "react";

export const Volunteer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h1>Let's Create Something Great Together!</h1>
        <form className={styles.form}>
          <label>
            <input
              className="m-[1rem]"
              type="text"
              name="name"
              placeholder="Full Name"
            />
          </label>
          <label>
            <input
              className="m-[1rem]"
              type="email"
              name="mail"
              placeholder="Email"
            />
          </label>
          <button className={styles.button}>Join Us</button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <img src="./42.jpg"></img>
      </div>
    </div>
  );
};
