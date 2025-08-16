
'use client';

import { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import SocialSection from '../components/SocialSection';
import ScrollIndicator from '../components/ScrollIndicator';
import Navigation from '../components/Navigation';
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

  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollToContact = () => {
    const socialSection = document.getElementById('social-section');
    if (socialSection) {
      socialSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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
        <HeroSection 
          onViewWork={handleViewMyWork}
          onViewSkills={handleScrollToSkills}
          onContact={handleScrollToContact}
        />
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
      
      {/* Skills Section - Always visible */}
      <div className="overflow-x-hidden">
        <SkillsSection />
      </div>
      
      {/* Social/Connect Section - Always visible */}
      <div className="overflow-x-hidden">
        <SocialSection />
      </div>
    </main>
  );
}
