import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <motion.div
        className="Background flex justify-center items-center"
        style={{ width: "100%", height: "100px" }} // Ensure sufficient space
      >
        <motion.div className="font-cinzel text-[100px] text-initialBlue absolute">
          NN
        </motion.div>
        <motion.div className="font-windsong text-[14px] text-nameGold absolute ">
          Norsang Nyandak
        </motion.div>
      </motion.div>
    </Link>
  );
}
