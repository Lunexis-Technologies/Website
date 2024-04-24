import React, { useState } from "react";
import "../Styles/home.scss";
import { TiTick } from "react-icons/ti";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
const db = getFirestore(app);
const usersCollection = collection(db, "users");

const Home = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersCollection, { email });
      setEmail("");
      toast.success("Email added successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error adding email: ", error);
      toast.error("Error adding email. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  const list = {
    hidden: { opacity: 0 },
    vissible: { opacity: 1 },
  };
  const item = {
    vissible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: "-50%",
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="app__home" id="home">
      <motion.div
        initial="hidden"
        animate={control}
        variants={list}
        ref={ref}
        className="home__text"
      >
        <motion.h1 variants={item}>Changing The World</motion.h1>
        <motion.h1 variants={item}>Through Play</motion.h1>
      </motion.div>
      <div className="ticks__container">
        <p>
          <span>
            <TiTick />
          </span>
          Argon is in Beta, Try It!
        </p>
        <p>
          <span>
            <TiTick />
          </span>
          We want to hear your feedback!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="input__container">
        <input
          type="email"
          placeholder="Add your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="company__cta">Try Argon Now!</button>
    
        
      </form>
      <ToastContainer />
    </div>
  );
};

export default Home;
