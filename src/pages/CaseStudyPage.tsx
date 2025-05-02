import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projectsData';
import { typography } from '@/styles/constants';

// Case study data
const caseStudyData = {
  1: { // Meritios (UI/UX project)
    client: 'Meritios',
    logo: 'https://via.placeholder.com/150x50',
    industry: 'Education Technology',
    services: ['UI/UX Design', 'SaaS Platform Design', 'User Research'],
    country: 'Sweden',
    year: '2023',
    tools: ['Figma', 'Miro', 'Maze'],
    challenge: 'In Sweden, students, schools, and companies often struggle to connect effectively for internships. There was no smooth, transparent system to manage these relationships, leading to missed opportunities, paperwork chaos, and disengaged users.',
    process: [
      {
        title: 'Research',
        description: 'Interviewed students, university staff, and HR leads in Sweden to understand their pain points.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Personas',
        description: 'Created 3 key personas to align the team\'s focus: students, company representatives, and school administrators.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'User Flows & Wireframes',
        description: 'Mapped out the end-to-end flow for internship application, approval, and tracking.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Design & Validation',
        description: 'Designed intuitive dashboards for all user types using Figma. Conducted 2 usability testing rounds with students and school admins.',
        image: 'https://via.placeholder.com/600x400'
      }
    ],
    solution: 'We delivered a clear, modular dashboard with a student-friendly application portal, company-side internship posting manager, and school-side validation and reporting tool. The design focused on simplicity and trust, ensuring each user type could easily navigate the platform and get value.',
    results: [
      'Reduced onboarding time by 45% for schools (measured in pilot)',
      'Students reported 70% more confidence navigating internship processes',
      'Companies saw cleaner applicant pipelines',
      'Simplified the internship management process for all stakeholders'
    ],
    testimonial: {
      quote: "Designing for three distinct user types taught me to balance empathy with structure. I learned how to keep interfaces simple even when logic is complex.",
      author: "David Chen",
      position: "CTO, Meritios"
    }
  },
  2: { // MobilaDoktor (UI/UX project)
    client: 'MobilaDoktor',
    logo: 'https://via.placeholder.com/150x50',
    industry: 'Healthcare',
    services: ['UI/UX Design', 'Mobile App Design', 'User Research'],
    country: 'Sweden',
    year: '2023',
    tools: ['Figma', 'Adobe XD', 'Miro'],
    challenge: 'MobilaDoktor needed a complete redesign of their healthcare app to improve patient scheduling and make the interface more intuitive for elderly users. The existing app had poor usability metrics and high drop-off rates.',
    process: [
      {
        title: 'User Research',
        description: 'Conducted interviews with 20+ patients and healthcare providers to understand pain points.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Wireframing',
        description: 'Created low-fidelity wireframes focusing on simplified navigation and accessibility.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'UI Design',
        description: 'Developed a clean, high-contrast interface with larger touch targets for elderly users.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Usability Testing',
        description: 'Conducted testing sessions with target users to refine the experience.',
        image: 'https://via.placeholder.com/600x400'
      }
    ],
    solution: 'We delivered a completely redesigned mobile application with an intuitive appointment booking system, medication reminders, and simplified doctor communication features. The new design incorporated accessibility features for elderly users while maintaining a modern aesthetic.',
    results: [
      '30% improvement in patient scheduling efficiency',
      '45% reduction in appointment cancellations',
      '92% user satisfaction rate in post-launch surveys',
      'Featured in Swedish Healthcare Technology magazine'
    ],
    testimonial: {
      quote: "Ubu's redesign transformed our app from a pain point to our most valuable patient touchpoint. The thoughtful UX improvements have directly contributed to better patient outcomes.",
      author: "Maria Andersson",
      position: "CTO, MobilaDoktor"
    }
  },

  2: { // Consultfied (UI/UX project)
    client: 'Consultfied',
    logo: 'https://via.placeholder.com/150x50',
    industry: 'Consulting Technology',
    services: ['UI/UX Design', 'B2B SaaS Design', 'Prototyping'],
    country: 'Sweden',
    year: '2023',
    tools: ['Figma', 'Miro', 'Maze'],
    challenge: 'Stockholm\'s booming consulting scene lacked a centralized tool for matching consultants with project leads. Spreadsheets and emails were the norm — wasting time and causing lost opportunities.',
    process: [
      {
        title: 'Heuristic Review',
        description: 'Conducted a thorough evaluation of the MVP to identify key usability issues.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Journey Mapping',
        description: 'Defined the complete journey of how consultants get matched with opportunities.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'UI Redesign',
        description: 'Refreshed the visual identity with a professional, confident feel appropriate for B2B.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Prototyping & Feedback',
        description: 'Built interactive prototypes in Figma and collected feedback from consulting firms.',
        image: 'https://via.placeholder.com/600x400'
      }
    ],
    solution: 'An intuitive dashboard where admins can manage consultants with tag-based search, opportunities are smart-matched to consultants, and status tracking for leads is visual and fast.',
    results: [
      'Increased lead conversion visibility by 60%',
      'Helped raise early funding thanks to improved UX in investor demos',
      'Received direct praise from consulting firms on ease of navigation',
      'Streamlined the consultant matching process from days to hours'
    ],
    testimonial: {
      quote: "Consultfied taught me how to work fast, iterate with live feedback, and design for trust in B2B environments. Every design decision was tied to real business needs.",
      author: "Erik Lindström",
      position: "Founder, Consultfied"
    }
  },
  3: { // MobilaDoktor Admin (UI/UX project)
    client: 'MobilaDoktor',
    logo: 'https://via.placeholder.com/150x50',
    industry: 'Healthcare Technology',
    services: ['UI/UX Design', 'Admin Panel Design', 'Design System'],
    country: 'Sweden',
    year: '2023',
    tools: ['Figma', 'Sketch', 'Zeplin'],
    challenge: 'MobilaDoktor is a telehealth platform. Their internal admin panel was a patchwork of inconsistent interfaces, making it hard for the team to manage permissions, content, and user data efficiently.',
    process: [
      {
        title: 'System Audit',
        description: 'Conducted a thorough audit of the current admin system to identify UX gaps and pain points.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Stakeholder Interviews',
        description: 'Interviewed internal staff who manage permissions and app content to understand their needs.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Information Architecture',
        description: 'Simplified information hierarchy by grouping features by role and frequency of use.',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        title: 'Design System Creation',
        description: 'Developed a consistent set of UI components to ensure visual and functional coherence.',
        image: 'https://via.placeholder.com/600x400'
      }
    ],
    solution: 'A role-based admin panel with a clean layout and clear permission levels, quick-access dashboards for data views and edits, and a responsive design for tablet use during offsite events.',
    results: [
      'Admin team reduced daily task time by 35%',
      'Fewer data input errors reported after launch',
      'Staff felt more confident using the platform — feedback: "It finally feels like a tool built for us"',
      'Reduced training time for new admin staff by 40%'
    ],
    testimonial: {
      quote: "This project showed me the power of quiet UX — the kind that helps real teams work better without fanfare. Internal tools matter, and designing them with empathy is crucial.",
      author: "Maria Andersson",
      position: "Operations Director, MobilaDoktor"
    }
  }
};

