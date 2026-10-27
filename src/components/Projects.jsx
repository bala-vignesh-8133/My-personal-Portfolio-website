import { Plus } from 'lucide-react'
import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import { Reveal, SectionHeading } from './common.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section section-tint" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading eyebrow="Things I've built" title="Featured Projects" id="projects-title" />

        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}

          <Reveal as="article" className="card project-more" delay={projects.length * 80}>
            <span className="icon-bubble big" aria-hidden="true">
              <Plus size={26} />
            </span>
            <h3>More projects on the way</h3>
            <p>
              Web applications, Flutter apps and full-stack builds will be added here as I complete them.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
