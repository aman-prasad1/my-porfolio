'use client';

export default function SocialSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aman-prasad1', // Replace with your actual GitHub username
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      description: 'Check out my code repositories and open source contributions',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:from-gray-500 hover:to-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/amanprasad1', // Replace with your actual LinkedIn username
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: 'Connect with me professionally and see my career journey',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      name: 'Email',
      url: 'mailto:amanprasad048@gmail.com', // Replace with your actual email
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Send me an email for collaboration or business inquiries',
      color: 'from-red-600 to-red-800',
      hoverColor: 'hover:from-red-500 hover:to-red-700'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/aman_prasad88', // Replace with your actual Instagram username
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.198 5.036.357a5.493 5.493 0 00-1.987 1.292 5.493 5.493 0 00-1.292 1.987C1.598 4.12 1.482 4.694 1.448 5.641 1.413 6.589 1.4 6.996 1.4 10.617s.013 4.028.048 4.976c.034.947.15 1.521.309 2.005a5.493 5.493 0 001.292 1.987 5.493 5.493 0 001.987 1.292c.484.159 1.058.275 2.005.309.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.15 2.005-.309a5.493 5.493 0 001.987-1.292 5.493 5.493 0 001.292-1.987c.159-.484.275-1.058.309-2.005.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.15-1.521-.309-2.005a5.493 5.493 0 00-1.292-1.987A5.493 5.493 0 0018.972.357C18.488.198 17.914.082 16.967.048 16.019.013 15.612 0 12.017 0zm0 2.17c3.548 0 3.97.014 5.374.048.832.038 1.283.177 1.584.294.398.155.682.34.98.638.298.298.483.582.638.98.117.301.256.752.294 1.584.034 1.404.048 1.826.048 5.374s-.014 3.97-.048 5.374c-.038.832-.177 1.283-.294 1.584-.155.398-.34.682-.638.98a2.64 2.64 0 01-.98.638c-.301.117-.752.256-1.584.294-1.404.034-1.826.048-5.374.048s-3.97-.014-5.374-.048c-.832-.038-1.283-.177-1.584-.294a2.64 2.64 0 01-.98-.638 2.64 2.64 0 01-.638-.98c-.117-.301-.256-.752-.294-1.584-.034-1.404-.048-1.826-.048-5.374s.014-3.97.048-5.374c.038-.832.177-1.283.294-1.584.155-.398.34-.682.638-.98.298-.298.582-.483.98-.638.301-.117.752-.256 1.584-.294 1.404-.034 1.826-.048 5.374-.048z"/>
          <path d="M12.017 15.33a4.713 4.713 0 110-9.426 4.713 4.713 0 010 9.426zm0-7.763a3.05 3.05 0 100 6.1 3.05 3.05 0 000-6.1z"/>
          <path d="M19.846 6.5a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
        </svg>
      ),
      description: 'Follow me for behind-the-scenes content and personal updates',
      color: 'from-pink-600 to-purple-600',
      hoverColor: 'hover:from-pink-500 hover:to-purple-500'
    }
  ];

  return (
    <section id="social-section" className="relative z-10 py-20 pt-32 bg-black/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in technology. 
            Reach out through any of these platforms!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${social.color} p-6 rounded-2xl border border-white/20 ${social.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  {social.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {social.name}
                </h3>
                
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {social.description}
                </p>
                
                <div className="mt-4 flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium mr-2">Connect</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you're looking for a developer for your next project, want to discuss technology, 
              or just want to say hi, I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:amanprasad048@gmail.com" // Replace with your actual email
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/amanprasad1" // Replace with your actual LinkedIn username
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
