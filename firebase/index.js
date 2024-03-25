// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbWct9disLUmx06_TVQGocX0w1Qg7iTwA",
  authDomain: "instaclone-fe86e.firebaseapp.com",
  projectId: "instaclone-fe86e",
  storageBucket: "instaclone-fe86e.appspot.com",
  messagingSenderId: "32463278210",
  appId: "1:32463278210:web:3f926359f03845785aa49b",
  measurementId: "G-VLG333PQM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc}