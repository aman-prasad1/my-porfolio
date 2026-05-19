'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { label: '⚓ Home', id: 'top', dir: 'N' },
    { label: '🗺️ Voyages', id: 'voyages-section', dir: 'E' },
    { label: '⚔️ Arsenal', id: 'arsenal-section', dir: 'S' },
    { label: '📜 Contact', id: 'contact-section', dir: 'W' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled
        ? 'linear-gradient(180deg, rgba(196,167,125,0.95) 0%, rgba(220,197,160,0.92) 100%)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '2px solid rgba(139,105,20,0.3)' : '2px solid transparent',
      boxShadow: scrolled ? '0 2px 12px rgba(44,24,16,0.1)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('top')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            color: 'var(--ink-dark)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s ease',
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>☠️</span>
          <span>A.P.</span>
        </button>

        {/* Desktop Nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        className="nav-desktop"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                color: 'var(--ink-brown)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--ink-dark)';
                e.target.style.background = 'rgba(139,105,20,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--ink-brown)';
                e.target.style.background = 'none';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
          }}
          aria-label="Toggle navigation"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink-dark)" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: 'linear-gradient(180deg, rgba(220,197,160,0.98) 0%, rgba(244,232,193,0.98) 100%)',
            borderTop: '1px solid rgba(139,105,20,0.2)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                color: 'var(--ink-brown)',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
        @media (max-width: 768px) {
          .nav-mobile-btn { display: block !important; }
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
