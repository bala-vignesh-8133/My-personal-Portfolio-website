import { GraduationCap } from 'lucide-react'
import education from '../data/education.js'
import { Reveal, SectionHeading } from './common.jsx'

export default function Education() {
  return (
    <section id="education" className="section section-compact" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading eyebrow="Where I'm learning" title="Education" id="education-title" />
        <Reveal as="article" className="card edu-card">
          <span className="icon-bubble big" aria-hidden="true">
            <GraduationCap size={26} />
          </span>
          <div className="edu-main">
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
          </div>
          <dl className="edu-meta">
            <div>
              <dt>Duration</dt>
              <dd>{education.period}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{education.status}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
