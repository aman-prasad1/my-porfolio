import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  return (
    <section id="voyages-section" style={{
      position: 'relative', zIndex: 1,
      padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto',
    }}>
      {/* Ink splatter divider */}
      <div className="ink-divider">
        <span className="ink-divider-icon">⚓</span>
      </div>

      <div className="section-header">
        <h2 className="section-title">Voyages & Conquests</h2>
        <p className="section-subtitle">
          Torn pages from the captain&apos;s log — each expedition charted and pinned to the map.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        gap: '2.5rem',
        padding: '0.5rem',
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
