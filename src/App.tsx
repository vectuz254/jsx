import React from 'react';
import HeroSection from './components/HeroSection.tsx';
import MarqueeSection from './components/MarqueeSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';

export const App: React.FC = () => {
  return (
    <main
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default App;
