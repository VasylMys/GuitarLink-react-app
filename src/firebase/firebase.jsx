// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5K1nYvIlgc1BMe_LjLD7EGVzI3r1D2FM",
  authDomain: "guitarlink-66874.firebaseapp.com",
  projectId: "guitarlink-66874",
  storageBucket: "guitarlink-66874.appspot.com",
  messagingSenderId: "248988830543",
  appId: "1:248988830543:web:946191146db1d050f5133a",
  measurementId: "G-N0W9JCW5TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);