'use client';

import { useEffect, useRef } from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "⚓ Backend Mastery",
      skills: [
        { name: "Node.js", desc: "Server-side JavaScript" },
        { name: "Express.js", desc: "Fast web framework" },
        { name: "TypeScript", desc: "Type-safe development" },
        { name: "Kafka", desc: "Event streaming" },
      ]
    },
    {
      title: "🗄️ Databases & Cache",
      skills: [
        { name: "PostgreSQL", desc: "Relational database" },
        { name: "MongoDB", desc: "NoSQL document DB" },
        { name: "Redis", desc: "In-memory data store" },
      ]
    },
    {
      title: "🌊 Frontend & Cloud",
      skills: [
        { name: "React", desc: "Interactive UIs" },
        { name: "Next.js", desc: "Full-stack framework" },
        { name: "Docker", desc: "Containerization" },
        { name: "AWS", desc: "Cloud infrastructure" },
      ]
    },
    {
      title: "⚔️ Languages",
      skills: [
        { name: "JavaScript", desc: "Web & server" },
        { name: "Python", desc: "Scripting & ML" },
        { name: "C++", desc: "Competitive programming" },
        { name: "Java", desc: "Enterprise apps" },
        { name: "C", desc: "System programming" },
      ]
    },
  ];

  const rots = [1.5, -1.8, 2, -1.2];
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

  return (
    <section id="arsenal-section" style={{
      position: 'relative', zIndex: 1,
      padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto',
    }}>
      <div className="ink-divider">
        <span className="ink-divider-icon">⚔️</span>
      </div>

      <div className="section-header">
        <h2 className="section-title">The Arsenal</h2>
        <p className="section-subtitle">
          Torn notes from the captain&apos;s quarters — every weapon catalogued and battle-tested.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2.5rem',
        padding: '0.5rem',
        marginBottom: '3rem',
      }}>
        {skillCategories.map((cat, ci) => (
          <div
            key={cat.title}
            ref={(el) => { cardsRef.current[ci] = el; }}
            className={ci % 2 === 0 ? 'torn-paper' : 'torn-paper-v2'}
            style={{
              '--rot': `${rots[ci]}deg`,
              transform: `rotate(${rots[ci]}deg)`,
              opacity: 0,
              position: 'relative',
              animationDelay: `${ci * 130}ms`,
            }}
          >
            {ci % 2 === 0 ? (
              <div className="tape-strip" style={{ transform: `translateX(-50%) rotate(${ci % 3 - 1}deg)` }} />
            ) : (
              <div className="paper-pin" />
            )}

            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.15rem',
              color: 'var(--ink-dark)', marginBottom: '1rem',
              paddingBottom: '0.6rem', borderBottom: '1px dashed var(--parchment-dark)',
              textAlign: 'center', marginTop: ci % 2 === 0 ? '0.4rem' : '0',
            }}>
              {cat.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {cat.skills.map((skill) => (
                <div key={skill.name} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--ink-gold)', fontSize: '0.8rem', marginTop: '3px' }}>✦</span>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--ink-dark)',
                    }}>{skill.name}</span>
                    <p style={{ fontSize: '0.75rem', color: 'var(--ink-light)', marginTop: '1px' }}>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Battle Record — Bounty Board */}
      <div className="bounty-board" style={{ maxWidth: '650px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '1.8rem',
          color: 'var(--blood-red)', letterSpacing: '3px',
          marginBottom: '0.3rem',
        }}>
          ☠ Battle Record ☠
        </div>
        <p style={{
          fontFamily: 'var(--font-body)', fontStyle: 'italic',
          color: 'var(--ink-brown)', marginBottom: '1.5rem', fontSize: '0.92rem',
        }}>
          Consistency over intensity. Every day, without exception.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem',
        }}>
          {[
            { label: 'Problems Solved', value: '1000+', icon: '⚔️' },
            { label: 'Peak Rating', value: '1681', icon: '📊' },
            { label: 'Global Rank', value: 'Top 14.97%', icon: '🌍' },
            { label: 'Day Streak', value: '500+', icon: '🔥' },
          ].map((stat) => (
            <div key={stat.label} className="stat-cell">
              <div style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--ink-dark)',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                color: 'var(--ink-light)', marginTop: '0.15rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span className="ink-stamp" style={{ borderColor: 'var(--ink-gold)', color: 'var(--ink-gold)' }}>LeetCode</span>
          <span className="ink-stamp" style={{ borderColor: 'var(--blood-red)', color: 'var(--blood-red)' }}>DSA Expert</span>
          <span className="ink-stamp" style={{ borderColor: 'var(--ink-brown)', color: 'var(--ink-brown)' }}>C++ Specialist</span>
        </div>
      </div>
    </section>
  );
}
