import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Whole Card
    <motion.div
      className="rounded-xl overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Portion : Image, Title */}
      <motion.div
        className="relative h-64 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <img
          src={props.image}
          alt={`${props.title} image`}
          className="w-full h-full object-cover"
        />
        {/* Title */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-3xl font-bold text-white text-center px-4">
            {props.title}
          </h3>
        </div>
      </motion.div>
      {/* Bottom Portion: Tech Stack, Link */}
      <div className="p-6 bg-white">
        <AnimatePresence>
          {isExpanded && (
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {props.description}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mb-4">
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <motion.a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            whileHover={{ scale: 1.05, x: 5 }}
          >
            {props.linkText}
            <ExternalLink className="ml-1 h-4 w-4" />
          </motion.a>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
