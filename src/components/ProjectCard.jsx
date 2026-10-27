import { ExternalLink, Info } from 'lucide-react'
import ProjectArt from './ProjectArt.jsx'
import { Reveal } from './common.jsx'

export default function ProjectCard({ project, delay = 0 }) {
  const inProgress = project.status === 'In Progress'

  return (
    <Reveal as="article" className="card project-card" delay={delay}>
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        ) : (
          <div className="media-placeholder">
            <ProjectArt kind={project.art} />
            <span className="media-caption">Screenshots coming soon</span>
          </div>
        )}
        <span className={`pill status-badge ${inProgress ? 'pill-mustard' : 'pill-green'}`}>
          {project.status}
        </span>
      </div>

      <div className="project-body">
        <p className="project-meta">{project.meta}</p>
        <h3>{project.title}</h3>
        <p className="project-sub">{project.subtitle}</p>
        <p>{project.description}</p>

        <ul className="feature-list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        {project.note && (
          <p className="project-note">
            <Info size={16} aria-hidden="true" />
            <span>{project.note}</span>
          </p>
        )}

        <ul className="badges small" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((l) => (
              <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <ExternalLink size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  )
}
