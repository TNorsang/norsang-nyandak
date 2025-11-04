import "font-awesome/css/font-awesome.min.css";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tablet",
      description: "Digital Pharmacy",
      link: "https://tablethealth.com/",
      linkText: "View Tablet",
      image: "../images/Tablet.png",
      technologies: [
        "Next.js",
        "React Native",
        "Nest.js",
        "TurboRepo",
        "Tailwindcss",
        "AWS Aurora",
        "AWS Cognito",
        "AWS Fargate",
      ],
    },
    {
      id: 2,
      title: "Pure Vision Optical",
      description: "Luxury eyewear website",
      link: "https://purevisionoptical.com/",
      linkText: "View Pure Vision Optical",
      image: "../images/PV-Icoon-Black.jpg",
      technologies: ["Wordpress", "Javascript", "PHP", "Jquery", "CSS"],
    },
    {
      id: 3,
      title: "Philo",
      description: "Artificial Emotional Platform aimed to mimic companionship",
      link: "https://philo-x1.vercel.app/",
      linkText: "View Philo",
      image: "../images/philo.png",
      technologies: [
        "TypeScript",
        "Next.js",
        "React.js",
        "AWS",
        "Tailwind CSS",
        "Node.js",
      ],
    },
    {
      id: 4,
      title: "Artificial Intelligence Tracking",
      description: "Implemented object detecting from a drone viewing camera",
      link: "https://github.com/TNorsang/CS370-assignments/tree/main/Drone-Following",
      linkText: "View Artificial Intelligence",
      image:
        "https://miro.medium.com/v2/resize:fit:1059/1*ox98rEDeUMH-DXZL9-Rn6A.png",
      technologies: [
        "Python",
        "OpenCV",
        "Kalman Filters",
        "Docker",
        "YOLOv5",
        "Machine Learning",
      ],
    },
    {
      id: 5,
      title: "Covey.Town",
      description: "Open source 2D Game group project",
      link: "https://github.com/njit-cs-490-002-spring23/group-project-team-5",
      linkText: "View Covey.Town",
      image: "../images/Covey.Town.png",
      technologies: ["TypeScript", "React.js", "MVC"],
    },
  ];

  return (
    <motion.div className="flex justify-center relative bg-backgroundBlue w-full px-6">
      <motion.div className="w-1/2 absolute top-8">
        <Logo />
      </motion.div>

      {/* Parent container with staggered animation */}
      <motion.div
        className="container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 top-40 pt-40 pb-40"
        variants={containerVariants} // Applying stagger animation
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              linkText={project.linkText}
              image={project.image}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* NavBar */}
      <motion.div className="absolute bottom-8 sm:bottom-24">
        <NavBar />
      </motion.div>
    </motion.div>
  );
}
