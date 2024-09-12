// Importing music
import "../styles/Norsang.css";
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ComingSoon from "./ComingSoon";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Philo",
      description: "Artificial Emotional Platform aimed to mimic companionship",
      link: "https://philo-x1.vercel.app/",
      image: "../images/philo.png",
    },
  ];

  return (
    <motion.div className="Background flex justify-center items-center h-screen relative bg-backgroundBlue">
      <motion.div className="w-full absolute top-8 flex justify-center">
        <Logo />
      </motion.div>
      <motion.div className="absolute top-60">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </motion.div>

      <ComingSoon className="absolute bottom-32 sm:bottom-52" />
    </motion.div>
  );
}
