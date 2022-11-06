import styles from "./styles.module.scss";
import db from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";

export const Volunteer = () => {
  const userCollectionRef = collection(db, "users");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  async function joinUsHandler(e) {
    e.preventDefault();

    const querySnapshot = await getDocs(userCollectionRef);

    // check if already existed
    for (let i = 0; i < querySnapshot.docs.length; i++) {
      const doc = querySnapshot.docs[i];
      if (doc.data().email === userEmail) {
        alert("Volunteer already existed");
        return;
      }
    }

    addDoc(collection(db, "users"), {
      name: userName,
      email: userEmail,
    });

    setUserEmail("");
    setUserName("");
  }

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
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>
          <label>
            <input
              className="m-[1rem]"
              type="email"
              name="mail"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <button className={styles.button} onClick={(e) => joinUsHandler(e)}>
            Join Us
          </button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <img src="./42.jpg"></img>
      </div>
    </div>
  );
};
