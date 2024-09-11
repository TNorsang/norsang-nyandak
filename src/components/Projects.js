// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ComingSoon from "./ComingSoon";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const philoTitle = "Philo";
  const philoDescription =
    "Artificial Emotional Platform aimed to mimic companionship";
  const philoLink = "https://philo-x1.vercel.app/";
  const philoImg = "../images/philo.png";

  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      <motion.div className="w-full absolute top-8 flex justify-center">
        <Logo />
      </motion.div>
      <motion.div className="absolute top-60">
        <ProjectCard
          title={philoTitle}
          description={philoDescription}
          link={philoLink}
          image={philoImg}
        />
      </motion.div>

      <ComingSoon className="absolute bottom-52" />
    </motion.div>
  );
}
