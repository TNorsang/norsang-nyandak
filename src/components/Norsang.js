// Importing music
import "../styles/Norsang.css";
import React, { useState, useEffect } from "react";

import "font-awesome/css/font-awesome.min.css";
import { motion, transform } from "framer-motion";
import NavBar from "./NavBar";

export default function Norsang() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 647);

  const animation = {
    intial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth > 647);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const textVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Adjust the duration for each letter to appear
      },
    },
  };
  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      {/* Hero Section */}
      <motion.div className="font-cinzel text-[200px] text-initialBlue absolute">
        NN
      </motion.div>
      <motion.div
        className="font-windsong text-[28px] text-nameGold absolute"
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
      <motion.div className="relative top-32 text-textBlue text-[14px] w-2/3 sm:w-full sm:text-[18px] sm:p-2">
        {isLargeScreen ? (
          <div className="flex justify-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 3.4 }}
            >
              Software Engineer by Profession{" "}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 7.6 }}
            >
              |
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 5 }}
            >
              Problem Solver by Passion
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 7.6 }}
            >
              |
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 6.4 }}
            >
              Designer by Nature
            </motion.div>
          </div>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 3.4 }}
            >
              Software Engineer by Profession
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 5 }}
            >
              Problem Solver by Passion
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 6.4 }}
            >
              Designer by Nature
            </motion.div>
          </div>
        )}
      </motion.div>
      <NavBar className="text-white flex flex-row space-x-4 fixed bottom-4" />
    </motion.div>
  );
}
