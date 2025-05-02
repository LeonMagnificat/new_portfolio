import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { typography } from '@/styles/constants';

interface AboutSectionProps {
  isDarkMode: boolean;
  aboutImage: string;
  aboutAlt: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  isDarkMode, 
  aboutImage, 
  aboutAlt 
}) => {
  const stats = [
    { value: "9+", label: "Years Experience", gradient: "from-purple-500 via-pink-500 to-red-500" },
    { value: "3", label: "Languages", gradient: "from-pink-500 via-red-500 to-orange-500" },
    { value: "Diverse", label: "Market Experience", gradient: "from-red-500 via-orange-500 to-yellow-500" },
    { value: "Global", label: "Perspective", gradient: "from-orange-500 via-yellow-500 to-green-500" }
  ];

  return (
    <Section id="about-me">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h4 className={`${typography.h4} ${isDarkMode ? 'text-white' : 'text-black'}`}>
              About Me
            </h4>
            <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a multidisciplinary designer and developer with a passion for creating intuitive, user-centered digital experiences. With a background spanning both design and finance, I bring a unique perspective to every project, combining aesthetic sensibility with practical business understanding.
            </p>
            <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
              Fluent in English, French, and Kinyarwanda, I've worked across diverse markets and industries, specializing in financial services, fintech, and digital transformation projects. My approach focuses on creating solutions that are not only visually appealing but also strategically aligned with business objectives.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`card p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
              >
                <h3 className={`text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                  {stat.value}
                </h3>
                <p className={`${typography.small} ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden">
            <img
              src={aboutImage}
              alt={aboutAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;