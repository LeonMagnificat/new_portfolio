import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { ContactForm } from '@/components/ui/ContactForm';
import { Card } from '@/components/ui/card';
import { typography } from '@/styles/constants';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
  contactImage: string;
  contactAlt: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  isDarkMode, 
  contactImage, 
  contactAlt 
}) => {
  return (
    <Section id="contact">
      <SectionHeader 
        title="Get In Touch" 
        isDarkMode={isDarkMode}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg space-y-8`}
        >
          <div className="mb-6">
            <h3 className={`${typography.h4} mb-4`}>Contact Information</h3>
            <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Fill out the form or contact me directly using the information below.
            </p>
          </div>
          
          <Card className={`overflow-hidden shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <img
              src={contactImage}
              alt={contactAlt}
              className="w-full h-48 object-cover"
            />
          </Card>
          
          <div className="space-y-6">
            <ContactInfo 
              icon={<MapPin className="w-5 h-5" />}
              title="Our Location"
              content={
                <>
                  Gdynia<br />
                  Poland
                </>
              }
              isDarkMode={isDarkMode}
            />

            <ContactInfo 
              icon={<Phone className="w-5 h-5" />}
              title="Phone"
              content={
                <>
                  +48 791 676 244
                </>
              }
              isDarkMode={isDarkMode}
            />

            <ContactInfo 
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              content={
                <>
                  leonkwizera.pl@gmail.com
                </>
              }
              isDarkMode={isDarkMode}
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}
        >
          <div className="mb-6">
            <h3 className={`${typography.h4} mb-4`}>Send Me a Message</h3>
            <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm isDarkMode={isDarkMode} />
        </motion.div>
      </div>
    </Section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  isDarkMode: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, isDarkMode }) => {
  return (
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-full ${
        isDarkMode ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'
      }`}>
        {icon}
      </div>
      <div>
        <h3 className={`${typography.h5} mb-2`}>{title}</h3>
        <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {content}
        </p>
      </div>
    </div>
  );
};



export default ContactSection;