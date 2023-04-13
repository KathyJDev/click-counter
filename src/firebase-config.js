// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuSzky8SAI-LvLScdAmvo9LM96BGXlAmw",
    authDomain: "sesl-lvl1.firebaseapp.com",
    projectId: "sesl-lvl1",
    storageBucket: "sesl-lvl1.appspot.com",
    messagingSenderId: "798929474264",
    appId: "1:798929474264:web:c3dc082f27359ba14efdad",
    measurementId: "G-0T4H5T90NH"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)