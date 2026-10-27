import { useState } from 'react'
import { Download, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import profile from '../data/profile.js'
import { Reveal, SafeLink } from './common.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // No backend: the form opens the visitor's mail app with the message prefilled.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-info">
            <p className="script">Let's work together</p>
            <h2 id="contact-title">Get in touch</h2>
            <p className="contact-lead">
              I'm open to entry-level software development roles and project collaborations. Send a message
              and I'll get back to you.
            </p>

            <ul className="contact-list">
              <li>
                <span className="dot" aria-hidden="true">
                  <Mail size={16} />
                </span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="dot" aria-hidden="true">
                  <Phone size={16} />
                </span>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <span className="dot" aria-hidden="true">
                  <Github size={16} />
                </span>
                <SafeLink href={profile.github} className="contact-link" label="GitHub">
                  GitHub
                </SafeLink>
              </li>
              <li>
                <span className="dot" aria-hidden="true">
                  <Linkedin size={16} />
                </span>
                <SafeLink href={profile.linkedin} className="contact-link" label="LinkedIn">
                  LinkedIn
                </SafeLink>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required value={form.name} onChange={update} />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update}
              />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required value={form.message} onChange={update} />
            </label>
            <div className="form-actions">
              <button className="btn btn-mustard" type="submit">
                Send message <Send size={17} aria-hidden="true" />
              </button>
              <SafeLink
                href={profile.resume}
                download={profile.resumeFileName}
                external={false}
                className="btn btn-outline-light"
              >
                <Download size={17} aria-hidden="true" /> Resume
              </SafeLink>
            </div>
            <p className="form-hint">This opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
