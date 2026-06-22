'use client';

export default function SocialSection() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aman-prasad1', icon: '💻', desc: 'Code repositories & open-source work' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/amanprasad1', icon: '👔', desc: 'Professional journey & networking' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/amanprasad1/', icon: '📊', desc: '1000+ algorithms solved' },
    { name: 'Email', url: 'mailto:amanprasad048@gmail.com', icon: '✉️', desc: 'Direct email for opportunities' },
    { name: 'Instagram', url: 'https://instagram.com/aman_prasad88', icon: '📸', desc: 'Personal moments & updates' },
  ];

  return (
    <section id="contact-section" className="section-wrapper">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in working together or want to discuss backend architecture? Drop me a line.
        </p>
      </div>

      {/* Social Cards Grid */}
      <div className="bento-grid" style={{ marginBottom: '3.5rem' }}>
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target={s.url.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="bento-col-4 glass-card shimmer-glow"
            style={{
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              padding: '1.75rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Round Icon container */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.35rem',
              marginBottom: '1rem',
              transition: 'var(--transition-smooth)',
            }}
            className="social-icon-wrapper"
            >
              {s.icon}
            </div>

            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '0.35rem',
              fontFamily: 'var(--font-heading)',
            }}>{s.name}</h3>
            
            <p style={{ 
              fontSize: '0.8rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.4,
            }}>
              {s.desc}
            </p>
          </a>
        ))}
      </div>

      <div className="glass-card-teal" style={{ 
        maxWidth: '650px', 
        margin: '0 auto 5rem',
        textAlign: 'center',
      }}>
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
          fontFamily: 'var(--font-heading)',
        }}>
          Let&apos;s Build Something Great
        </h3>
        <p style={{
          color: 'var(--text-secondary)',
          marginBottom: '1.75rem',
          lineHeight: 1.6,
          fontSize: '0.95rem',
          maxWidth: '480px',
          margin: '0 auto 1.75rem',
        }}>
          I am actively looking for Backend & SDE Internships or collaborative software engineering opportunities. Remote or based in Kolkata.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:amanprasad048@gmail.com" className="btn-premium shimmer-glow" style={{ fontSize: '0.9rem' }}>
            ✉️ Send Email
          </a>
          <a href="https://linkedin.com/in/amanprasad1" target="_blank" rel="noopener noreferrer"
            className="btn-premium-secondary" style={{ fontSize: '0.9rem' }}>
            View LinkedIn
          </a>
        </div>
      </div>

      {/* Footer Area */}
      <div style={{ 
        textAlign: 'center', 
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          fontWeight: '400',
        }}>
          &copy; {new Date().getFullYear()} Aman Prasad
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.25)',
          marginTop: '0.35rem',
        }}>
          Optimized for high performance and clean aesthetics
        </p>
      </div>

      <style jsx>{`
        .glass-card:hover .social-icon-wrapper {
          background: rgba(212, 180, 141, 0.1);
          border-color: rgba(212, 180, 141, 0.35);
          color: var(--accent-gold);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
