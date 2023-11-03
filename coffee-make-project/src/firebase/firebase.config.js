// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlS-TK1bJ6PkVYz69ghV9TChGcXYtmunY",
  authDomain: "coffee-auth-a2ebf.firebaseapp.com",
  projectId: "coffee-auth-a2ebf",
  storageBucket: "coffee-auth-a2ebf.appspot.com",
  messagingSenderId: "63922256049",
  appId: "1:63922256049:web:f5266b363fd74197f0ca90",
  measurementId: "G-05EVT22JQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;