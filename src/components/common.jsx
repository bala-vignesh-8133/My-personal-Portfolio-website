import { useEffect, useRef, useState } from 'react'

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const PENDING_HINT = 'Not added yet: set this in src/data/profile.js'

// Link that renders as a disabled control until a real URL is provided.
export function SafeLink({ href, className = '', children, download, external = true, label }) {
  if (!href) {
    return (
      <span
        className={`${className} is-disabled`}
        aria-disabled="true"
        title={PENDING_HINT}
        aria-label={label ? `${label} (not added yet)` : undefined}
      >
        {children}
      </span>
    )
  }
  const ext = external && /^https?:/.test(href)
  return (
    <a
      className={className}
      href={href}
      download={download}
      aria-label={label}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function SectionHeading({ eyebrow, title, light = false, id }) {
  return (
    <header className={`section-head ${light ? 'on-dark' : ''}`}>
      <p className="script">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </header>
  )
}

// Thin reading-progress bar fixed to the top of the viewport.
export function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      if (ref.current) ref.current.style.width = `${Math.min(100, pct)}%`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div className="progress" aria-hidden="true" ref={ref} />
}

// Fades children in once when they scroll into view.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Returns the id of the section currently nearest the top of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.3
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
