'use client';

import AnimatedBackground from '../components/AnimatedBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import SocialSection from '../components/SocialSection';
import ScrollIndicator from '../components/ScrollIndicator';
import { projectsData } from '@/data/projects';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground />
      <Navigation />

      {/* Hero — Full viewport */}
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <HeroSection />
        <ScrollIndicator />
      </div>

      {/* Projects */}
      <ProjectsSection projects={projectsData} />

      {/* Skills */}
      <SkillsSection />

      {/* Contact / Social */}
      <SocialSection />
    </main>
  );
}
