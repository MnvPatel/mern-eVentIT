// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-eventit.firebaseapp.com",
  projectId: "mern-eventit",
  storageBucket: "mern-eventit.appspot.com",
  messagingSenderId: "1016053576272",
  appId: "1:1016053576272:web:ee0677fb20e34f228bd755",
  measurementId: "G-6DRYM22SP1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);