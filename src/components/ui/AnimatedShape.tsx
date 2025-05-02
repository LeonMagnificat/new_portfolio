import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedShapeProps {
  id: number;
  size: number;
  x: string;
  y: string;
  delay: number;
  color: string;
}

export const AnimatedShape: React.FC<AnimatedShapeProps> = ({ 
  id, 
  size, 
  x, 
  y, 
  delay, 
  color 
}) => {
  return (
    <motion.div
      key={id}
      className={`absolute bg-gradient-to-br ${color} rounded-full blur-xl`}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        left: x,
        top: y,
      }}
      animate={{
        y: [0, -30, -10, -40, -20, 0],
        x: [0, 10, -5, 15, -10, 0],
        scale: [1, 1.05, 0.95, 1.1, 0.98, 1],
        rotate: [0, 3, -2, 4, -3, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }}
    />
  );
};

export default AnimatedShape;