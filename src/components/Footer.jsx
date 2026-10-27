import { Github, Linkedin, Mail } from 'lucide-react'
import profile from '../data/profile.js'
import { NAV_ITEMS, SafeLink } from './common.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-card">
        <div className="footer-top">
          <div>
            <a className="brand brand-light" href="#home" aria-label={`${profile.name}, back to top`}>
              <span className="brand-mark">BV</span>
              <span>{profile.name}</span>
            </a>
            <p className="footer-tag">App Developer | Full-Stack Developer</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {NAV_ITEMS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <ul className="footer-social" aria-label="Social links">
            <li>
              <SafeLink href={profile.github} className="social-btn" label="GitHub">
                <Github size={18} aria-hidden="true" />
              </SafeLink>
            </li>
            <li>
              <SafeLink href={profile.linkedin} className="social-btn" label="LinkedIn">
                <Linkedin size={18} aria-hidden="true" />
              </SafeLink>
            </li>
            <li>
              <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name} · Built with React
        </p>
      </div>
    </footer>
  )
}
