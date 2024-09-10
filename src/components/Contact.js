// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ComingSoon from "./ComingSoon";

export default function Contact() {
  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      <motion.div className="w-full absolute top-8 flex justify-center">
        <Logo />
      </motion.div>
      <motion.div>
        <ComingSoon />
      </motion.div>
    </motion.div>
  );
}
