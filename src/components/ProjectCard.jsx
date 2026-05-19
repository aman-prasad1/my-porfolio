'use client';

import { useEffect, useRef } from 'react';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const rots = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.5];
  const rot = rots[index % rots.length];
  const useV2 = index % 2 === 1;
  const tapeRots = [-3, 2, -1, 4];

  const statusIcon = project.status === 'completed' ? '✗' : '☠';
  const statusText = project.status === 'completed' ? 'Conquered' : 'In Progress';
  const statusColor = project.status === 'completed' ? 'var(--ink-gold)' : 'var(--blood-red)';
  const mapIcons = ['🏝️', '⛵', '🏴‍☠️', '🧭'];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('card-enter');
        observer.unobserve(el);
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={useV2 ? 'torn-paper-v2' : 'torn-paper'}
      style={{
        '--rot': `${rot}deg`,
        transform: `rotate(${rot}deg)`,
        opacity: 0,
        position: 'relative',
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Tape or pin */}
      {useV2 ? (
        <div className="paper-pin" />
      ) : (
        <div className="tape-strip" style={{
          transform: `translateX(-50%) rotate(${tapeRots[index % tapeRots.length]}deg)`,
        }} />
      )}

      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: '0.75rem', marginTop: useV2 ? '0.25rem' : '0.5rem',
      }}>
        <span style={{ fontSize: '1.6rem' }}>{mapIcons[index % mapIcons.length]}</span>
        <span style={{
          fontFamily: 'var(--font-heading)', fontSize: '0.68rem',
          color: statusColor, border: `1.5px solid ${statusColor}`,
          padding: '0.1rem 0.45rem', borderRadius: '2px',
          transform: 'rotate(2deg)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem',
        }}>
          {statusIcon} {statusText}
        </span>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: '1.35rem',
        color: 'var(--ink-dark)', marginBottom: '0.5rem',
      }}>{project.title}</h3>

      <p style={{
        fontSize: '0.88rem', color: 'var(--ink-brown)',
        lineHeight: 1.65, marginBottom: '1rem',
      }}>{project.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1.2rem' }}>
        {project.technologies.map((tech) => (
          <span key={tech} className="ink-stamp" style={{ fontSize: '0.7rem' }}>{tech}</span>
        ))}
      </div>

      <div style={{
        display: 'flex', gap: '0.6rem', flexWrap: 'wrap',
        borderTop: '1px dashed var(--parchment-dark)', paddingTop: '0.8rem',
      }}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-heading)', fontSize: '0.82rem',
            color: 'var(--ink-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
            padding: '0.35rem 0.8rem', border: '1.5px solid var(--ink-dark)',
            borderRadius: '3px', transition: 'all 0.3s ease', textDecoration: 'none',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--ink-dark)'; e.currentTarget.style.color = 'var(--parchment-light)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-dark)'; }}
        >
          ⚓ View the Map
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="wax-btn" style={{ fontSize: '0.82rem', padding: '0.35rem 0.8rem' }}>
            ⛵ Set Sail
          </a>
        )}
      </div>
    </div>
  );
}
