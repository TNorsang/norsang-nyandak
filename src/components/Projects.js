// Importing music
import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Philo",
      description: "Artificial Emotional Platform aimed to mimic companionship",
      link: "https://philo-x1.vercel.app/",
      linkText: "Go To Philo",
      image: "../images/philo.png",
      technologies: ["JavaScript", "TypeScript", "Next.JS", "React.JS", "AWS"],
    },
    {
      id: 2,
      title: "Test",
      description: "Test Test Test",
      link: "test",
      linkText: "Go To Test",
      image: "../images/philo.png",
      technologies: ["JavaScript", "TypeScript", "Next.JS", "React.JS", "AWS"],
    },
    {
      id: 3,
      title: "Test 3",
      description: "Test Test Test",
      link: "test",
      linkText: "Go To Test",
      image: "../images/philo.png",
      technologies: ["JavaScript", "TypeScript", "Next.JS", "React.JS", "AWS"],
    },
    {
      id: 4,
      title: "Test 4",
      description: "Test Test Test",
      link: "test",
      linkText: "Go To Test",
      image: "../images/philo.png",
      technologies: ["JavaScript", "TypeScript", "Next.JS", "React.JS", "AWS"],
    },
  ];

  return (
    <motion.div className="flex justify-center relative bg-backgroundBlue w-full px-6">
      <motion.div className="w-1/6 absolute top-8">
        <Logo />
      </motion.div>
      <motion.div className="container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 top-40 pt-40 pb-40">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
