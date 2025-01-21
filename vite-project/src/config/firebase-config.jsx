// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyDud8JTOfcfuh3P9OQEBj_5u4qjG-5Ulto",
  authDomain: "fir-course-2b11a.firebaseapp.com",
  projectId: "fir-course-2b11a",
  storageBucket: "fir-course-2b11a.firebasestorage.app",
  messagingSenderId: "561262851422",
  appId: "1:561262851422:web:7a9212f25bbd13db0d0bcf",
  measurementId: "G-HDN9PWQKED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();