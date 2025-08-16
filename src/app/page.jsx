
'use client';

import { useState } from 'react';
import { 
  AnimatedBackground, 
  HeroSection, 
  ProjectsSection, 
  ScrollIndicator 
} from '@/components';
import { projectsData } from '@/data/projects';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const handleViewMyWork = () => {
    setShowProjects(true);
    // Smooth scroll to projects section after a brief delay for animation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Hide projects after scroll completes
    setTimeout(() => {
      setShowProjects(false);
    }, 500);
  };

  return (
    <main className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Hero Section - Full height with fixed dimensions */}
      <div className="h-screen relative overflow-hidden">
        <HeroSection onViewWork={handleViewMyWork} />
        <ScrollIndicator showProjects={showProjects} />
      </div>
      
      {/* Projects Section - Conditional rendering with smooth transition */}
      {showProjects && (
        <div className="animate-slide-up overflow-x-hidden">
          <ProjectsSection 
            onBackToTop={handleBackToTop} 
            projects={projectsData} 
          />
        </div>
      )}
    </main>
  );
}
