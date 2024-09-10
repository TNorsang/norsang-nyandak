import "../styles/Norsang.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import colors from "../config/colors";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Icons from "./Icons";

export default function Norsang() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 647);

  const isFirstVisit = localStorage.getItem("hasVisited") == null;
  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem("hasVisited", "yes");
    }
    function handleResize() {
      setIsLargeScreen(window.innerWidth > 647);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      color: colors.nameGold,
      transition: {
        duration: 0.2,
      },
    },
  };
  console.log("First isFirstVisit outside UseEffect", isFirstVisit);
  return (
    <motion.div className="Background flex flex-col justify-center items-center h-screen relative bg-backgroundBlue">
      {/* NN */}
      <motion.div className="font-cinzel text-[200px] text-initialBlue absolute">
        NN
      </motion.div>
      {/* Norsang Nyandak */}
      <motion.div
        key={isFirstVisit}
        className="font-windsong text-[28px] text-nameGold absolute"
        initial="hidden"
        animate="visible"
        variants={isFirstVisit ? textVariants : {}}
      >
        {"Norsang Nyandak".split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
      {/* Description */}
      <motion.div className="relative top-36 text-textBlue text-[14px] w-2/3 sm:top-36 sm:w-full sm:text-[18px] sm:p-2">
        {isLargeScreen ? (
          <div className="flex justify-center space-x-4">
            {isFirstVisit ? (
              <div className="flex justify-center space-x-4">
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
                  transition={{ duration: 4, delay: 7 }}
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
                  transition={{ duration: 4, delay: 7 }}
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
                Software Engineer by Profession | Problem Solver by Passion |
                Designer by Nature
              </div>
            )}
          </div>
        ) : (
          // Mobile view simplified example
          <div>
            {isFirstVisit ? (
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
            ) : (
              <div> </div>
            )}
          </div>
        )}
      </motion.div>
      {/* icons */}
      <motion.div className="relative top-44 sm:top-48 flex space-x-2">
        {isFirstVisit ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 4,
              delay: 0,
            }}
          >
            <Icons iconRef={FaGithub} variants={iconVariants} />
            <Icons iconRef={FaLinkedin} variants={iconVariants} />
          </motion.div>
        ) : (
          <motion.div className="flex border-2">
            <Icons iconRef={FaGithub} variants={iconVariants} />
            <Icons iconRef={FaLinkedin} variants={iconVariants} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
