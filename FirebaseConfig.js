// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQsz4utJ3-PZjmebXiOMaI9c4I2jLbmsk",
  authDomain: "lunexiswebsite.firebaseapp.com",
  projectId: "lunexiswebsite",
  storageBucket: "lunexiswebsite.appspot.com",
  messagingSenderId: "439394939597",
  appId: "1:439394939597:web:4c386f8c45352b1fe3ef84",
  measurementId: "G-EGR5BDGHJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); 
const db = getFirestore(app); 