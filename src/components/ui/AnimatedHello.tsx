import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHelloProps {
  size?: string;
  className?: string;
}

export const AnimatedHello: React.FC<AnimatedHelloProps> = ({ 
  size = "150px", 
  className = "" 
}) => {
  // Animation variants for the hand wave
  const waveAnimation = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
        repeatDelay: 1
      }
    }
  };

  // Animation for the text
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        style={{ fontSize: size }}
        animate="wave"
        variants={waveAnimation}
        className="cursor-pointer"
      >
        👋
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      >
        Hello!
      </motion.div>
    </div>
  );
};

export default AnimatedHello;