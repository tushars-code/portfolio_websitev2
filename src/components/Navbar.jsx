import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for Mobile Menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-20 bg-black bg-opacity-70 backdrop-blur-lg p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-teal-400">
          Tushar Yerne
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-teal-400 transition">About</a>
          <a href="#skills" className="text-gray-300 hover:text-teal-400 transition">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-teal-400 transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md py-4 flex flex-col items-center space-y-4"
          >
            <a href="#about" className="text-gray-300 hover:text-teal-400 text-lg" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="text-gray-300 hover:text-teal-400 text-lg" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 text-lg" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400 text-lg" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
