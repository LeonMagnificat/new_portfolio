import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Routes, Route } from 'react-router-dom';
import { fontStyles } from './styles/constants';

// Components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackgroundShapes } from '@/components/ui/BackgroundShapes';

// Pages
import HomePage from '@/pages/HomePage';
import CaseStudyPage from '@/pages/CaseStudyPage';

// Assets
import heroIllustration from "./assets/illustrations/hero.svg";
import heroDarkIllustration from "./assets/illustrations/hero-dark.svg";
import leonImage from "./assets/leon.jpeg";
import webdevIllustration from "./assets/illustrations/webdev.svg";
import uiuxIllustration from "./assets/illustrations/ui:ux.svg";
import brandingIllustration from "./assets/illustrations/branding.svg";
import contactIllustration from "./assets/illustrations/about.svg";

const App: React.FC = () => {
  const skillsChartRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Images configuration
  const images = {
    hero: {
      src: isDarkMode ? heroDarkIllustration : heroIllustration,
      alt: "Digital Experience"
    },
    services: {
      uiux: {
        src: uiuxIllustration,
        alt: "UI/UX Design"
      },
      development: {
        src: webdevIllustration,
        alt: "Web Development"
      },
      mobile: {
        src: brandingIllustration,
        alt: "Logo & Branding"
      }
    },
    about: {
      team: {
        src: leonImage,
        alt: "Leon Kwizera"
      }
    },
    contact: {
      message: {
        src: contactIllustration,
        alt: "Contact Us"
      }
    }
  };

  // Scroll tracking effect (commented out as not currently used)
  /*
  useEffect(() => {
    // Only set up scroll tracking on the home page
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'about-me', 'portfolio', 'services', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);
  */

  useEffect(() => {
    if (skillsChartRef.current) {
      const chart = echarts.init(skillsChartRef.current);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'UX/UI Design', max: 100 },
            { name: 'React', max: 100 }, 
            { name: 'Node.js', max: 100 },
            { name: 'MongoDB', max: 100 },
            { name: 'Express', max: 100 }
          ],
          radius: 120,
          splitNumber: 4,
          axisName: {
            color: '#333',
            fontSize: 14
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(250, 250, 250, 0.5)', 'rgba(240, 240, 240, 0.5)', 'rgba(230, 230, 230, 0.5)', 'rgba(220, 220, 220, 0.5)']
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        },
        series: [{
          name: 'Skills',
          type: 'radar',
          data: [
            {
              value: [95, 90, 85, 88, 87],
              name: 'Skills',
              areaStyle: {
                color: 'rgba(64, 158, 255, 0.6)'
              },
              lineStyle: {
                color: '#409EFF',
                width: 2
              },
              itemStyle: {
                color: '#409EFF'
              }
            }
          ]
        }]
      };
      
      chart.setOption(option);
      
      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{fontStyles}</style>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Background Shapes */}
        <BackgroundShapes />

        {/* Header */}
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
          scrollToSection={scrollToSection} 
        />

        <Routes>
          <Route path="/" element={
            <HomePage 
              isDarkMode={isDarkMode}
              images={images}
              scrollToSection={scrollToSection}
            />
          } />
          <Route path="/case-study/:id" element={
            <CaseStudyPage 
              isDarkMode={isDarkMode}
            />
          } />
        </Routes>

        {/* Footer */}
        <Footer 
          isDarkMode={isDarkMode} 
        />
      </div>
    </>
  );
};

export default App;