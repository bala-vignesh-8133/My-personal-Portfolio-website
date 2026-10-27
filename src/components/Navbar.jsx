import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import profile from '../data/profile.js'
import { NAV_ITEMS, SafeLink, useActiveSection } from './common.jsx'

const IDS = NAV_ITEMS.map((n) => n.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Bala Vignesh S., home">
          <span className="brand-mark">BV</span>
          <span className="brand-name">Bala Vignesh</span>
        </a>

        <nav id="primary-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'active' : ''}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <SafeLink
            href={profile.resume}
            download={profile.resumeFileName}
            external={false}
            className="btn btn-mustard btn-sm nav-resume"
          >
            <Download size={16} aria-hidden="true" /> Resume
          </SafeLink>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
