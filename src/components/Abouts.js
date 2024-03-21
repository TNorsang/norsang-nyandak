import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import "../styles/Abouts.css";

// import Media from 'react-media';

function Abouts() {
  return (
    <div className="Abouts">
      <div className="helloContainer">
        <motion.div
          className="handsWaveContainer"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="gitLinkTwit">
            <a
              href="https://github.com/TNorsang"
              target="_blank"
              className="glt"
            >
              <FontAwesomeIcon
                icon={brands("github")}
                id="gitH"
                className="pageIcon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/norsang-nyandak-077577173/"
              target="_blank"
              className="glt"
            >
              <FontAwesomeIcon
                icon={brands("linkedin")}
                id="linked"
                className="pageIcon"
              />
            </a>
          </div>
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
      </div>
      <div className="imageContainer">
        <motion.div
          drag // Enables dragging
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrains dragging within the parent container
          dragElastic={0.5} // Adjusts the "bounciness" of dragging
          style={{
            width: 200,
            height: 200,
            backgroundColor: "blue",
            borderRadius: 20,
            cursor: "grab", // Change cursor to indicate draggable content
          }}
        >
          Draggable Content
        </motion.div>
        <div className="profileImg">
          <img
            src={require("../assets/profileimage.jpeg")}
            id="pImg"
            alt="Profile"
          />
          <div className="overlay">
            <div className="text">Your sentence or two about yourself</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
