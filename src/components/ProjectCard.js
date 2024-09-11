import { motion } from "framer-motion";
import colors from "../config/colors";
export default function ProjectCard(props) {
  const linkVariant = {
    hover: {
      color: colors.nameGold,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div className="bg-initialBlue w-[80svw] h-[20svh] text-textBlue border-4 border-blue-500">
      <motion.div className="border-2 h-[4vh] grid items-center">
        {props.title}
      </motion.div>
      <motion.div className="border-2 h-[16svh] flex flex-col">
        <motion.div>{props.description}</motion.div>
        <motion.img src={props.image} alt="Philo Image" className="w-[20svh]" />
        <motion.div variants={linkVariant} whileHover="hover">
          <a href={props.link} target="_blank" underline="true">
            Go to Philo
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
