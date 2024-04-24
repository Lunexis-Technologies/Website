import React, { useState } from "react";
import { routes } from "../Data/dummy";
import "../Styles/navbar.scss";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const firebaseConfig = {
  // Your Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState("");

  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersCollection, { email });
      setEmail("");
      setShowRegisterForm(false);
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

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <p>LUNEXIS</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        <button
          style={{ color: bgColor ? "#0c1727" : "white" }}
          className="onebtn"
        >
          Learn More
        </button>
        <button
          style={{
            color: bgColor ? "white" : "#0c1727",
            background: bgColor ? "#0c1727" : "white",
          }}
          onClick={() => setShowRegisterForm(true)}
        >
          Register
        </button>
      </div>
      {showRegisterForm && (
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Navbar;
