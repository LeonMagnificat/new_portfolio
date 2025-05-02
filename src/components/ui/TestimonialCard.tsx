import React from 'react';
import { Card } from '@/components/ui/card';
import { typography } from '@/styles/constants';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  isDarkMode?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  image, 
  quote,
  isDarkMode = false
}) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-lg font-bold">{name}</h4>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{role}</p>
        </div>
      </div>
      <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} italic`}>
        "{quote}"
      </p>
    </Card>
  );
};

export default TestimonialCard;