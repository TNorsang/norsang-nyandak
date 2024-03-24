import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "../styles/Abouts.css";
import {useState} from "react";

// import Media from 'react-media';

function Abouts() {
  const handleClick = () => {
    const scrollDuration = 1000; // Duration of the scrolling animation in milliseconds
    const start = window.scrollY;
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const startTime = performance.now();

    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const scrollStep = () => {
      const now = performance.now();
      const time = Math.min(1, ((now - startTime) / scrollDuration));
      const easedTime = easeInOutQuad(time);
      window.scrollTo(0, start + (distance * easedTime));

      if (time < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div className="Abouts">
      <div className="helloContainer">
      <div className="profileImg">
    <motion.img
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.8}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleClick} // Scroll down slowly when clicked
        src={require("../assets/profileimage.jpeg")}
        id="pImg"
        alt="Profile"
    />
</div>

        <motion.div
          className="handsWaveContainer"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div id="hello">
            <h1>Hello</h1>
          </div>
          <motion.div
            className="hand"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FontAwesomeIcon icon={regular("hand")} id="hand" />
          </motion.div>
        </motion.div>
        <motion.div className="intro">
          <motion.p className="introText">
          I am an ambitious and dedicated Senior at the New Jersey Institute of Technology, driven by a deep passion for software development and a strong desire to contribute my skills to a dynamic and challenging career opportunity. With a keen interest in artificial intelligence (AI), I am eager to explore and leverage cutting-edge technologies to tackle complex problems and drive innovation in the field of software development.
          </motion.p>
        </motion.div>
      </div>
      
    </div>
  );
}

export default Abouts;
