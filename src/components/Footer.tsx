import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/shivraj_maharaul_17/", icon: FaInstagram },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/", icon: FaLinkedin },
    { name: "GitHub", link: "https://github.com/Shivraj1712/", icon: FaGithub },
    { name: "LeetCode", link: "https://leetcode.com/u/Shivraj_Operator/", icon: SiLeetcode },
    { name: "Email", link: "mailto:shivrajmaharaul688@gmail.com", icon: MdEmail },
  ];

  return (
    <motion.footer
      className="bg-gray-900 text-white py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-200 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Shivrajsinh Maharaul. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition"
                title={item.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
