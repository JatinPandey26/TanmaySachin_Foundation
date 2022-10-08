import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const SendDonationBand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1>Send Us Your Donation</h1>
        <button>
          <Link href={"/donate"}>Donate Now</Link>
        </button>
      </div>
      <div className={styles.rightContainer}>
        <div className="p-3 m-2 ">
          <p>
            Every donation will lead to a great future & Inspire many more
            people.No matter what you serve, what you donate what you give,each
            & every donation will make great impact & spread happiness. Donate
            and get{" "}
            <span className="font-semibold text-[#F01152] italic">
              80g TAX BENEFITS
            </span>
          </p>
        </div>
        <div className=" p-3 m-2">
          <p>
            Every donation will lead to a great future & Inspire many more
            people.No matter what you serve, what you donate what you give,each
            & every donation will make great impact & spread happiness. Donate
            and get{" "}
            <span className="font-semibold text-[#F01152] italic">
              80g TAX BENEFITS
            </span>
          </p>
        </div>
        <div className=" p-3 m-2">
          <p>
            Every donation will lead to a great future & Inspire many more
            people.No matter what you serve, what you donate what you give,each
            & every donation will make great impact & spread happiness. Donate
            and get{" "}
            <span className="font-semibold text-[#F01152] italic">
              80g TAX BENEFITS
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SendDonationBand;
