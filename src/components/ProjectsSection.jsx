import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects }) {
  return (
    <section id="voyages-section" className="section-wrapper">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Engineering high-performance microservices, event-driven architectures, and performance-optimized system tools.
        </p>
      </div>

      {/* Grid wrapper */}
      <div className="bento-grid">
        {projects.map((project, index) => {
          // Assign different column spans for an asymmetrical bento-grid feel
          // Card 1: span 6, Card 2: span 6, Card 3: span 6, Card 4: span 6
          // Let's do 6-6 layout which looks extremely clean and lets the descriptions shine!
          return (
            <div key={project.id} className="bento-col-6">
              <ProjectCard project={project} index={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
