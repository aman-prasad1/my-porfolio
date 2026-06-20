'use client';

export default function ProjectCard({ project, index }) {
  const isCompleted = project.status === 'completed';

  return (
    <div className="glass-card shimmer-glow" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}>
      {/* Top Header */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
        }}>
          {/* Project index marker */}
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.25)',
            fontWeight: '600',
          }}>
            0{index + 1}
          </span>
          
          {/* Status Indicator */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.72rem',
            fontWeight: '600',
            fontFamily: 'var(--font-heading)',
            color: isCompleted ? 'var(--accent-teal)' : 'var(--accent-gold)',
            background: isCompleted ? 'rgba(127, 174, 166, 0.08)' : 'rgba(212, 180, 141, 0.08)',
            border: isCompleted ? '1px solid rgba(127, 174, 166, 0.2)' : '1px solid rgba(212, 180, 141, 0.2)',
            padding: '0.2rem 0.6rem',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            <span style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: isCompleted ? 'var(--accent-teal)' : 'var(--accent-gold)',
              boxShadow: isCompleted ? '0 0 8px var(--accent-teal)' : '0 0 8px var(--accent-gold)',
            }} />
            {isCompleted ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Project Title */}
        <h3 style={{
          fontSize: '1.45rem',
          fontWeight: '700',
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
        }}>
          {project.title}
        </h3>

        {/* Project Description */}
        <p style={{
          fontSize: '0.92rem',
          lineHeight: '1.65',
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem',
        }}>
          {project.description}
        </p>
      </div>

      {/* Footer Area: Technologies & Buttons */}
      <div>
        {/* Technologies Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.45rem',
          marginBottom: '1.5rem',
        }}>
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              style={{
                fontSize: '0.73rem',
                padding: '0.2rem 0.6rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.55)',
                borderRadius: '6px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.2rem',
        }}>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-premium-secondary"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.85rem',
              borderRadius: '8px',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium"
              style={{
                padding: '0.5rem 1.25rem',
                fontSize: '0.85rem',
                borderRadius: '8px',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
