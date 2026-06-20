'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    if (el) {
      // Offset for floating navbar
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'top' },
    { label: 'Projects', id: 'voyages-section' },
    { label: 'Skills', id: 'arsenal-section' },
    { label: 'Contact', id: 'contact-section' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: '1.25rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 2.5rem)',
      maxWidth: '1100px',
      zIndex: 100,
      transition: 'var(--transition-smooth)',
      background: scrolled ? 'rgba(15, 14, 13, 0.7)' : 'rgba(15, 14, 13, 0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: scrolled ? '1px solid rgba(212, 180, 141, 0.22)' : '1px solid rgba(255, 255, 255, 0.06)',
      boxShadow: scrolled ? '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 180, 141, 0.03)' : '0 4px 20px rgba(0, 0, 0, 0.2)',
      borderRadius: '16px',
    }}>
      <div style={{
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('top')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            transition: 'var(--transition-smooth)',
            letterSpacing: '-0.02em',
          }}
        >
          <span>AMAN</span>
          <span style={{ color: 'var(--accent-gold)' }}>.P</span>
        </button>

        {/* Desktop Nav Items */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
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
                fontSize: '0.92rem',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                padding: '0.5rem 0.95rem',
                borderRadius: '8px',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'none';
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Aman_Prasad_Resume.pdf"
            download
            className="btn-premium"
            style={{ 
              padding: '0.45rem 1.15rem', 
              fontSize: '0.85rem', 
              borderRadius: '8px',
              marginLeft: '0.5rem' 
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
            color: 'var(--text-primary)',
          }}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: 'rgba(15, 14, 13, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            backdropFilter: 'blur(20px)',
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
                fontSize: '1.05rem',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                borderRadius: '8px',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'none';
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Aman_Prasad_Resume.pdf"
            download
            className="btn-premium"
            style={{ 
              marginTop: '0.75rem', 
              textAlign: 'center', 
              justifyContent: 'center',
              borderRadius: '8px'
            }}
          >
            Download Resume
          </a>
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
