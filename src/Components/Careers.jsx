import React from 'react';
import '../Styles/Careers.scss';
import { motion } from 'framer-motion';
import { careers } from '../Images';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Careers = () => {
  const handleViewPositions = () => {
    toast.info('We currently have no jobs available.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="careers">
      <motion.div
        className="careers__content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="careers__title">Join Our Team</h1>
        <p className="careers__description">
          At Lunexis, we are constantly seeking talented individuals to join our dynamic team. We
          value creativity, innovation, and a passion for digital entertainment. If you share our
          vision and thrive in a collaborative environment, we invite you to explore our current
          career opportunities.
        </p>
        <a href="#" onClick={handleViewPositions} className="careers__cta">
          View Open Positions
        </a>
      </motion.div>
      <motion.div
        className="careers__image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <img src={careers} alt="Careers" />
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Careers;