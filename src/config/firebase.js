// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEmHcxc_QJHw23sYi5ATJhscBCOt8pzVM",
  authDomain: "homebuilder-4a3d8.firebaseapp.com",
  projectId: "homebuilder-4a3d8",
  storageBucket: "homebuilder-4a3d8.appspot.com",
  messagingSenderId: "902427585333",
  appId: "1:902427585333:web:73beea63b1063dbf037a7c",
  measurementId: "G-HZPXMP3JPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);