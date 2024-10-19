// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBryyBELE_oKcCyzAyOiAUy4a7XcaRimeU",
  authDomain: "react-firebase-d78f0.firebaseapp.com",
  projectId: "react-firebase-d78f0",
  storageBucket: "react-firebase-d78f0.appspot.com",
  messagingSenderId: "353797997660",
  appId: "1:353797997660:web:05bde29019f7d738a6d299",
  measurementId: "G-3SW55QS08Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
