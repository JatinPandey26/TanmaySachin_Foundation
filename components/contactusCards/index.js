import React from "react";
import styles from "./styles.module.scss";
const ContactUsCards = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src="/location.png"></img>
        <h2>Reach Us</h2>
        <div>
          <p>
            C/O Preeti Sumant Karanje, A-Juve, P-Dalepal-Rajapur District-
            Ratnagiri, Juve, Ratnagiri Maharashtra - 416702, India
          </p>
        </div>
      </div>
      <div>
        <img src="/mail.png"></img>
        <h2>Mail Us</h2>
        <div>
          {" "}
          <p>sachin@tanmaysachinfoundation.com</p>
        </div>
      </div>
      <div>
        <img src="/phone.png"></img>
        <h2>Call Us</h2>
        <div>
          <p>+91-8108070899</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCards;
