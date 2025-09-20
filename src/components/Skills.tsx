import React from "react";
import { SiReact, SiTypescript, SiTailwindcss, SiAxios, SiCplusplus } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "React JS", icon: <SiReact className="w-12 h-12 mx-auto mb-4" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 mx-auto mb-4" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 mx-auto mb-4" /> },
  { name: "Framer Motion", icon: <FaFire className="w-12 h-12 mx-auto mb-4 text-cyan-400" /> },
  { name: "Axios", icon: <SiAxios className="w-12 h-12 mx-auto mb-4" /> },
  { name: "C++", icon: <SiCplusplus className="w-12 h-12 mx-auto mb-4" /> }
];

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
