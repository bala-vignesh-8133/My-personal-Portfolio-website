import { ArrowUpRight, Download, Github, Heart, Linkedin, Mail, Phone } from 'lucide-react'
import profile from '../data/profile.js'
import { SafeLink } from './common.jsx'

const DOCK_SKILLS = ['Flutter', 'React.js', 'Python', 'Firebase', 'Django', 'Java']

function Sparks() {
  return (
    <svg className="sparks" viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <path d="M6 28 L16 22" />
      <path d="M14 14 L22 18" />
      <path d="M26 6 L28 16" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status-pill">
            <span className="pulse" aria-hidden="true" />
            Open to opportunities
          </p>
          <p className="script hero-script">
            Hello, I'm <Heart size={18} aria-hidden="true" />
          </p>
          {/* Non-breaking space keeps the initial "S" on the same line as "Vignesh". */}
          <h1 id="hero-title">{profile.name.replace(/ (\S+)$/, ' $1')}</h1>
          <p className="hero-role">
            <span className="marker">App Developer</span>
            <span className="bar" aria-hidden="true">
              |
            </span>
            <span className="marker">Full-Stack Developer</span>
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-green" href="#projects">
              View My Projects <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <SafeLink
              href={profile.resume}
              download={profile.resumeFileName}
              external={false}
              className="btn btn-mustard"
            >
              <Download size={18} aria-hidden="true" /> Download Resume
            </SafeLink>
          </div>

          <ul className="hero-links" aria-label="Profiles and contact">
            <li>
              <SafeLink href={profile.github} className="text-link" label="GitHub">
                <Github size={18} aria-hidden="true" /> GitHub
              </SafeLink>
            </li>
            <li>
              <SafeLink href={profile.linkedin} className="text-link" label="LinkedIn">
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </SafeLink>
            </li>
            <li>
              <a className="text-link" href="#contact">
                <Mail size={18} aria-hidden="true" /> Contact Me
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="blob" aria-hidden="true" />
          <div className="dots" aria-hidden="true" />
          <Sparks />
          <div className="portrait">
            <img
              src="images/portrait-800.webp"
              srcSet="images/portrait-480.webp 480w, images/portrait-800.webp 800w"
              sizes="(max-width: 900px) 80vw, 440px"
              width="800"
              height="1072"
              alt="Portrait of Bala Vignesh S in a navy suit"
              fetchpriority="high"
            />
          </div>
          <span className="float-chip chip-a" aria-hidden="true">
            <i /> Flutter
          </span>
          <span className="float-chip chip-b" aria-hidden="true">
            <i /> React.js
          </span>
          <span className="float-chip chip-c" aria-hidden="true">
            <i /> Python
          </span>
        </div>
      </div>

      <div className="container">
        <div className="dock">
          <div className="dock-col">
            <h2 className="dock-title">Contact</h2>
            <ul className="dock-contact">
              <li>
                <span className="dot" aria-hidden="true">
                  <Phone size={16} />
                </span>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <span className="dot" aria-hidden="true">
                  <Mail size={16} />
                </span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
            </ul>
          </div>
          <div className="dock-divider" aria-hidden="true" />
          <div className="dock-col dock-skills">
            <h2 className="dock-title">Software Skills</h2>
            <ul className="chip-row">
              {DOCK_SKILLS.map((s) => (
                <li key={s} className="tile">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
