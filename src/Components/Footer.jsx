import React from "react";
import "../Styles/Footer.scss";
import { routes } from "../Data/dummy";
//import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';

import { useState } from "react";



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
const usersCollection = collection(db, "newsletter");




const Footer = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersCollection, { email });
      setEmail('');
      setShowRegisterForm(false);
      toast.success('Email added successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error adding email: ', error);
      toast.error('Error adding email. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="app__footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="logo">
            <p>LUNEXIS</p>
          </div>
          <div className="footer__cta">
            <p>Follow our journey</p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="footer__middle">
          <div className="left__middle">
            <p>Subscribe to our news letter</p>
            <div className="input__container">
              <form onSubmit={handleSubmit}>
              <input type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
              <button className="company__cta">Join</button>
              </form>
           
            </div>
          </div>
          
          <div className="right__middle">

            <ul className="middle__routes">
              {routes.map((route, index) => (
                <li className="route" key={index}>
                  {route.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="left__bottom">
            <ul>
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="right__bottom">
            <ul>
              <li>
                <BsTwitter 
                  onClick={() => {
                    window.location.href = "https://twitter.com/lunexistech ";
                  }}
                />
              </li>
              <li>
                <BsInstagram
                  onClick={() => {
                    window.location.href =
                      "https://www.instagram.com/lunexistechnologies/";
                  }}
                />
              </li>
              <li>
                <FaDiscord
                  onClick={() => {
                    window.location.href =
                      "https://www.instagram.com/lunexistechnologies/";
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
