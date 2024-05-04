import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { analytics } from "../Data/dummy";
import { onephone } from "../Images";
import "../Styles/analytics.scss";

const Analytics = () => {
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
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="analytics__container"
      >
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1>Argon is a social + game distribution platform.</h1>
            <p>
            Argon is redefining  the world of gaming distribution. We are eliminating sales commissions and fostering strong connections between creators and players. We are transforming how games are shared and enjoyed with powerful tools for community engagement and a commitment to innovation. We are shaping the future of gaming.
            </p>
            <h4>Our iOS beta launched on April 26th. Check out our initial analytics! Last Updated May 3rd</h4>
          </div>
          <div className="left__analytics__container">
            {analytics.map((analytic, index) => (
              <div className="analytic__container" key={index}>
                <div className="analytics__icon">{analytic.desc}</div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__analytics">
          <img src={onephone} alt="" draggable={false} width={500}/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
