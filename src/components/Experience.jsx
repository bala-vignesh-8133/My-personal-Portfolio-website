import { Briefcase, FlaskConical } from 'lucide-react'
import experience from '../data/experience.js'
import { Reveal, SectionHeading } from './common.jsx'

const STATUS_LABEL = {
  'in-progress': 'In progress',
  exploring: 'Exploring',
  completed: 'Completed',
}

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading eyebrow="Where I've been building" title="Experience" id="experience-title" />

        <ol className="timeline">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.id} className="timeline-item" delay={i * 80}>
              <span className="timeline-dot" aria-hidden="true">
                {item.type === 'internship' ? <Briefcase size={16} /> : <FlaskConical size={16} />}
              </span>
              <article className="card exp-card">
                <div className="exp-top">
                  <span className={`pill ${item.type === 'project' ? 'pill-mustard' : 'pill-green'}`}>
                    {item.badge}
                  </span>
                  <span className="exp-period">{item.period}</span>
                </div>
                <h3>{item.role}</h3>
                <p className="exp-org">{item.organization}</p>
                {item.summary && <p className="exp-summary">{item.summary}</p>}
                <ul className="exp-points">
                  {item.points.map((p) => (
                    <li key={p.text}>
                      <span>{p.text}</span>
                      {p.status !== 'completed' && (
                        <span className={`status status-${p.status}`}>{STATUS_LABEL[p.status]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
