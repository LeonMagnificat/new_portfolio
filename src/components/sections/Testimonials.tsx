import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { testimonials, partners } from '@/data/projectsData';

interface TestimonialsSectionProps {
  isDarkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isDarkMode }) => {
  return (
    <Section id="clients">
      <SectionHeader 
        title="Our Clients/Partners" 
        description="We're proud to work with industry leaders and receive positive feedback from our valued clients."
        isDarkMode={isDarkMode}
      />
      
      {/* Partners Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-8 object-cover opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;