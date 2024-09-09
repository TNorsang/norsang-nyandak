// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Logo from "./Logo";

export default function Contact() {
  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      <motion.div className="w-full absolute top-8 flex justify-center">
        <Logo />
      </motion.div>
      <NavBar className="text-white flex flex-row space-x-4 fixed bottom-4" />
    </motion.div>
  );
}
