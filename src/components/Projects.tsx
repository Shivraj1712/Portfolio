import React from "react";
import WeatherImg from "../assets/weatheriq.png";
import TodoImg from "../assets/todolist.png";
import JobsImg from "../assets/jobshere.png";
import { motion } from 'framer-motion';

const projects = [
  { title: "WeatherIQ", description: "A responsive web app to fetch real-time weather by city or location.", techStack: "HTML | CSS | Vanilla JS | OpenWeatherMap API", image: WeatherImg, link: "https://weatheriq1712.netlify.app/" },
  { title: "Animated Todo App", description: "A Todo List application with smooth Framer Motion animations.", techStack: "React | TypeScript | Bootstrap | Framer Motion", image: TodoImg, link: "https://todolistreactandbootstrap.netlify.app/" },
  { title: "React Jobs Dashboard", description: "A multi-page jobs dashboard with responsive design, animations, and routing.", techStack: "React | TypeScript | Tailwind CSS | Framer Motion | React Router", image: JobsImg, link: "https://jobsherereactroutingpractice.netlify.app/" }
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <figure key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col text-center h-full">
              <div className="w-full h-48 flex justify-center items-center p-4 bg-gray-700">
                <img src={project.image} alt={`${project.title} logo`} className="max-w-full max-h-full object-contain rounded-lg"/>
              </div>
              <figcaption className="text-2xl font-bold text-cyan-400 mt-4">{project.title}</figcaption>
              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <p className="text-gray-200 mb-2">{project.description}</p>
                  <p className="text-gray-400 mb-4">{project.techStack}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:text-cyan-400 transition">
                  Live Demo
                </a>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
