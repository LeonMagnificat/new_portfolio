import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Code, Layers, PenTool } from 'lucide-react';
import { typography } from '@/styles/constants';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  tags?: string[];
  externalUrl?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
  isDarkMode: boolean;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects, isDarkMode }) => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories from projects
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category || 'other')))];

  // Filter projects by category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Get category icon
  const getCategoryIcon = (category?: string) => {
    switch(category) {
      case 'development':
        return <Code className="w-4 h-4 mr-1" />;
      case 'uiux':
        return <Layers className="w-4 h-4 mr-1" />;
      case 'branding':
        return <PenTool className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  // Handle project click - for UI/UX projects with externalUrl, open that URL
  // otherwise go to case study page
  const handleProjectClick = (project: Project) => {
    if (project.category === 'uiux') {
      if (project.externalUrl) {
        window.open(project.externalUrl, '_blank');
      } else {
        navigate(`/case-study/${project.id}`);
      }
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div className="w-full">
      {/* Category filters */}
      <div className="flex justify-center mb-12 overflow-x-auto pb-2">
        <div className="flex space-x-3">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant="outline"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? isDarkMode 
                    ? 'bg-white text-black border-white' 
                    : 'bg-black text-white border-black'
                  : isDarkMode
                    ? 'bg-transparent text-white border-gray-600 hover:bg-white/10'
                    : 'bg-transparent text-black border-gray-300 hover:bg-black/5'
              }`}
            >
              {getCategoryIcon(category === 'all' ? undefined : category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
              layout
            >
              <Card 
                className={`group relative h-full overflow-hidden rounded-xl transition-all duration-500 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } shadow-md hover:shadow-xl cursor-pointer`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-black/50 to-transparent'
                  }`} />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'uiux' 
                        ? 'bg-pink-500/30 text-pink-100 backdrop-blur-sm' 
                        : 'bg-white/20 text-white backdrop-blur-sm'
                    }`}>
                      {getCategoryIcon(project.category)}
                      {project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : 'Other'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${typography.h4} mb-2 group-hover:text-blue-500 transition-colors`}>
                    {project.title}
                  </h3>
                  <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className={`px-2 py-1 text-xs rounded-md ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      className={`group-hover:translate-x-1 transition-transform ${
                        project.category === 'uiux'
                          ? isDarkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-700'
                          : isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      {project.category === 'uiux' 
                        ? (project.externalUrl ? 'Preview' : 'View Case Study') 
                        : 'View Project'} 
                      {project.externalUrl 
                        ? <ExternalLink className="ml-2 h-4 w-4" />
                        : <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project detail modal (for non-UI/UX projects) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`relative max-w-5xl w-full rounded-2xl overflow-hidden ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-2xl`}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="grid md:grid-cols-2 h-full">
                <div className="h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <div className="mb-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode 
                        ? 'bg-blue-900/50 text-blue-200' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {getCategoryIcon(selectedProject.category)}
                      {selectedProject.category ? selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1) : 'Other'}
                    </span>
                  </div>
                  
                  <h2 className={`${typography.h2} mb-4`}>{selectedProject.title}</h2>
                  
                  <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                    {selectedProject.description}
                  </p>
                  
                  {/* Extended description for modal */}
                  {/* <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                    Our team worked closely with the client to deliver a solution that exceeded expectations. 
                    The project was completed on time and within budget, resulting in significant improvements 
                    to their business operations.
                  </p> */}
                  
                  {/* Tags */}
                  {selectedProject.tags && selectedProject.tags.length > 0 && (
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className={`px-3 py-1 text-sm rounded-md ${
                              isDarkMode 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto flex gap-4">
                    <Button className="flex-1 gap-2">
                      Request Similar Project
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (selectedProject.externalUrl) {
                          window.open(selectedProject.externalUrl, '_blank');
                        }
                      }}
                      disabled={!selectedProject.externalUrl}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;