import React, { useEffect } from "react";
import { controls } from "../Data/dummy";
import "../Styles/control.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Our Core Values</h1>
          <p>
          Lunexis stands as the beacon of the digital entertainment realm. Pioneering revolutionary software tools, we empower developers to create unforgettable experiences and enhance community communication. Our mission includes crafting games that captivate and deeply resonate with global audiences, securing their hearts and igniting imaginations.
          </p>
         
        </div>
        <div className="control__content">
          {controls.map((control, index) => (
            <div className="control" key={index}>
             

              <div className="control__text__content">
                <p>{control.name}</p>
                <span>
                 {control.Text}
                </span>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
