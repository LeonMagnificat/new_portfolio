import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { typography } from '@/styles/constants';
import { Globe, MapPin, ExternalLink } from 'lucide-react';

interface Location {
  id: number;
  country: string;
  city: string;
  projects: number;
  flagCode: string;
  description: string;
  continent: string;
}

interface GlobalFootprintMapProps {
  isDarkMode: boolean;
}

export const GlobalFootprintMap: React.FC<GlobalFootprintMapProps> = ({ isDarkMode }) => {
  const [activeContinent, setActiveContinent] = useState<string>('all');
  
  // Sample location data
  const locations: Location[] = [
    {
      id: 1,
      country: 'Rwanda',
      city: 'Kigali',
      projects: 12,
      flagCode: 'rw',
      description: 'Our headquarters and innovation hub, where we\'ve delivered digital solutions for government and private sector clients.',
      continent: 'Africa'
    },
    {
      id: 2,
      country: 'Poland',
      city: 'Warsaw',
      projects: 8,
      flagCode: 'pl',
      description: 'European base with focus on fintech and healthcare projects for clients across the EU.',
      continent: 'Europe'
    },
    {
      id: 3,
      country: 'USA',
      city: 'New York',
      projects: 15,
      flagCode: 'us',
      description: 'Our North American office specializing in enterprise solutions and startup partnerships.',
      continent: 'North America'
    },
    {
      id: 4,
      country: 'Sweden',
      city: 'Stockholm',
      projects: 6,
      flagCode: 'se',
      description: 'Nordic presence delivering cutting-edge UX/UI design for technology clients.',
      continent: 'Europe'
    }
  ];

  // Get unique continents
  const continents = ['all', ...Array.from(new Set(locations.map(location => location.continent)))];

  // Filter locations by continent
  const filteredLocations = activeContinent === 'all' 
    ? locations 
    : locations.filter(location => location.continent === activeContinent);

  // Calculate total projects
  const totalProjects = locations.reduce((sum, location) => sum + location.projects, 0);
  const totalCountries = new Set(locations.map(location => location.country)).size;

  return (
    <Section id="global-footprint" className="relative overflow-hidden">
      <SectionHeader
        title="Global Footprint"
        description="Delivering digital excellence across continents. Explore our worldwide project portfolio."
        isDarkMode={isDarkMode}
      />
      

      
      {/* Continent Filter */}
      <div className="flex justify-center mt-8 mb-8 overflow-x-auto">
        <div className="flex space-x-3">
          {continents.map(continent => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeContinent === continent
                  ? isDarkMode 
                    ? 'bg-pink-500 text-white' 
                    : 'bg-pink-600 text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {continent === 'all' ? 'All Regions' : continent}
            </button>
          ))}
        </div>
      </div>
      
      {/* Locations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredLocations.map((location) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: location.id * 0.1 % 0.8 }}
            viewport={{ once: true }}
            className={`p-4 rounded-xl transition-all ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white shadow-md'
            }`}
          >
            <div className="flex items-center">
              <img 
                src={`https://flagcdn.com/w40/${location.flagCode}.png`}
                alt={`${location.country} flag`}
                className="h-6 mr-3"
              />
              <div>
                <h3 className={`${typography.h5}`}>{location.country}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      

    </Section>
  );
};

export default GlobalFootprintMap;