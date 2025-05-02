import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children, 
  animate = false 
}) => {
  return (
    <section 
      id={id} 
      className={cn("section mt-16", className)}
    >
      <div className="container mx-auto">
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

export default Section;