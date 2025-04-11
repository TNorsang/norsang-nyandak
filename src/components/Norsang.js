import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import colors from "../config/colors";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Icons from "./Icons";
import NavBar from "./NavBar";

export default function Norsang() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 647);

  const isFirstVisit = localStorage.getItem("mainPageVisited") == null;
  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem("mainPageVisited", "yes");
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
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
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
  return (
    <motion.div className="flex flex-col items-center justify-center h-[100svh] relative">
      {/* Logo */}
      <motion.div className="flex justify-center items-center w-full">
        {/* NN */}
        <motion.div className="font-cinzel text-[140px] sm:text-[200px] text-initialBlue absolute">
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
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-[20px] sm:text-[28px]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      {/* Description */}
      <motion.div className="relative text-textBlue w-2/3 sm:w-full sm:p-2">
        {isLargeScreen ? (
          // Larger Screen Logic
          <div className="flex justify-center text-[14px] sm:text-[18px] relative top-28">
            {isFirstVisit ? (
              // Larger Screen First Page Visit
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
              // Larger Screen After First Page Visit
              <div className="flex justify-center space-x-4">
                <motion.div>Software Engineer by Profession</motion.div>
                <motion.div>|</motion.div>
                <motion.div>Problem Solver by Passion</motion.div>
                <motion.div>|</motion.div>
                <motion.div>Designer by Nature</motion.div>
              </div>
            )}
          </div>
        ) : (
          // Mobile Screen
          <div className="relative space-x-4 text-[12px] top-20">
            {isFirstVisit ? (
              <div className="flex flex-col justify-center items-center">
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
              <div className="flex flex-col justify-center items-center">
                <motion.div>Software Engineer by Profession</motion.div>
                <motion.div>Problem Solver by Passion</motion.div>{" "}
                <motion.div>Designer by Nature</motion.div>
              </div>
            )}
          </div>
        )}
      </motion.div>
      {/* Icons */}
      <motion.div className="relative top-28 sm:top-40">
        {isFirstVisit ? (
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 4,
              delay: 9,
            }}
          >
            <Icons
              link="https://github.com/TNorsang"
              iconRef={FaGithub}
              variants={iconVariants}
            />
            <Icons
              link="https://www.linkedin.com/in/norsang-nyandak/"
              iconRef={FaLinkedin}
              variants={iconVariants}
            />
          </motion.div>
        ) : (
          <motion.div className="flex space-x-2">
            <Icons
              link="https://github.com/TNorsang"
              iconRef={FaGithub}
              variants={iconVariants}
            />
            <Icons
              link="https://www.linkedin.com/in/norsang-nyandak/"
              iconRef={FaLinkedin}
              variants={iconVariants}
            />
          </motion.div>
        )}
      </motion.div>
      {/* NavBar */}
      <motion.div className="absolute bottom-8 sm:bottom-24">
        <NavBar />
      </motion.div>
    </motion.div>
  );
}
