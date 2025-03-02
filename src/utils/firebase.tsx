// Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVTjgk4JPG4iqzAntlbZsEWzdlVe5-d8M",
  authDomain: "netflixgpt-a655b.firebaseapp.com",
  projectId: "netflixgpt-a655b",
  storageBucket: "netflixgpt-a655b.firebasestorage.app",
  messagingSenderId: "871444584431",
  appId: "1:871444584431:web:6347f2bae910dc240dc81a",
  measurementId: "G-77KD6B655M"
}; 

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);