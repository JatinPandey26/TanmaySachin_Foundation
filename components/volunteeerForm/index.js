import styles from "./styles.module.scss";
import db from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";

//jukbybbdcknmmssf
export const Volunteer = () => {
  const userCollectionRef = collection(db, "users");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isExist, setIsExist] = useState(false);
  async function joinUsHandler(e) {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_MAIL_API_KEY);
    const querySnapshot = await getDocs(userCollectionRef);

    // check if already existed
    for (let i = 0; i < querySnapshot.docs.length; i++) {
      const doc = querySnapshot.docs[i];
      if (doc.data().email === userEmail) {
        setIsExist(true);
        setUserEmail("");
        setUserName("");
        return;
      }
    }

    
    
    await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({ name: userName, email: userEmail}),
    }).then(await addDoc(collection(db, "users"), {
      name: userName,
      email: userEmail,
    })).catch(() => {
      alert("something has gone wrong")
    })

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
              className="m-[1rem] text-sm p-2 min-w-[60%] bg-white"
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
              className="m-[1rem] text-sm p-2 min-w-[60%]"
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

          {isExist && <p className="text-sm text-[#F01152]"> ** You are already a part of our family.</p>}
        </form>
      </div>
      <div className={styles.imgContainer}>
        <img src="./42.jpg"></img>
      </div>
    </div>
  );
};
