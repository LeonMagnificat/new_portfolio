import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  isDarkMode, 
  toggleDarkMode, 
  scrollToSection 
}) => {
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md`}>
      <nav className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="Leon Kwizera" 
              className="h-10 w-auto"
            />
          </a>
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="button gradient-wave text-white px-6 py-2 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;