interface CaseStudyPageProps {
  isDarkMode: boolean;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ isDarkMode }) => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const currentProject = projects.find(p => p.id === projectId);
      
      if (currentProject) {
        setProject(currentProject);
        setCaseStudy(caseStudyData[projectId as keyof typeof caseStudyData]);
        
        // Find next UI/UX project for the "Next Project" button
        const uiuxProjects = projects.filter(p => p.category === 'uiux');
        const currentIndex = uiuxProjects.findIndex(p => p.id === projectId);
        const nextIndex = (currentIndex + 1) % uiuxProjects.length;
        setNextProject(uiuxProjects[nextIndex]);
      }
    }
  }, [id]);

  if (!project || !caseStudy) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className={typography.h1}>Case Study Not Found</h1>
        <p className={typography.body}>The case study you're looking for doesn't exist or is still in development.</p>
        <Link to="/">
          <Button className="mt-8">
            Return to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={`pt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section - Minimalist */}
      <section className="py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Link to="/#portfolio" className="inline-flex items-center mb-8 text-pink-500 hover:text-pink-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  isDarkMode ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-800'
                }`}>
                  {project.category === 'uiux' ? 'UI/UX Design' : project.category}
                </span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {caseStudy.year}
                </span>
              </div>
              
              <h1 className={`${typography.h1} mb-6`}>{project.title}</h1>
              <p className={`${typography.lead} max-w-2xl mb-8`}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags && project.tags.map((tag: string, index: number) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 text-sm rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Overview Section - Clean grid */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/70'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className={`text-sm uppercase font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Industry</h3>
              <p className={typography.h5}>{caseStudy.industry}</p>
            </div>
            <div>
              <h3 className={`text-sm uppercase font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Services</h3>
              <p className={typography.h5}>{caseStudy.services.join(', ')}</p>
            </div>
            <div>
              <h3 className={`text-sm uppercase font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Country</h3>
              <p className={typography.h5}>{caseStudy.country}</p>
            </div>
            <div>
              <h3 className={`text-sm uppercase font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Tools</h3>
              <p className={typography.h5}>{caseStudy.tools.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section - Single column with featured image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image - Only one main image */}
            <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={`${project.title} Project`} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Challenge */}
            <div className="mb-16">
              <h2 className={`${typography.h2} mb-6`}>The Challenge</h2>
              <p className={`${typography.body} text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {caseStudy.challenge}
              </p>
            </div>
            
            {/* Process - Timeline style without images */}
            <div className="mb-16">
              <h2 className={`${typography.h2} mb-8`}>The Process</h2>
              
              <div className="space-y-12">
                {caseStudy.process.map((step: any, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-pink-500"
                  >
                    <div className="absolute top-0 left-0 w-4 h-4 -ml-[9px] rounded-full bg-pink-500" />
                    <h3 className={`${typography.h4} mb-3`}>{index + 1}. {step.title}</h3>
                    <p className={`${typography.body} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Solution */}
            <div className="mb-16">
              <h2 className={`${typography.h2} mb-6`}>The Solution</h2>
              <p className={`${typography.body} text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section - Minimal cards */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/70'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={`${typography.h2} mb-10`}>Results & Impact</h2>
            
            <div className="space-y-4 mb-16">
              {caseStudy.results.map((result: string, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  <div className="text-pink-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className={`${typography.body} text-lg`}>{result}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Testimonial - Simplified */}
            <div className={`border-l-4 border-pink-500 pl-6 py-2 ${
              isDarkMode ? 'bg-transparent' : 'bg-transparent'
            }`}>
              <blockquote>
                <p className={`${typography.lead} italic mb-4`}>"{caseStudy.testimonial.quote}"</p>
                <footer>
                  <p className={`${typography.h5} text-pink-500`}>{caseStudy.testimonial.author}</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{caseStudy.testimonial.position}</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - Minimal */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            {nextProject && (
              <div>
                <p className={`text-sm uppercase font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Next Case Study</p>
                <Link to={`/case-study/${nextProject.id}`} className="group inline-flex items-center gap-2">
                  <span className={`${typography.h5} group-hover:text-pink-500 transition-colors`}>{nextProject.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
            
            <Link to="/#contact">
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;