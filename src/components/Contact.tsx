import React from "react";
import type { IconType } from "react-icons";
import { FaLinkedin, FaInstagram, FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const Contacts: { name: string; link: string; icon: IconType }[] = [
    { name: "Instagram", link: "https://www.instagram.com/shivraj_maharaul_17/", icon: FaInstagram },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/", icon: FaLinkedin },
    { name: "LeetCode", link: "https://leetcode.com/u/Shivraj_Operator/", icon: SiLeetcode },
    { name: "GitHub", link: "https://github.com/Shivraj1712/", icon: FaGithub },
    { name: "Phone", link: "tel:+91 6355540489", icon: FaPhone },
    { name: "Email", link: "mailto:shivrajmaharaul688@gmail.com", icon: MdEmail }
  ];

  return (
    <motion.section
      id="contact"
      className="py-10 bg-gray-900 text-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto py-4 text-center">
        <h2 className="text-cyan-400 font-bold text-3xl md:text-4xl mb-8">Contact</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
        {Contacts.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="text-center text-gray-900">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-900 text-white py-2 px-3 w-28 flex border-2 border-transparent shadow-lg hover:border-cyan-400 hover:text-cyan-400 flex-col items-center rounded-lg transition">
                  <Icon className="w-8 h-8 mb-2" />
                  <p>{item.name}</p>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Contact;
