import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyD-0caKFjkkRoL1eV3PtQmeBtnXCQcGSG0",
  authDomain: "tanmaysachin-e807a.firebaseapp.com",
  projectId: "tanmaysachin-e807a",
  storageBucket: "tanmaysachin-e807a.appspot.com",
  messagingSenderId: "944208276193",
  appId: "1:944208276193:web:7bce154acd717e9116e5a0",
};

export const app = initializeApp(config,"volunteersData");
const db = getFirestore(app);

export default db;
