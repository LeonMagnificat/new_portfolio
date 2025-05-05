import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Card } from '@/components/ui/card';

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface ServicesSectionProps {
  isDarkMode: boolean;
  services: {
    uiux: {
      src: string;
      alt: string;
    };
    development: {
      src: string;
      alt: string;
    };
    mobile: {
      src: string;
      alt: string;
    };
  };
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  isDarkMode, 
  services 
}) => {
  const servicesList: Service[] = [
    {
      title: "UI/UX Design",
      description: "Designing intuitive, engaging user experiences that prioritize usability and conversion. I specialize in user research, wireframing, and prototyping to bring clarity and structure to digital products.",
      image: services.uiux.src,
      alt: services.uiux.alt
    },
    {
      title: "Front-End Development",
      description: "Building responsive, high-performance web applications with React, Next.js, TypeScript, and Tailwind CSS. I focus on writing clean, maintainable code aligned with modern development best practices.",
      image: services.development.src,
      alt: services.development.alt
    },
    {
      title: "Logo & Branding",
      description: "Crafting meaningful brand identities that reflect core values and connect with audiences. From logo design to full brand guidelines, I create cohesive visual systems that build trust and recognition.",
      image: services.mobile.src,
      alt: services.mobile.alt
    }
  ];

  return (
    <Section id="services">
      <SectionHeader 
        title="My Skills & Expertise" 
        isDarkMode={isDarkMode}
      />
      
      {/* Skills & Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard 
              title={service.title}
              description={service.description}
              image={service.image}
              alt={service.alt}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  isDarkMode: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  alt,
  isDarkMode
}) => {
  return (
    <Card className={`group p-6 hover:shadow-lg transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
    }`}>
      <div className="overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
    </Card>
  );
};

export default ServicesSection;