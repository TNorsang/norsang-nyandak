// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

export default function Norsang() {
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
      <motion.div className="relative top-28 text-textBlue">
        Software Developer by Profession, Problem Solver by Passion, Designer by
        Nature
      </motion.div>
      <NavBar className="text-white flex flex-row space-x-4 fixed bottom-4" />
    </motion.div>
  );
}
