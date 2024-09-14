import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";
import colors from "../config/colors";
// import { useState } from "react";

export default function NavBar(props) {
  const isFirstVisit = localStorage.getItem("mainPageVisited") == null;

  const linkVariants = {
    hidden: { opacity: isFirstVisit ? 0 : 1, color: colors.textBlue },
    visible: {
      opacity: 1,
      transition: isFirstVisit ? { duration: 4, delay: 9 } : { duration: 0.5 },
    },
    hover: {
      scale: 1.2,
      color: colors.nameGold,
      transition: { duration: 0.2 },
    },
  };
  return (
    <motion.ul
      initial={isFirstVisit ? props.initial : {}}
      animate={props.animate}
      transition={props.transition}
      className="text-textBlue flex flex-row space-x-4 justify-center"
    >
      <motion.li
        variants={linkVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Link to="/About">About</Link>
      </motion.li>
      <motion.li
        variants={linkVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Link to="/Projects">Projects</Link>
      </motion.li>
      <motion.li
        variants={linkVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Link to="/Contact">Contact</Link>
      </motion.li>
    </motion.ul>
  );
}
