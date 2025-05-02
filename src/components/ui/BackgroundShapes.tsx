import React from 'react';
import { AnimatedShape } from '@/components/ui/AnimatedShape';
import { shapes } from '@/styles/constants';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <AnimatedShape
          key={shape.id}
          id={shape.id}
          size={shape.size}
          x={shape.x}
          y={shape.y}
          delay={shape.delay}
          color={shape.color}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;