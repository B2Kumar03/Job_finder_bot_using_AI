// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3wtR-Zgx99m7c6Nys0RCD8veM7YWepxk",
  authDomain: "jobfinderusingai.firebaseapp.com",
  projectId: "jobfinderusingai",
  storageBucket: "jobfinderusingai.firebasestorage.app",
  messagingSenderId: "222682820850",
  appId: "1:222682820850:web:715f82c6bc17137728606b",
  measurementId: "G-PWPL9T70HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}