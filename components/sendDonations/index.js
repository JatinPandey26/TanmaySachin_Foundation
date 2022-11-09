import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const SendDonationBand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1>Send Us Your Donation</h1>
        <button>
          <Link href={"https://rzp.io/l/cLPVuqwKtx"}>Donate Now</Link>
        </button>
      </div>
      <div className={styles.rightContainer}>
        <div className="p-1  ">
          <p>
            The amount of your contribution can be little but the change you
            bring will be monumental.
          </p>
        </div>
        <div className=" p-1 ">
          <p>
            Being approved under Section 80G of the Income-tax Act, your
            donations made to TanmaySachin Foundation are tax exempted.
          </p>
        </div>
        <div className=" p-1 ">
          <p>
            When you donate money to TanmaySachin Foundation, you will know for
            a fact that the your donations are used to help those in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SendDonationBand;
