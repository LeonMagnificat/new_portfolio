import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  description, 
  delay = 0.2 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 hover:shadow-lg transition-all duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-lg mb-4" 
        />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;