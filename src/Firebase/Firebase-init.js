// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdy_XyjsaL2VTdlDeDahJ-dF-U6rjxRk",
  authDomain: "yemlik.firebaseapp.com",
  projectId: "yemlik",
  storageBucket: "yemlik.appspot.com",
  messagingSenderId: "180635574695",
  appId: "1:180635574695:web:1371c3ca3d3438f886d682",
  measurementId: "G-GGVCE3HTKB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
