import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ServicesSection } from '@/components/sections/Services';
import { ProjectsSection } from '@/components/sections/Projects';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/Contact';
import { GlobalFootprintMap } from '@/components/sections/GlobalFootprintMap';

interface HomePageProps {
  isDarkMode: boolean;
  images: {
    hero: {
      src: string;
      alt: string;
    };
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
    about: {
      team: {
        src: string;
        alt: string;
      };
    };
    contact: {
      message: {
        src: string;
        alt: string;
      };
    };
  };
  scrollToSection: (sectionId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ isDarkMode, images, scrollToSection }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero 
        isDarkMode={isDarkMode} 
        heroImage={images.hero.src} 
        heroAlt={images.hero.alt} 
        scrollToSection={scrollToSection} 
      />

      {/* About Section */}
      <AboutSection 
        isDarkMode={isDarkMode} 
        aboutImage={images.about.team.src} 
        aboutAlt={images.about.team.alt} 
      />

      {/* Services Section */}
      <ServicesSection 
        isDarkMode={isDarkMode} 
        services={images.services} 
      />

      {/* Projects/Portfolio Section */}
      <ProjectsSection 
        isDarkMode={isDarkMode} 
      />

      {/* Global Footprint Map Section */}
      <GlobalFootprintMap
        isDarkMode={isDarkMode}
      />

      {/* Testimonials Section - Hidden for now
      <TestimonialsSection 
        isDarkMode={isDarkMode} 
      /> */}

      {/* Contact Section */}
      <ContactSection 
        isDarkMode={isDarkMode} 
        contactImage={images.contact.message.src} 
        contactAlt={images.contact.message.alt} 
      />
    </>
  );
};

export default HomePage;