import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVADdVb_2MRuKsGwluoyfZZ2nYttPYMb8",
  authDomain: "react-firebase-task-8b3fe.firebaseapp.com",
  projectId: "react-firebase-task-8b3fe",
  storageBucket: "react-firebase-task-8b3fe.appspot.com",
  messagingSenderId: "1031389152331",
  appId: "1:1031389152331:web:ecb6ddda3f5505092939ce",
  measurementId: "G-LKQEP6TQGP",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
