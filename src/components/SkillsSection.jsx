'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "⚓ Backend Mastery",
      icon: "🏴‍☠️",
      skills: [
        { name: "Node.js", desc: "Server-side JavaScript runtime" },
        { name: "Express.js", desc: "Fast web framework" },
        { name: "TypeScript", desc: "Type-safe development" },
        { name: "Kafka", desc: "Event streaming platform" },
      ]
    },
    {
      title: "🗄️ Databases & Cache",
      icon: "💰",
      skills: [
        { name: "PostgreSQL", desc: "Relational database" },
        { name: "MongoDB", desc: "NoSQL document database" },
        { name: "Redis", desc: "In-memory data store & cache" },
      ]
    },
    {
      title: "🌊 Frontend & Cloud",
      icon: "⛵",
      skills: [
        { name: "React", desc: "Interactive user interfaces" },
        { name: "Next.js", desc: "Full-stack React framework" },
        { name: "Docker", desc: "Containerization platform" },
        { name: "AWS", desc: "Cloud infrastructure" },
      ]
    },
    {
      title: "⚔️ Languages",
      icon: "📜",
      skills: [
        { name: "JavaScript", desc: "Web & server development" },
        { name: "Python", desc: "Versatile scripting language" },
        { name: "C++", desc: "Competitive programming" },
        { name: "Java", desc: "Enterprise applications" },
        { name: "C", desc: "System-level programming" },
      ]
    },
  ];

  return (
    <section id="arsenal-section" className="map-section" style={{ paddingTop: '4rem' }}>
      <div className="compass-rose" />
      <h2 className="section-title">The Arsenal</h2>
      <p className="section-subtitle">
        Every pirate needs their weapons. These are the tools and technologies forged through countless voyages.
      </p>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem',
      }}>
        {skillCategories.map((cat, ci) => (
          <div
            key={cat.title}
            className="parchment-card animate-fade-in-up"
            style={{ animationDelay: `${ci * 150}ms` }}
          >
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.3rem',
              color: 'var(--ink-dark)',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px dashed var(--parchment-dark)',
              textAlign: 'center',
            }}>
              {cat.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.skills.map((skill) => (
                <div key={skill.name} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}>
                  <span style={{
                    color: 'var(--ink-gold)',
                    fontSize: '0.9rem',
                    marginTop: '2px',
                  }}>✦</span>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      color: 'var(--ink-dark)',
                    }}>{skill.name}</span>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--ink-light)',
                      marginTop: '2px',
                    }}>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bounty Board — LeetCode Stats */}
      <div
        className="parchment-card animate-fade-in-up"
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          animationDelay: '600ms',
          border: '3px solid var(--ink-gold)',
          position: 'relative',
        }}
      >
        {/* WANTED header */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          color: 'var(--blood-red)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          marginBottom: '0.25rem',
        }}>
          ☠ Battle Record ☠
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          color: 'var(--ink-brown)',
          marginBottom: '1.5rem',
          fontSize: '0.95rem',
        }}>
          Consistency over intensity. Every day, without exception.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.25rem',
        }}>
          {[
            { label: 'Problems Solved', value: '1000+', icon: '⚔️' },
            { label: 'Peak Rating', value: '1681', icon: '📊' },
            { label: 'Global Rank', value: 'Top 14.97%', icon: '🌍' },
            { label: 'Day Streak', value: '500+', icon: '🔥' },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: '1rem 0.5rem',
              borderRadius: '4px',
              background: 'rgba(139,105,20,0.06)',
              border: '1px solid var(--parchment-dark)',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--ink-dark)',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'var(--ink-light)',
                marginTop: '0.2rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '1.25rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}>
          <span className="ink-stamp" style={{ borderColor: 'var(--ink-gold)', color: 'var(--ink-gold)' }}>
            LeetCode
          </span>
          <span className="ink-stamp" style={{ borderColor: 'var(--blood-red)', color: 'var(--blood-red)' }}>
            DSA Expert
          </span>
          <span className="ink-stamp" style={{ borderColor: 'var(--ink-brown)', color: 'var(--ink-brown)' }}>
            C++ Specialist
          </span>
        </div>
      </div>

      <div className="rope-divider" />
    </section>
  );
}
