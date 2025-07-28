import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVs8_71IldY0_bUr0v6dYOupi8B6WuTSk",
  authDomain: "cordersmonkeys.firebaseapp.com",
  projectId: "cordersmonkeys",
  storageBucket: "cordersmonkeys.firebasestorage.app",
  messagingSenderId: "545861706942",
  appId: "1:545861706942:web:ea45ccdb0a22810b00aaef"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);