import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import colors from "../config/colors";
import { useState, useEffect } from "react";

export default function NavBar(props) {
  const [animation, setAnimation] = useState(false);

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("hasVisited");

  //   if (!hasVisited) {
  //     localStorage.setItem("hasVisited", "true");
  //   } else {
  //     setAnimation(true);
  //   }
  // }, []);

  const linkVariants = {
    key: { animation },
    hidden: { opacity: animation ? 1 : 0, color: colors.textBlue },
    visible: {
      opacity: 1,
      transition: animation ? { duration: 4, delay: 9 } : { duration: 0.5 },
    },
    hover: {
      scale: 1.2,
      color: colors.nameGold,
      transition: { duration: 0.2 },
    },
  };
  return (
    <ul className={props.className}>
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
    </ul>
  );
}
