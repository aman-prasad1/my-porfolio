'use client';

import { useState, useEffect } from 'react';

export default function HeroSection({ onViewWork }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  const techStack = ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript'];

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Image Placeholder */}
        <div className="mt-2 mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-pulse-slow">
            AP
          </div>
        </div>

        {/* Greeting */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-gradient-x mb-4">
            Hi, I'm Aman
          </h1>
          <div className="h-16 mb-6 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in">
              {roles[currentRole]}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6 animate-slide-up animation-delay-500">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            Currently crafting amazing web applications with modern technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 border border-white/20 hover:bg-white/20 transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800">
          <button 
            onClick={onViewWork}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* Development Status */}
        <div className="mt-12 animate-slide-up animation-delay-1000">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <span className="text-sm">Portfolio Under Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}
