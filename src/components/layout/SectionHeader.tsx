import React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/styles/constants';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  isDarkMode?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  className,
  isDarkMode = false
}) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h4 className={`${typography.h2} mb-6`}>
        {title}
      </h4>
      {description && (
        <p className={`${typography.body} max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;