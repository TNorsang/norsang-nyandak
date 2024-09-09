// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Logo from "./Logo";

export default function About() {
  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      <motion.div className="w-full absolute top-8 flex justify-center">
        <Logo />
      </motion.div>

      <motion.div className="text-white w-5/6">
        <h1 className="font-extrabold text-[22px]">Tashi Delek</h1>
        My name is Norsang Nyandak, and I recently graduated with a Bachelor’s
        Degree in Computer Science from the New Jersey Institute of Technology.
        My passion lies in solving real-world problems, and discovering software
        engineering has shown me how technology can transform my ideas into
        impactful solutions. Currently, I'm developing Philo, an Artificial
        Emotional Platform designed to emulate companionship and contribute to
        improving lives.
      </motion.div>
      <NavBar className="text-white flex flex-row space-x-4 fixed bottom-4" />
    </motion.div>
  );
}
