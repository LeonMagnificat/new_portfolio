// Typography styles
export const typography = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
  h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
  h3: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
  h4: 'text-xl sm:text-2xl lg:text-3xl font-bold',
  h5: 'text-lg sm:text-xl font-semibold',
  lead: 'text-lg sm:text-xl font-medium',
  body: 'text-base sm:text-lg',
  small: 'text-sm sm:text-base'
};

// Spacing values
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3.5rem',
  '2xl': '4.5rem'
};

// Color schemes
export const colors = {
  primary: {
    light: 'bg-white text-black hover:bg-gray-100',
    dark: 'bg-black text-white hover:bg-gray-800'
  },
  secondary: {
    light: 'bg-transparent border border-black text-black hover:bg-black/5',
    dark: 'bg-transparent border border-white text-white hover:bg-white/10'
  }
};

// Background shapes configuration
export const shapes = [
  { id: 1, size: 4, x: '10%', y: '20%', delay: 0, color: 'from-purple-500/20 to-pink-500/40' },
  { id: 2, size: 6, x: '80%', y: '40%', delay: 0.2, color: 'from-blue-500/20 to-cyan-500/40' },
  { id: 3, size: 3, x: '30%', y: '60%', delay: 0.4, color: 'from-green-500/20 to-emerald-500/40' },
  { id: 4, size: 5, x: '70%', y: '80%', delay: 0.6, color: 'from-yellow-500/20 to-orange-500/40' },
  { id: 5, size: 4, x: '50%', y: '30%', delay: 0.8, color: 'from-red-500/20 to-pink-500/40' },
  { id: 6, size: 8, x: '20%', y: '70%', delay: 1.0, color: 'from-indigo-500/20 to-violet-500/40' },
  { id: 7, size: 2, x: '60%', y: '10%', delay: 1.2, color: 'from-teal-500/20 to-cyan-500/40' },
  { id: 8, size: 7, x: '40%', y: '50%', delay: 1.4, color: 'from-amber-500/20 to-yellow-500/40' },
  { id: 9, size: 5, x: '90%', y: '60%', delay: 1.6, color: 'from-rose-500/20 to-pink-500/40' },
  { id: 10, size: 3, x: '15%', y: '40%', delay: 1.8, color: 'from-sky-500/20 to-blue-500/40' },
  { id: 11, size: 6, x: '75%', y: '25%', delay: 2.0, color: 'from-lime-500/20 to-green-500/40' },
  { id: 12, size: 4, x: '25%', y: '85%', delay: 2.2, color: 'from-fuchsia-500/20 to-purple-500/40' },
];

// Font styles
export const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');
  
  :root {
    --spacing-xs: ${spacing.xs};
    --spacing-sm: ${spacing.sm};
    --spacing-md: ${spacing.md};
    --spacing-lg: ${spacing.lg};
    --spacing-xl: ${spacing.xl};
    --spacing-2xl: ${spacing['2xl']};
  }
  
  body {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }
  
  .section {
    padding: var(--spacing-2xl) 0;
  }
  
  .container {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
    margin: 0 auto;
    max-width: 1280px;
  }
  
  .card {
    transition: all 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-4px);
  }
  
  .button {
    transition: all 0.2s ease;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
  }
  
  .button:hover {
    transform: translateY(-1px);
  }
  
  .gradient-text {
    background-size: 200% 200%;
    animation: gradientAnimation 8s ease infinite;
  }
  
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .hero-title {
    font-family: 'Libre Baskerville', serif;
  }
`;