'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const roles = ['Backend Navigator', 'Code Cartographer', 'System Architect'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const weapons = [
    'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'React'
  ];

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 4rem',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Compass Rose Avatar */}
      <div
        className={isLoaded ? 'animate-ink-bleed' : ''}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '3px solid var(--ink-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          position: 'relative',
          background: 'radial-gradient(circle at 40% 40%, var(--parchment-light), var(--parchment-mid))',
          boxShadow: '0 4px 20px rgba(44,24,16,0.15), inset 0 0 20px rgba(139,105,20,0.1)',
          animationDelay: '0.1s',
        }}
      >
        {/* Compass ring marks */}
        {['N', 'E', 'S', 'W'].map((dir, i) => (
          <span
            key={dir}
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.65rem',
              color: 'var(--ink-gold)',
              ...(i === 0 ? { top: '6px', left: '50%', transform: 'translateX(-50%)' } : {}),
              ...(i === 1 ? { right: '6px', top: '50%', transform: 'translateY(-50%)' } : {}),
              ...(i === 2 ? { bottom: '6px', left: '50%', transform: 'translateX(-50%)' } : {}),
              ...(i === 3 ? { left: '8px', top: '50%', transform: 'translateY(-50%)' } : {}),
            }}
          >
            {dir}
          </span>
        ))}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.2rem',
          color: 'var(--ink-dark)',
        }}>
          AP
        </span>
      </div>

      {/* Title */}
      <h1
        className={isLoaded ? 'animate-ink-bleed' : ''}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          color: 'var(--ink-dark)',
          textAlign: 'center',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(44,24,16,0.08)',
          animationDelay: '0.3s',
        }}
      >
        Captain Aman Prasad
      </h1>

      {/* Rotating Subtitle */}
      <div style={{
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
      }}>
        <p
          key={currentRole}
          className="animate-ink-bleed"
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'var(--ink-brown)',
            animationDuration: '0.5s',
          }}
        >
          ~ {roles[currentRole]} ~
        </p>
      </div>

      {/* Description */}
      <div
        className={isLoaded ? 'animate-fade-in-up' : ''}
        style={{
          maxWidth: '650px',
          textAlign: 'center',
          marginBottom: '2.5rem',
          animationDelay: '0.6s',
        }}
      >
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--ink-brown)',
          lineHeight: 1.8,
          marginBottom: '2rem',
        }}>
          Backend developer. B.Tech CSE, 2023–2027. Based in Kolkata.
          I think about latency, fault tolerance, and data consistency
          the way most people think about features. 1000+ algorithmic problems conquered.
        </p>

        {/* Tech Arsenal */}
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.9rem',
          color: 'var(--ink-gold)',
          marginBottom: '1rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          ⚔ Weapons in the Arsenal ⚔
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.6rem',
        }}>
          {weapons.map((tech, i) => (
            <span
              key={tech}
              className={`ink-stamp ${isLoaded ? 'animate-fade-in-up' : ''}`}
              style={{
                animationDelay: `${700 + i * 80}ms`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className={isLoaded ? 'animate-fade-in-up' : ''}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          animationDelay: '1.1s',
        }}
      >
        <button
          className="wax-btn"
          onClick={() => {
            const el = document.getElementById('voyages-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>🗺️</span> Explore the Map
        </button>
        <button
          className="wax-btn-outline"
          onClick={() => {
            const el = document.getElementById('contact-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>📜</span> Send a Scroll
        </button>
      </div>
    </section>
  );
}
