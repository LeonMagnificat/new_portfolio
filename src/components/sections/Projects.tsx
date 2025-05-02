import React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { ProjectGallery } from '@/components/ui/ProjectGallery';
import { projects } from '@/data/projectsData';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  return (
    <Section id="portfolio">
      <SectionHeader 
        title="My Projects" 
        isDarkMode={isDarkMode}
      />
      
      <ProjectGallery 
        projects={projects}
        isDarkMode={isDarkMode}
      />
    </Section>
  );
};

export default ProjectsSection;