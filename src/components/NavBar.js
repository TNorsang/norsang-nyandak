import { Link, useLocation } from "react-router-dom";
import { animate, motion } from "framer-motion";
import colors from "../config/colors";

export default function NavBar(props) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const linkVariants = {
    hidden: { opacity: 0, color: colors.textBlue },
    visible: {
      opacity: 1,
      transition: isHomePage ? { duration: 4, delay: 9 } : { duration: 0.5 },
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
