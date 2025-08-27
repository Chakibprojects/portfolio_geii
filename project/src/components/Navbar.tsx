 import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
              𝓒
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                À Propos
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projets
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Expérience
              </a>
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;