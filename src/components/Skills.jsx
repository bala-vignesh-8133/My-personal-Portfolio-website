import { Brain, Code2, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react'
import skills from '../data/skills.js'
import profile from '../data/profile.js'
import { Reveal, SectionHeading } from './common.jsx'

const ICONS = {
  code: Code2,
  phone: Smartphone,
  globe: Globe,
  server: Server,
  database: Database,
  wrench: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="section section-dark" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading eyebrow="What I work with" title="Technical Skills" id="skills-title" light />

        <div className="skill-grid">
          {skills.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Code2
            return (
              <Reveal as="article" key={group.category} className="skill-card" delay={i * 50}>
                <h3>
                  <span className="icon-bubble" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  {group.category}
                </h3>
                <ul className="badges">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}

          <Reveal as="article" className="skill-card skill-interest" delay={skills.length * 50}>
            <h3>
              <span className="icon-bubble" aria-hidden="true">
                <Brain size={18} />
              </span>
              Areas of Interest
            </h3>
            <ul className="badges outline">
              {profile.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
