import { Award, ExternalLink } from 'lucide-react'
import certifications from '../data/certifications.js'
import { Reveal, SectionHeading } from './common.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="section section-compact" aria-labelledby="cert-title">
      <div className="container">
        <SectionHeading eyebrow="Learning on the side" title="Certifications" id="cert-title" />

        {certifications.length === 0 ? (
          <Reveal className="card cert-empty">
            <span className="icon-bubble big" aria-hidden="true">
              <Award size={26} />
            </span>
            <p>Completed certifications will be listed here.</p>
          </Reveal>
        ) : (
          <ul className="cert-grid">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.title} className="card cert-card" delay={i * 70}>
                <span className="icon-bubble big" aria-hidden="true">
                  <Award size={24} />
                </span>
                <div>
                  {c.status === 'in-progress' && <span className="pill pill-mustard cert-badge">In progress</span>}
                  <p className="cert-issuer">{c.issuer}</p>
                  <h3>{c.title}</h3>
                  {c.year && <p className="cert-year">{c.year}</p>}
                  {c.url && (
                    <a className="text-link" href={c.url} target="_blank" rel="noopener noreferrer">
                      View credential <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
