import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <motion.div>
      <motion.h1 className="sm:w-full text-1xl sm:text-3xl font-bold text-textBlue">
        Norsang is Currently Fixing This Page. <br /> Please check back later!
      </motion.h1>
    </motion.div>
  );
}
