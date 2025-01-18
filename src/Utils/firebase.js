// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJcgD2MPuTKUzXRDbuD_zdg9evwrfqk-E",
  authDomain: "netflixgpt-5f481.firebaseapp.com",
  projectId: "netflixgpt-5f481",
  storageBucket: "netflixgpt-5f481.firebasestorage.app",
  messagingSenderId: "193429086192",
  appId: "1:193429086192:web:964e128a6689752d90c735",
  measurementId: "G-Y9NC2HL2L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);