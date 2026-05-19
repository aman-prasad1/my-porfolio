'use client';

export default function SocialSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aman-prasad1',
      icon: '⚓',
      description: 'Code repositories & open source voyages',
      sealColor: '#333',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/amanprasad1',
      icon: '🔱',
      description: 'Professional connections & career journey',
      sealColor: '#0a66c2',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/amanprasad1/',
      icon: '⚔️',
      description: '1000+ battles fought in the algorithmic arena',
      sealColor: '#f89f1b',
    },
    {
      name: 'Email',
      url: 'mailto:amanprasad048@gmail.com',
      icon: '📜',
      description: 'Send a scroll for collaboration inquiries',
      sealColor: '#c71610',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/aman_prasad88',
      icon: '🏴‍☠️',
      description: 'Behind-the-scenes of a pirate\'s life',
      sealColor: '#833ab4',
    },
  ];

  return (
    <section id="contact-section" className="map-section" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="compass-rose" />
      <h2 className="section-title">Send a Message in a Bottle</h2>
      <p className="section-subtitle">
        Seeking a skilled backend navigator for your crew? Drop a message through any of these channels.
      </p>

      {/* Social Links */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem',
      }}>
        {socialLinks.map((social, i) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="parchment-card animate-fade-in-up"
            style={{
              animationDelay: `${i * 120}ms`,
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
              padding: '1.5rem 1rem',
            }}
          >
            {/* Wax seal icon */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 35%, ${social.sealColor}cc, ${social.sealColor})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              boxShadow: `0 3px 10px ${social.sealColor}40, inset 0 1px 2px rgba(255,255,255,0.2)`,
            }}>
              {social.icon}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              color: 'var(--ink-dark)',
              marginBottom: '0.5rem',
            }}>
              {social.name}
            </h3>

            <p style={{
              fontSize: '0.8rem',
              color: 'var(--ink-light)',
              lineHeight: 1.5,
            }}>
              {social.description}
            </p>
          </a>
        ))}
      </div>

      {/* Crew Recruitment CTA */}
      <div
        className="parchment-card animate-fade-in-up"
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          animationDelay: '700ms',
          border: '2px solid var(--ink-gold)',
        }}
      >
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          color: 'var(--ink-dark)',
          marginBottom: '0.75rem',
        }}>
          ⚓ Crew Recruitment Open ⚓
        </h3>
        <p style={{
          color: 'var(--ink-brown)',
          marginBottom: '1.5rem',
          lineHeight: 1.7,
        }}>
          Open to backend & SDE internships — remote or Kolkata.
          Whether you need a developer for your next expedition or want to discuss
          technology, I&apos;d love to hear from you!
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="mailto:amanprasad048@gmail.com" className="wax-btn">
            📜 Send a Scroll
          </a>
          <a
            href="https://linkedin.com/in/amanprasad1"
            target="_blank"
            rel="noopener noreferrer"
            className="wax-btn-outline"
          >
            🔱 View LinkedIn
          </a>
        </div>
      </div>

      {/* Footer wave & credit */}
      <div style={{
        marginTop: '4rem',
        textAlign: 'center',
        position: 'relative',
        paddingTop: '2rem',
      }}>
        {/* Wave SVG */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-10%',
          right: '-10%',
          height: '30px',
          overflow: 'hidden',
          opacity: 0.15,
        }}>
          <svg viewBox="0 0 1200 30" preserveAspectRatio="none" style={{ width: '200%', height: '100%', animation: 'wave 8s linear infinite' }}>
            <path d="M0 15 Q 75 0, 150 15 Q 225 30, 300 15 Q 375 0, 450 15 Q 525 30, 600 15 Q 675 0, 750 15 Q 825 30, 900 15 Q 975 0, 1050 15 Q 1125 30, 1200 15" fill="none" stroke="var(--ink-brown)" strokeWidth="2"/>
          </svg>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: 'var(--ink-light)',
        }}>
          &copy; {new Date().getFullYear()} Captain Aman Prasad &mdash; Charted with ☠️ from Kolkata
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          color: 'var(--parchment-dark)',
          marginTop: '0.25rem',
        }}>
          &ldquo;Not all treasure is silver and gold, mate.&rdquo;
        </p>
      </div>
    </section>
  );
}
