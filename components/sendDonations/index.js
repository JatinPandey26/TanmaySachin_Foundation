import React from "react";
import styles from "./styles.module.scss";

const SendDonationBand = () => {
  return (
    <div className={styles.container}>
      <div>
      <div></div>
      <div>
       
        <h1>Send Us Your Donation</h1>
        <p>
          Every donation will lead to a great future & Inspire many more
          people.No matter what you serve, what you donate what you give,each &
          every donation will make great impact & spread happiness. Donate and
          get{" "}
          <span className="font-semibold text-[#F01152] italic">
            80g TAX BENEFITS
          </span>
        </p>
      </div>
        </div>

      <button>Donate Now</button>
    </div>
  );
};

export default SendDonationBand;
