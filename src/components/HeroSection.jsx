'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const roles = ['Backend Developer', 'Systems Engineer', 'Competitive Programmer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const coreSkills = ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'C++'];

  return (
    <section className="section-wrapper" style={{
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '7.5rem',
      paddingBottom: '3.5rem',
    }}>
      <div className="bento-grid" style={{ width: '100%', alignItems: 'center' }}>
        
        {/* Left Column: Bio and CTAs */}
        <div className="bento-col-8 animate-fade-in" style={{
          animationDelay: '100ms',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          {/* Greeting Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '30px',
            background: 'rgba(212, 180, 141, 0.08)',
            border: '1px solid rgba(212, 180, 141, 0.15)',
            color: 'var(--accent-gold)',
            fontSize: '0.88rem',
            fontWeight: '500',
            fontFamily: 'var(--font-heading)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ display: 'inline-block', transform: 'rotate(0deg)' }}>👋</span> Welcome to my space
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: '800',
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-heading)',
          }}>
            Hi, I&apos;m <span style={{
              background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent-gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Aman Prasad</span>
          </h1>

          {/* Animated Subtitle Role */}
          <div style={{
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}>
            <p key={currentRole} style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
              color: 'var(--accent-teal)',
              fontWeight: '500',
              animation: 'fadeInUp 0.5s ease-out forwards',
              letterSpacing: '-0.01em',
            }}>
              &lt; {roles[currentRole]} /&gt;
            </p>
          </div>

          {/* Bio text */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.12rem)',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            lineHeight: 1.7,
            marginBottom: '2.25rem',
          }}>
            I am a Backend Developer based in Kolkata, pursuing my B.Tech in CSE (2023–2027). 
            I engineer high-performance systems focusing on low-latency, fault-tolerance, and database consistency, 
            backed by a strong foundation in data structures with over 1000+ challenges solved.
          </p>

          {/* Core Tech Chips */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.4)',
              letterSpacing: '0.12em',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-heading)',
            }}>
              Primary Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {coreSkills.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>

          {/* CTA Group */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <button 
              className="btn-premium shimmer-glow" 
              onClick={() => {
                document.getElementById('voyages-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ minWidth: '150px', justifyContent: 'center' }}
            >
              View Projects
            </button>
            <button 
              className="btn-premium-secondary"
              onClick={() => {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ minWidth: '150px', justifyContent: 'center' }}
            >
              Get In Touch
            </button>
            <a
              href="/Aman_Prasad_Resume.pdf"
              download
              className="btn-premium-secondary"
              style={{ 
                minWidth: '150px', 
                justifyContent: 'center',
                border: '1px solid rgba(212, 180, 141, 0.25)',
                background: 'rgba(212, 180, 141, 0.03)'
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Headshot Portrait */}
        <div className="bento-col-4 animate-fade-in" style={{
          animationDelay: '300ms',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div className="portrait-container" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '340px',
            aspectRatio: '1',
            borderRadius: '24px',
            padding: '8px',
            background: 'linear-gradient(135deg, rgba(212,180,141,0.2) 0%, rgba(127,174,166,0.1) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255,255,255,0.05)',
            transition: 'var(--transition-smooth)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '18px',
              overflow: 'hidden',
              background: 'var(--bg-secondary)',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Aman_Prasad.png"
                alt="Aman Prasad Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition-smooth)',
                }}
                className="profile-img"
              />
            </div>
            
            {/* Glow Backing Accent (hidden by default, shows glow reflection) */}
            <div className="portrait-glow" style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '34px',
              background: 'radial-gradient(circle, rgba(212,180,141,0.18) 0%, transparent 70%)',
              zIndex: -1,
              pointerEvents: 'none',
              transition: 'var(--transition-smooth)',
            }} />
          </div>
        </div>

      </div>

      <style jsx>{`
        .portrait-container:hover {
          transform: translateY(-8px) scale(1.02);
          background: linear-gradient(135deg, rgba(212,180,141,0.35) 0%, rgba(127,174,166,0.2) 100%);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.65), 
            0 0 30px rgba(212, 180, 141, 0.15);
        }
        .portrait-container:hover .profile-img {
          transform: scale(1.04);
        }
        .portrait-container:hover .portrait-glow {
          inset: '-20px';
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
