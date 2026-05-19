'use client';

import { useEffect, useRef } from 'react';

export default function SocialSection() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aman-prasad1', icon: '⚓', desc: 'Code repos & voyages', color: '#333' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/amanprasad1', icon: '🔱', desc: 'Professional journey', color: '#0a66c2' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/amanprasad1/', icon: '⚔️', desc: '1000+ battles fought', color: '#f89f1b' },
    { name: 'Email', url: 'mailto:amanprasad048@gmail.com', icon: '📜', desc: 'Send a scroll', color: '#c71610' },
    { name: 'Instagram', url: 'https://instagram.com/aman_prasad88', icon: '🏴‍☠️', desc: "A pirate's life", color: '#833ab4' },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-enter');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const rots = [1.5, -2, 1, -1.5, 2];

  return (
    <section id="contact-section" style={{
      position: 'relative', zIndex: 1,
      padding: '4rem 2rem 2rem', maxWidth: '1100px', margin: '0 auto',
    }}>
      <div className="ink-divider">
        <span className="ink-divider-icon">📜</span>
      </div>

      <div className="section-header">
        <h2 className="section-title">Message in a Bottle</h2>
        <p className="section-subtitle">
          Seeking a backend navigator? Drop a message through any channel on the seven seas.
        </p>
      </div>

      {/* Social cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        {socialLinks.map((s, i) => (
          <a
            key={s.name}
            ref={(el) => { cardsRef.current[i] = el; }}
            href={s.url}
            target={s.url.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={i % 2 === 0 ? 'torn-paper' : 'torn-paper-v2'}
            style={{
              '--rot': `${rots[i]}deg`,
              transform: `rotate(${rots[i]}deg)`,
              opacity: 0,
              animationDelay: `${i * 100}ms`,
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              padding: '1.5rem 1rem',
              position: 'relative',
            }}
          >
            <div className="paper-pin" />

            {/* Wax seal */}
            <div className="wax-seal" style={{
              background: `radial-gradient(circle at 35% 35%, ${s.color}cc, ${s.color})`,
              margin: '0.3rem auto 0.75rem',
            }}>
              {s.icon}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.05rem',
              color: 'var(--ink-dark)', marginBottom: '0.3rem',
            }}>{s.name}</h3>
            <p style={{ fontSize: '0.73rem', color: 'var(--ink-light)', lineHeight: 1.4 }}>
              {s.desc}
            </p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="bounty-board" style={{ maxWidth: '550px', margin: '0 auto' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.5rem',
          color: 'var(--ink-dark)', marginBottom: '0.6rem',
        }}>
          ⚓ Crew Recruitment Open ⚓
        </h3>
        <p style={{
          color: 'var(--ink-brown)', marginBottom: '1.25rem', lineHeight: 1.6, fontSize: '0.95rem',
        }}>
          Open to backend & SDE internships — remote or Kolkata.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:amanprasad048@gmail.com" className="wax-btn" style={{ fontSize: '0.95rem' }}>
            📜 Send a Scroll
          </a>
          <a href="https://linkedin.com/in/amanprasad1" target="_blank" rel="noopener noreferrer"
            className="wax-btn-outline" style={{ fontSize: '0.95rem' }}>
            🔱 View LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '4rem', textAlign: 'center', position: 'relative', paddingTop: '2rem' }}>
        {/* Animated wave */}
        <div style={{
          position: 'absolute', top: 0, left: '-10%', right: '-10%',
          height: '25px', overflow: 'hidden', opacity: 0.12,
        }}>
          <svg viewBox="0 0 1200 30" preserveAspectRatio="none" style={{
            width: '200%', height: '100%',
            animation: 'wave 10s linear infinite',
          }}>
            <path d="M0 15 Q 75 0, 150 15 Q 225 30, 300 15 Q 375 0, 450 15 Q 525 30, 600 15 Q 675 0, 750 15 Q 825 30, 900 15 Q 975 0, 1050 15 Q 1125 30, 1200 15"
              fill="none" stroke="var(--ink-brown)" strokeWidth="2" />
          </svg>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)', fontStyle: 'italic',
          fontSize: '0.82rem', color: 'var(--ink-light)',
        }}>
          &copy; {new Date().getFullYear()} Captain Aman Prasad &mdash; Charted with ☠️ from Kolkata
        </p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.72rem',
          color: 'var(--parchment-dark)', marginTop: '0.25rem',
        }}>
          &ldquo;Not all treasure is silver and gold, mate.&rdquo;
        </p>
      </div>
    </section>
  );
}
