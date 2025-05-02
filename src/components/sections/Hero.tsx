import React from 'react';
import { motion } from 'framer-motion';
import { typography, colors } from '@/styles/constants';

interface HeroProps {
  isDarkMode: boolean;
  heroImage: string;
  heroAlt: string;
  scrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  isDarkMode, 
  heroImage, 
  heroAlt, 
  scrollToSection 
}) => {
  return (
    <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-12 relative flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt={heroAlt}
              className="w-auto h-auto max-w-full"
            />
          </motion.div>
          <motion.h1 
            className="hero-title text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 leading-[1.3] line-clamp-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I am Leon,
          </motion.h1>
          
          <motion.p 
            className={`${typography.body} mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Multidisciplinary professional with 9+ years of experience combining UI/UX design expertise with financial sector knowledge. Specialized in creating intuitive digital experiences for complex financial products and services.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              className={`button ${isDarkMode ? colors.primary.light : colors.primary.dark}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="button gradient-wave text-white px-6 py-2 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;