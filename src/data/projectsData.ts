// Project data
// Using placeholder images until actual images are added to the assets directory
// These will be replaced with actual images from assets/projects when available

// UI/UX Projects
// Import images using Vite's import.meta.url feature
import meritiosImg from '../assets/projects/UIUX-meritios.png';
import consultfiedImg from '../assets/projects/UIUX-consultified.png';
import mobilaDoktorAdminImg from '../assets/projects/UIUXmobila.png';

// Use imported images or fallback to placeholders if they fail to load
const meritiosImage = meritiosImg || 'https://placehold.co/600x400/5271ff/ffffff?text=Meritios';
const consultfiedImage = consultfiedImg || 'https://placehold.co/600x400/52a0ff/ffffff?text=Consultfied';
const mobilaDoktorAdminImage = mobilaDoktorAdminImg || 'https://placehold.co/600x400/ff7a52/ffffff?text=MobilaDoktor+Admin';

// Development Projects
import solidAppsImg from '../assets/projects/solid.png';
import morphorosicCalcImg from '../assets/projects/Morphorosic.png';
import inoSaasImg from '../assets/projects/ino.png';

// Use imported images or fallback to placeholders
const solidAppsImage = solidAppsImg || 'https://placehold.co/600x400/52ff7a/ffffff?text=Solid+Apps';
const morphorosicCalcImage = morphorosicCalcImg || 'https://placehold.co/600x400/ffb952/ffffff?text=Morphorosic+Calculator';
const inoSaasImage = inoSaasImg || 'https://placehold.co/600x400/52d8ff/ffffff?text=Ino+SaaS';

// Branding Projects
import ndihoBrandingImg from '../assets/projects/branding-Ndiho.png';
import consultifiedBrandingImg from '../assets/projects/consultified-logo.png';

// Use imported images or fallback to placeholders
const ndihoBrandingImage = ndihoBrandingImg || 'https://placehold.co/600x400/ff5252/ffffff?text=Ndiho+Branding';
const consultifiedBrandingImage = consultifiedBrandingImg || 'https://placehold.co/600x400/a052ff/ffffff?text=Consultified+Branding';

export const projects = [
  // UI/UX Projects
  {
    id: 1,
    title: "Meritios",
    description: "SaaS platform shaping the future of internships in Sweden",
    image: meritiosImage,
    category: "uiux",
    tags: ["Figma", "UX Research", "User Testing", "Prototyping"],
    shortDescription: "Connecting students, schools, and companies for internships in Sweden",
    externalUrl: "https://meritios.com"
  },
  {
    id: 2,
    title: "Consultfied",
    description: "Streamlining consulting operations for Stockholm's booming industry",
    image: consultfiedImage,
    category: "uiux",
    tags: ["B2B SaaS", "UI Redesign", "Figma", "Prototyping"],
    shortDescription: "Matching consultants with project leads in Stockholm's consulting scene",
    externalUrl: "https://consultified.com"
  },
  {
    id: 3,
    title: "MobilaDoktor Admin",
    description: "Admin panel for efficient management of clients/users improving healthcare operations by 35%",
    image: mobilaDoktorAdminImage,
    category: "uiux",
    tags: ["Admin UI", "Design System", "Healthcare", "Internal Tools"],
    shortDescription: "Efficient client/user management system for healthcare operations"
  },
  
  // Development Projects
  {
    id: 4,
    title: "Solid Apps",
    description: "Mini SaaS platform for seamless group collaboration and project management",
    image: solidAppsImage,
    category: "development",
    tags: ["React", "Node.js", "MongoDB", "WebSockets", "Real-time"],
    shortDescription: "Enabling teams to collaborate efficiently with real-time updates and intuitive interfaces"
  },
  {
    id: 5,
    title: "Morphorosic Calculator",
    description: "A fun project created as part of an 'improve existing tools' campaign to enhance CSS/design skills",
    image: morphorosicCalcImage,
    category: "development",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    shortDescription: "Showcasing front-end skills with a visually stunning and functional calculator",
    externalUrl: "https://calculator-red-eta.vercel.app/"
  },
  {
    id: 6,
    title: "Ino SaaS",
    description: "Comprehensive SaaS solution for account managers to track client relationships",
    image: inoSaasImage,
    category: "development",
    tags: ["Vue.js", "Express", "PostgreSQL", "JWT", "RESTful API"],
    shortDescription: "Streamlining account management workflows with powerful data visualization",
    externalUrl: "https://ino-five.vercel.app/login"
  },
  
  // Branding Projects
  {
    id: 7,
    title: "Ndiho Branding",
    description: "Complete brand identity for a cultural storytelling platform",
    image: ndihoBrandingImage,
    category: "branding",
    tags: ["Logo Design", "Brand Identity", "Style Guide", "Cultural Design"],
    shortDescription: "Creating a brand that celebrates cultural heritage and modern storytelling"
  },
  {
    id: 8,
    title: "Consultified Branding",
    description: "Brand identity for a consulting operations platform in Stockholm",
    image: consultifiedBrandingImage,
    category: "branding",
    tags: ["Brand Strategy", "Visual Identity", "B2B Branding", "Digital Assets"],
    shortDescription: "Developing a professional brand identity for the consulting industry"
  },

];

// Testimonial data
export const testimonials = [
  {
    name: "David Chen",
    role: "CTO, Meritios",
    image: "https://illustrations.popsy.co/amber/business-man.svg",
    quote: "Designing for three distinct user types taught me to balance empathy with structure. I learned how to keep interfaces simple even when logic is complex."
  },

  {
    name: "Maria Andersson",
    role: "Operations Director, MobilaDoktor",
    image: "https://illustrations.popsy.co/amber/woman-with-laptop.svg",
    quote: "This project showed me the power of quiet UX — the kind that helps real teams work better without fanfare. Internal tools matter, and designing them with empathy is crucial."
  }
];

// Partners data
export const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png"
  }
];