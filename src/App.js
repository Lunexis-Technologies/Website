import React from "react";
import "./app.scss";
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,
  STTop,
} from "./Components";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

import { getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

import { collection } from "firebase/firestore";
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

const users = collection(db, "users"); 



getDocs(users); 

onAuthStateChanged(auth, user =>{
  if(user =! null){
    console.log("logged in");
  } else {
    console.log("No user");
  }
})

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <STTop />
    </div>
  );
};

export default App;
