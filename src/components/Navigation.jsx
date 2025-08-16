'use client';

export default function Navigation({ onViewWork, onViewSkills, onContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
          >
            Portfolio
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Home
            </button>
            <button 
              onClick={onViewWork}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Projects
            </button>
            <button 
              onClick={onViewSkills}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Skills
            </button>
            <button 
              onClick={onContact}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
