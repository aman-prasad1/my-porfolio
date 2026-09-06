'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Engineering",
      icon: "⚙️",
      skills: [
        { name: "Node.js", desc: "Event-driven asynchronous backend systems" },
        { name: "Express.js", desc: "RESTful API services and middlewares" },
        { name: "TypeScript", desc: "Type-safe robust application coding" },
        { name: "Kafka", desc: "Distributed event streaming & messaging" },
      ]
    },
    {
      title: "Databases & Caching",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", desc: "Relational database schema and queries" },
        { name: "MongoDB", desc: "NoSQL document storage & aggregation" },
        { name: "Redis", desc: "High-speed caching & session management" },
      ]
    },
    {
      title: "Frontend & Cloud",
      icon: "☁️",
      skills: [
        { name: "React", desc: "Component-driven user interfaces" },
        { name: "Next.js", desc: "Server-side rendering & fullstack routing" },
        { name: "Docker", desc: "Containerization & microservice isolation" },
        { name: "AWS", desc: "EC2, S3 & server infrastructure" },
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", desc: "Algorithms and structures (STL)" },
        { name: "JavaScript", desc: "Core JS (ES6+) and asynchronous loop" },
        { name: "Python", desc: "Scripting, automations & data analysis" },
        { name: "Java & C", desc: "Object-oriented and system-level code" },
      ]
    },
  ];

  const stats = [
    { label: 'Problems Solved', value: '1100+', icon: '⚔️' },
    { label: 'Peak LeetCode Rating', value: '1733', icon: '📊' },
    { label: 'Global Rank', value: 'Top 11.00%', icon: '🌍' },
    { label: 'Coding Streak', value: '1000+ Days', icon: '🔥' },
  ];

  return (
    <section id="arsenal-section" className="section-wrapper">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A collection of backend-focused tooling, database ecosystems, and infrastructure environments I work with.
        </p>
      </div>

      {/* Bento Grid: 4 categories of skills */}
      <div className="bento-grid" style={{ marginBottom: '4rem' }}>
        {skillCategories.map((cat) => (
          <div key={cat.title} className="bento-col-6 glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Category Title */}
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontFamily: 'var(--font-heading)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              paddingBottom: '0.75rem',
              color: 'var(--text-primary)',
            }}>
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </h3>

            {/* Skills List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.1rem',
            }}>
              {cat.skills.map((skill) => (
                <div key={skill.name} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}>
                  <span style={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.9rem',
                    lineHeight: '1.2',
                    marginTop: '2px',
                  }}>
                    ✦
                  </span>
                  <div>
                    <h4 style={{
                      fontSize: '0.96rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.15rem',
                      fontFamily: 'var(--font-body)',
                    }}>
                      {skill.name}
                    </h4>
                    <p style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4',
                    }}>
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Dashboard: LeetCode Battle Record */}
      <div className="glass-card" style={{
        maxWidth: '850px',
        margin: '0 auto',
        border: '1px solid rgba(212, 180, 141, 0.25)',
        background: 'linear-gradient(135deg, rgba(20, 18, 16, 0.5) 0%, rgba(212, 180, 141, 0.02) 100%)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 180, 141, 0.02)',
      }}>
        {/* Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            fontFamily: 'var(--font-heading)',
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.4rem',
          }}>
            LeetCode Battle Record
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}>
            Consistency over intensity. Solving challenges and optimizing runtime algorithms.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="bento-grid" style={{ gap: '1rem' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="bento-col-3" style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '1.25rem 0.75rem',
              textAlign: 'center',
              transition: 'var(--transition-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(212, 180, 141, 0.3)';
              e.currentTarget.style.background = 'rgba(212, 180, 141, 0.04)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.transform = 'none';
            }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>{stat.icon}</div>
              <div style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                marginTop: '0.35rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Custom Stamps */}
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}>
          <span className="tech-chip" style={{ color: 'var(--accent-gold)', borderColor: 'rgba(212, 180, 141, 0.25)' }}>LeetCode Active</span>
          <span className="tech-chip" style={{ color: 'var(--accent-teal)', borderColor: 'rgba(127, 174, 166, 0.25)' }}>DSA Specialist</span>
          <span className="tech-chip">C++ STL</span>
        </div>
      </div>
    </section>
  );
}
