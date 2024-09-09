import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import colors from "../config/colors";

export default function NavBar(props) {
  const linkVariants = {
    initial: { scale: 1, color: colors.textBlue },
    hover: {
      scale: 1.1,
      color: colors.nameGold,
      transition: { duration: 0.2 },
    },
  };
  return (
    <ul className={props.className}>
      <motion.li variants={linkVariants} initial="initial" whileHover="hover">
        <Link to="/About">About</Link>
      </motion.li>
      <motion.li variants={linkVariants} initial="initial" whileHover="hover">
        <Link to="/Projects">Projects</Link>
      </motion.li>
      <motion.li variants={linkVariants} initial="initial" whileHover="hover">
        <Link to="/Contact">Contact</Link>
      </motion.li>
    </ul>
  );
}
