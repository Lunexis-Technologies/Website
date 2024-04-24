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
          Our innovative startup is on a mission to redefine the landscape of digital entertainment by crafting games that transcend conventional amusement. Envisioned as bridges, these games connect individuals and deliver unparalleled experiences through gameplay.
        </p>
        <motion.a
          href="#"
          className="company__cta"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
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