import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD88UL73SFdMtbodCrYYdBGj0wzK-yBaZM",
  authDomain: "first-firebase-59f08.firebaseapp.com",
  projectId: "first-firebase-59f08",
  storageBucket: "first-firebase-59f08.firebasestorage.app",
  messagingSenderId: "564095232170",
  appId: "1:564095232170:web:9dfe4053284a74668c88d3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();