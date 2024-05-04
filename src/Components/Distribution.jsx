import React, { useEffect } from "react";
import "../Styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Distribution = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__distribution">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">
          <div className="distribution__text">
            <h1>Accelerating The Future of Play</h1>
            <p>Our mission is to accelerate this future by equipping developers with top-tier tools to realize their visions and enticing players to embark on limitless gaming adventures.
</p>
          </div>
          <a href="https://testflight.apple.com/join/bjuA3HQs" target="_blank" rel="noopener noreferrer">
          <div className="distribution__buttons">
            <button type="submit" >
              <BsApple />
            Try our Beta on TestFlight
            </button>
          
          </div>
          </a>
         
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="" draggable={false}  width={400}/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
