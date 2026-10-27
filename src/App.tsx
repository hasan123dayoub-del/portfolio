import { useEffect, useState } from 'react'
import './App.css'
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
  stats,
  volunteering,
} from './data'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable, fall back to system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const navItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            HD<span>.</span>
          </a>
          <nav aria-label="Primary">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">
            {profile.title} <span className="muted">| {profile.stack}</span>
          </p>
          <p className="lead">
            I build clean, well-tested REST APIs with Laravel and Node.js, and I'm growing into full-stack JavaScript.
          </p>
          <div className="actions">
            <a className="btn primary" href="#projects">
              View projects
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="container section">
          <h2>About</h2>
          <p className="summary">{profile.summary}</p>
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="container section">
          <h2>Technical skills</h2>
          <div className="grid skills">
            {skills.map((g) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="container section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((e) => (
              <article key={e.role + e.company} className="timeline-item">
                <div className="row">
                  <h3>
                    {e.role} <span className="muted">· {e.company}</span>
                  </h3>
                  <span className="date">{e.period}</span>
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <h2>Selected projects</h2>
          <div className="grid projects">
            {projects.map((p) => (
              <article className="card project" key={p.name}>
                <div className="row">
                  <h3>{p.name}</h3>
                  <span className="badge">{p.kind}</span>
                </div>
                <p className="muted subtitle">{p.subtitle}</p>
                <ul className="chips small">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <a className="link" href={p.repo} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="container section">
          <h2>Education &amp; certifications</h2>
          <div className="grid two">
            <div className="card">
              <h3>Education</h3>
              <p className="strong">{education.degree}</p>
              <p className="muted">
                {education.school} · {education.period}
              </p>
              <h3 className="gap">Volunteering</h3>
              <p className="strong">
                {volunteering.role} <span className="muted">· {volunteering.period}</span>
              </p>
              <p className="muted">{volunteering.text}</p>
              <h3 className="gap">Languages</h3>
              <ul className="plain">
                {languages.map((l) => (
                  <li key={l.name}>
                    <span className="strong">{l.name}:</span> <span className="muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Certifications</h3>
              <ul className="plain certs">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <div className="row">
                      <span className="strong">{c.name}</span>
                      {c.date && <span className="date">{c.date}</span>}
                    </div>
                    <span className="muted">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="container section contact">
          <h2>Let's work together</h2>
          <p className="summary">Open to junior backend and full-stack opportunities.</p>
          <ul className="contact-list">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  )
}

export default App
