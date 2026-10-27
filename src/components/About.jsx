import { Award, Briefcase, FolderGit2, GraduationCap, Sparkles } from 'lucide-react'
import profile from '../data/profile.js'
import education from '../data/education.js'
import certifications from '../data/certifications.js'
import projects from '../data/projects.js'
import experience from '../data/experience.js'
import { Reveal, SectionHeading } from './common.jsx'

export default function About() {
  const stats = [
    { icon: Briefcase, value: experience.filter((e) => e.type === 'internship').length, label: 'Internship' },
    { icon: FolderGit2, value: projects.length, label: 'Featured projects' },
    {
      icon: Award,
      value: certifications.filter((c) => c.status !== 'in-progress').length,
      label: 'Certifications',
    },
  ]

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <div className="photo-frame">
            <img
              src="images/working-800.webp"
              srcSet="images/working-480.webp 480w, images/working-800.webp 800w"
              sizes="(max-width: 900px) 80vw, 420px"
              width="800"
              height="1067"
              loading="lazy"
              alt="Bala Vignesh S working on a laptop"
            />
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={80}>
          <SectionHeading eyebrow="A little about me" title="About Me" id="about-title" />
          <p className="lead">{profile.intro}</p>
          <p>{profile.goals}</p>

          <ul className="stats" aria-label="Highlights">
            {stats.map(({ icon: Icon, value, label }) => (
              <li key={label} className="stat">
                <Icon size={20} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="about-facts">
            <div className="fact">
              <GraduationCap size={20} aria-hidden="true" />
              <div>
                <strong>{education.institution}</strong>
                <span>B.Tech CSBS · {education.period}</span>
              </div>
            </div>
            <div className="fact">
              <Sparkles size={20} aria-hidden="true" />
              <div>
                <strong>Areas of interest</strong>
                <span>{profile.interests.join(' · ')}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
