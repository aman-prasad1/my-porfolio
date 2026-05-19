'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const roles = ['Backend Navigator', 'Code Cartographer', 'System Architect'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentRole(p => (p + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const weapons = ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'AWS', 'React'];

  return (
    <section className="hero-container">
      {/* Animated Compass Rose — draws itself */}
      <div className="hero-compass" style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s ease',
      }}>
        <svg viewBox="0 0 200 200" fill="none">
          {/* Outer rings — draw animation */}
          <circle className="compass-draw" cx="100" cy="100" r="92" stroke="#8b6914" strokeWidth="1.5" opacity="0.6" />
          <circle className="compass-draw" cx="100" cy="100" r="85" stroke="#8b6914" strokeWidth="0.8" opacity="0.3" style={{ animationDelay: '0.3s' }} />
          <circle className="compass-draw" cx="100" cy="100" r="78" stroke="#5c3a1e" strokeWidth="1" opacity="0.4" style={{ animationDelay: '0.6s' }} />

          {/* Tick marks */}
          {Array.from({ length: 36 }, (_, i) => i * 10).map((angle) => (
            <line key={angle}
              x1="100" y1={angle % 90 === 0 ? 12 : angle % 30 === 0 ? 16 : 20}
              x2="100" y2={angle % 90 === 0 ? 26 : 24}
              stroke="#5c3a1e"
              strokeWidth={angle % 90 === 0 ? 2 : 0.8}
              opacity={angle % 90 === 0 ? 0.8 : 0.3}
              transform={`rotate(${angle} 100 100)`}
            />
          ))}

          {/* Cardinal directions */}
          {[
            { d: 'N', a: 0, y: -62 },
            { d: 'E', a: 90, y: -62 },
            { d: 'S', a: 180, y: -62 },
            { d: 'W', a: 270, y: -62 },
          ].map(({ d, a, y }) => (
            <text key={d} x="100" y="100" fill="#5c3a1e" fontSize="12"
              fontFamily="MedievalSharp" textAnchor="middle" fontWeight="bold"
              transform={`rotate(${a} 100 100) translate(0, ${y})`}>
              {d}
            </text>
          ))}

          {/* Compass star — main */}
          <g className="compass-outer">
            {/* Major points (N, E, S, W) */}
            <polygon points="100,22 105,80 100,72 95,80" fill="#8b6914" opacity="0.9" />
            <polygon points="100,178 105,120 100,128 95,120" fill="#c4a77d" opacity="0.7" />
            <polygon points="22,100 80,95 72,100 80,105" fill="#c4a77d" opacity="0.7" />
            <polygon points="178,100 120,95 128,100 120,105" fill="#c4a77d" opacity="0.7" />
            {/* Minor points */}
            <polygon points="42,42 88,88 82,84 84,82" fill="#d4a853" opacity="0.4" />
            <polygon points="158,42 112,88 118,84 116,82" fill="#d4a853" opacity="0.4" />
            <polygon points="42,158 88,112 82,116 84,118" fill="#d4a853" opacity="0.4" />
            <polygon points="158,158 112,112 118,116 116,118" fill="#d4a853" opacity="0.4" />
          </g>

          {/* Needle — wobbles */}
          <g className="compass-needle">
            <polygon points="100,30 103,95 100,90 97,95" fill="#8b1a1a" opacity="0.85" />
            <polygon points="100,170 103,105 100,110 97,105" fill="#2c1810" opacity="0.45" />
          </g>

          {/* Center */}
          <circle cx="100" cy="100" r="6" fill="#5c3a1e" />
          <circle cx="100" cy="100" r="3" fill="#8b6914" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="hero-title">Aman Prasad</h1>

      {/* Rotating role */}
      <div className="hero-subtitle-wrap">
        <p key={currentRole} className="hero-subtitle">
          ~ {roles[currentRole]} ~
        </p>
      </div>

      {/* Bio */}
      <p className="hero-bio" style={{ marginBottom: '2rem' }}>
        Backend developer forged in Kolkata. B.Tech CSE, 2023–2027.
        I obsess over latency, fault tolerance, and data consistency.
        1000+ algorithmic problems conquered across the digital seas.
      </p>

      {/* Weapons */}
      <div style={{
        textAlign: 'center', marginBottom: '2.5rem',
        animation: 'ink-appear 1s ease-out 1.2s both',
      }}>
        <p style={{
          fontFamily: 'var(--font-heading)', fontSize: '0.85rem',
          color: 'var(--ink-gold)', marginBottom: '0.75rem',
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          ⚔ Weapons in the Arsenal ⚔
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
          {weapons.map((tech) => (
            <span key={tech} className="ink-stamp">{tech}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center',
        animation: 'ink-appear 1s ease-out 1.5s both',
      }}>
        <button className="wax-btn" onClick={() => {
          document.getElementById('voyages-section')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span>🗺️</span> Explore the Map
        </button>
        <button className="wax-btn-outline" onClick={() => {
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span>📜</span> Send a Scroll
        </button>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" style={{ marginTop: '3rem' }}>
        <svg width="20" height="34" viewBox="0 0 20 34" style={{ opacity: 0.4 }}>
          <rect x="4" y="1" width="12" height="20" rx="6" fill="none" stroke="var(--ink-gold)" strokeWidth="1.5" />
          <circle cx="10" cy="8" r="1.5" fill="var(--ink-gold)">
            <animate attributeName="cy" from="8" to="15" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0.2" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <line x1="10" y1="24" x2="10" y2="32" stroke="var(--ink-gold)" strokeWidth="1.5" opacity="0.4" />
          <polygon points="6,30 10,34 14,30" fill="var(--ink-gold)" opacity="0.4" />
        </svg>
        <span style={{
          fontFamily: 'var(--font-body)', fontStyle: 'italic',
          fontSize: '0.72rem', color: 'var(--ink-light)', opacity: 0.5,
        }}>
          scroll to explore the map
        </span>
      </div>
    </section>
  );
}
