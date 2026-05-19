export default function ProjectCard({ project, index }) {
  const rotations = [-2, 1.5, -1, 2.5];
  const rotation = rotations[index % rotations.length];

  const statusIcon = project.status === 'completed' ? '✗' : '☠';
  const statusText = project.status === 'completed' ? 'Conquered' : 'In Progress';
  const statusColor = project.status === 'completed' ? 'var(--ink-gold)' : 'var(--blood-red)';

  const mapIcons = ['🏝️', '⛵', '🏴‍☠️', '🧭'];
  const mapIcon = mapIcons[index % mapIcons.length];

  return (
    <div
      className="parchment-card animate-fade-in-up"
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${index * 150}ms`,
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg)`;
      }}
    >
      {/* Map icon header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
      }}>
        <span style={{ fontSize: '2rem' }}>{mapIcon}</span>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.75rem',
          color: statusColor,
          border: `1.5px solid ${statusColor}`,
          padding: '0.15rem 0.6rem',
          borderRadius: '2px',
          transform: 'rotate(3deg)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}>
          {statusIcon} {statusText}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        color: 'var(--ink-dark)',
        marginBottom: '0.75rem',
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.95rem',
        color: 'var(--ink-brown)',
        lineHeight: 1.7,
        marginBottom: '1.25rem',
      }}>
        {project.description}
      </p>

      {/* Tech stamps */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        marginBottom: '1.5rem',
      }}>
        {project.technologies.map((tech) => (
          <span key={tech} className="ink-stamp">{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        borderTop: '1px dashed var(--parchment-dark)',
        paddingTop: '1rem',
      }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.9rem',
            color: 'var(--ink-dark)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 1rem',
            border: '1.5px solid var(--ink-dark)',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--ink-dark)';
            e.currentTarget.style.color = 'var(--parchment-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--ink-dark)';
          }}
        >
          ⚓ View the Map
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wax-btn"
            style={{ fontSize: '0.9rem', padding: '0.4rem 1rem' }}
          >
            ⛵ Set Sail
          </a>
        )}
      </div>
    </div>
  );
}
