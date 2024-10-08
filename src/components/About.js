// Importing music
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

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
    <motion.div className="flex justify-center items-center h-[100svh] relative bg-backgroundBlue">
      {/* Logo */}
      <motion.div className="w-screen absolute top-8 flex justify-center">
        <Logo />
      </motion.div>
      {/* About Me Passage */}
      <motion.div className="text-textBlue w-full text-[12px] sm:text-[20px] mx-12 sm:px-0 pt-20 sm:w-1/2">
        {/* Greeting Texts */}
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isFirstVisit ? textVariants : " "}
          className="font-extrabold sm:text-[22px]"
        >
          {texts[index]}
        </motion.div>
        {/* Passage */}
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
      {/* NavBar */}
      <motion.div className="absolute bottom-8 sm:bottom-24">
        <NavBar />
      </motion.div>
    </motion.div>
  );
}
