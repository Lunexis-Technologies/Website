import React from 'react';
import "../Styles/Company.scss";
import { motion } from 'framer-motion';
import { lunexis } from '../Images';


const Company = () => {
  return (
    <div className="company">
      <motion.div
        className="company__content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="company__title">LUNEXIS</h1>
        <p className="company__description">
        We are building Lunexis with a vision to become a leading force in the gaming industry, driven by our devotion for bringing people together through video games. We firmly believe that gaming will soon become an integral part of everyone's lives, transcending boundaries of age, gender, and geography. Our mission is to lead and accelerate this exciting future through our inaugural product, Argon.
        </p>
        <motion.a
          href="https://testflight.apple.com/join/bjuA3HQs"
          className="company__cta"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Try our Beta on iOS!
        </motion.a>
        
      </motion.div>
      <motion.div
        className="company__image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <img src={lunexis} alt="Company" />
      </motion.div>
    </div>
  );
};

export default Company;