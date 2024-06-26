// Importing music
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles/Norsang.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {motion} from "framer-motion";



function Norsang() {
  const [scrollStopped, setScrollStopped] = useState(false);
  const [color, setColor] = useState("white");
useEffect(() => {
  const handleScroll = () => {
    const stopPosition = 760; // Adjust this value to set the position where scrolling should stop
    const colorPosition = 500;
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY >= stopPosition) {
      setScrollStopped(true);
    } 
    // else {
    //   setScrollStopped(false);
    // }

    if (scrollY >= colorPosition){
      setColor("black");
    } else {
      setColor('White')
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const textVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2 // Adjust the delay between each letter
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2 // Adjust the duration for each letter to appear
    }
  }
};
  return (
    <div className="Background">
      <motion.div
       id="norsang"
      //  style={{ position: scrollStopped ? "absolute" : "fixed", color: color}} 
       >
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {"Norsang Nyandak".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
        </motion.div>

      </motion.div>
      <div class="x">
        <FontAwesomeIcon icon={brands("css3")} class="icons" id="css" />
      </div>
      <div class="x2">
        <a href="https://github.com/TNorsang" target="_blank">
          <FontAwesomeIcon icon={brands("github")} class="icons" id="github" />
        </a>
      </div>
      <div class="x3">
        <FontAwesomeIcon icon={solid("code")} class="icons" id="code" />
      </div>
      <div class="x4">
        <FontAwesomeIcon icon={solid("music")} class="icons" id="music" />
      </div>
      <div class="x5">
        <FontAwesomeIcon icon={solid("person")} class="icons" id="person" />
      </div>
      <div class="x6">
        <FontAwesomeIcon icon={solid("fish")} class="icons" id="fish" />
      </div>
      <div class="x7">
        <FontAwesomeIcon icon={brands("python")} class="icons" id="python" />
      </div>
      <div class="x8">
        <FontAwesomeIcon icon={solid("rocket")} class="icons" id="rocket" />
      </div>
      <div class="x9">
        <FontAwesomeIcon icon={solid("brain")} class="icons" id="brain" />
      </div>
      <div class="x10">
        <FontAwesomeIcon
          icon={solid("motorcycle")}
          class="icons"
          id="motorcycle"
        />
      </div>
      <div class="x11">
        <FontAwesomeIcon icon={solid("robot")} class="icons" id="robot" />
      </div>
      <div class="x111">
        <FontAwesomeIcon
          icon={brands("square-js")}
          class="icons"
          id="square-js"
        />
      </div>
      <div class="x12">
        <FontAwesomeIcon icon={brands("java")} class="icons" id="java" />
      </div>
      <div class="x13">
        <FontAwesomeIcon
          icon={solid("laptop-code")}
          class="icons"
          id="laptop-code"
        />
      </div>
      <div class="x14">
        <FontAwesomeIcon
          icon={brands("stack-overflow")}
          class="icons"
          id="stack-overflow"
        />
      </div>
      <div class="x15">
        <FontAwesomeIcon icon={brands("html5")} class="icons" id="html5" />
      </div>
      <div class="x16">
        <FontAwesomeIcon icon={solid("dumbbell")} class="icons" id="dumbbell" />
      </div>
      <div class="x17">
        <FontAwesomeIcon icon={brands("react")} class="icons" id="react" />
      </div>
      <div class="x18">
        <FontAwesomeIcon icon={solid("yin-yang")} class="icons" id="yin-yang" />
      </div>
      <div class="x19">
        <FontAwesomeIcon icon={solid("dog")} class="icons" id="dog" />
      </div>
      <div class="x20">
        <FontAwesomeIcon icon={solid("cat")} class="icons" id="cat" />
      </div>
      <div class="x21">
        <FontAwesomeIcon
          icon={solid("earth-americas")}
          class="icons"
          id="earth-americas"
        />
      </div>
      <div class="x22">
        <FontAwesomeIcon icon={solid("fish")} class="icons" id="fish" />
      </div>
      <div class="x23">
        <FontAwesomeIcon icon={brands("google")} class="icons" id="google" />
      </div>
    </div>
  );
}
export default Norsang;
