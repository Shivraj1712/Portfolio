import React from "react";
import ProfileImage from "../assets/Profile Image.jpg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-6">
        About Me
      </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="flex justify-center">
          <img
            src={ProfileImage}
            alt="Shivrajsinh Maharaul"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="flex-1 text-white text-center md:text-left">
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
            I'm Shivrajsinh Maharaul, a passionate learner exploring the world of web development and problem-solving. I enjoy building responsive and interactive web applications using React, TypeScript, Tailwind CSS, Framer Motion, and Axios.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4 max-w-2xl mx-auto md:mx-0">
            Alongside development, I’m strengthening my foundations in Data Structures and Algorithms with C++ to improve my problem-solving skills and prepare for future opportunities in the tech industry.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
