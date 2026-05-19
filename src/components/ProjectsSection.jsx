import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  return (
    <section id="voyages-section" className="map-section" style={{ paddingTop: '6rem' }}>
      <div className="compass-rose" />
      <h2 className="section-title">Voyages & Conquests</h2>
      <p className="section-subtitle">
        The captain&apos;s log of expeditions across the digital seas — each project a new territory charted and conquered.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem',
        marginBottom: '2rem',
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="rope-divider" />
    </section>
  );
}
