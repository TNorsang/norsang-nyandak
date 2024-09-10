import { motion } from "framer-motion";

export default function Icons(props) {
  const FaIcon = props.iconRef;

  return (
    <div>
      <motion.div variants={props.variants} whileHover="hover">
        <a
          href="https://github.com/TNorsang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaIcon className="text-2xl sm:text-4xl" />
        </a>
      </motion.div>
    </div>
  );
}
