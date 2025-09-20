import React from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center px-4 bg-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto text-center max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl text-cyan-400 font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-8">
          I'm a learning web developer building web apps with React JS, TypeScript, Tailwind CSS, Framer Motion, and Axios, while also learning Data Structures and Algorithms in C++.
        </p>
        <button className="px-6 py-3 border-2 border-transparent bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-900 hover:text-cyan-400 hover:border-cyan-400 transition">
          View Projects
        </button>
      </div>
    </motion.div>
  );
};

export default Intro;
