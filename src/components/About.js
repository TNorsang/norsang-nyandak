// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function About() {
  const texts = ["Tashi Delek", "Hello", "Namaste"];
  const [index, setIndex] = useState(0);
  const isFirstVisit = localStorage.getItem("aboutPageVisited") == null;

  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem("aboutPageVisited", "yes");
    }
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 4, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      <motion.div className="w-full absolute top-8 flex justify-center">
        <Logo />
      </motion.div>

      <motion.div className="text-textBlue w-full p-10 sm:w-1/2">
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isFirstVisit ? textVariants : " "}
          className="font-extrabold text-[22px]"
        >
          {texts[index]}
        </motion.div>
        <motion.div
          initial={{ opacity: isFirstVisit ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 2 }}
        >
          My name is Norsang Nyandak, and I recently graduated with a Bachelor’s
          Degree in Computer Science from the New Jersey Institute of
          Technology. My passion lies in solving real-world problems, and
          discovering software engineering has shown me how technology can
          transform my ideas into impactful solutions. Currently, I'm developing
          Philo, an Artificial Emotional Platform designed to emulate
          companionship and contribute to improving lives.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
