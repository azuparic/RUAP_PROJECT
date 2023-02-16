// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALMvjGsQUN7YqhJfEJoEe-vBiLpfZO74s",
  authDomain: "ruap-f1919.firebaseapp.com",
  projectId: "ruap-f1919",
  storageBucket: "ruap-f1919.appspot.com",
  messagingSenderId: "297684834925",
  appId: "1:297684834925:web:69ac3c4956602c50d13d64",
  measurementId: "G-D4KEW27W8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);