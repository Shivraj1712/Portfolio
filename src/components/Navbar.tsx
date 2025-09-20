import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ProfilePic from '../assets/Profile Image.jpg';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav className="bg-gray-900 text-white fixed top-0 w-full z-50"
    initial={{ opacity: 0.8}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Mobile Image */}
          <figure className="sm:block md:hidden">
            <img src={ProfilePic} alt="Profile Pic" className="w-10 h-10 rounded-full"/>
          </figure>

          {/* Logo */}
          <a href="#" className="text-2xl text-cyan-400 font-bold">
            Portfolio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a href={`#${item.toLowerCase()}`}
                  className="px-1 py-2 border-2 border-transparent text-white hover:text-cyan-400 hover:border-b-cyan-400 transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Image */}
          <figure className="hidden md:block">
            <img src={ProfilePic} alt="Profile Pic" className="w-10 h-10 rounded-full"/>
          </figure>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
            className="text-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900"
        >
          <ul className="flex flex-col px-4 text-center py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-white hover:text-cyan-400 transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
