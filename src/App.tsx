import { useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import {
  certifications,
  education,
  experience,
  languages,
  learning,
  profile,
  projects,
  skills,
  stats,
} from './data'

type Theme = 'light' | 'dark'

// The theme lives on <html data-theme>, set before first paint by the inline script in index.html.
const subscribeTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
const getServerTheme = (): Theme => 'light'

const navItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

const filters = ['All', 'Laravel', 'Node.js', 'Individual', 'Team'] as const
type Filter = (typeof filters)[number]

const matchesFilter = (p: (typeof projects)[number], f: Filter) => {
  if (f === 'All') return true
  if (f === 'Laravel') return p.tech.some((t) => t.startsWith('Laravel'))
  if (f === 'Node.js') return p.tech.includes('Node.js')
  if (f === 'Individual') return p.kind === 'Individual'
  return p.kind !== 'Individual'
}

function App() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [filter, setFilter] = useState<Filter>('All')
  const [showTop, setShowTop] = useState(false)

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable, the choice just won't persist
    }
  }

  // Reveal-on-scroll: content stays visible without JS, the "js" class enables the hidden start state.
  useEffect(() => {
    const root = document.documentElement
    const targets = document.querySelectorAll('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('in'))
      return
    }
    root.classList.add('js')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.12 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter((s): s is HTMLElement => !!s)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id)
        }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visibleProjects = projects.filter((p) => matchesFilter(p, filter))

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Home">
            HD<span>.</span>
          </a>
          <nav id="primary-nav" aria-label="Primary" className={menuOpen ? 'open' : ''}>
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="icon-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button
              type="button"
              className="icon-btn menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero container">
          <img
            className="avatar"
            src={`${import.meta.env.BASE_URL}avatar.jpg`}
            alt={profile.name}
            width="160"
            height="160"
            fetchPriority="high"
          />
          <div className="hero-text">
            <p className="eyebrow">{profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="role">
              {profile.title} <span className="muted">| {profile.stack}</span>
            </p>
            <p className="lead">
              I build clean, well-tested REST APIs with Laravel and Node.js, and React interfaces on top of them.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">
                View projects
              </a>
              <a className="btn" href="#contact">
                Get in touch
              </a>
              <a className="btn" href={`${import.meta.env.BASE_URL}Hasan_Dayoub_CV.pdf`} download>
                Download CV
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="container section" data-reveal>
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

        <section id="skills" className="container section" data-reveal>
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
          <h3 className="learning-title">Currently learning</h3>
          <ul className="learning">
            {learning.map((l) => (
              <li key={l.topic}>
                <span className="strong">{l.topic}</span>
                <span className="muted">
                  {l.note} · since {l.since}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="container section" data-reveal>
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((e) => (
              <article key={e.role + e.company} className="timeline-item">
                <div className="row">
                  <h3>
                    {e.role} <span className="muted">· {e.company} · {e.mode}</span>
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

        <section id="projects" className="container section" data-reveal>
          <h2>Selected projects</h2>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter ${filter === f ? 'on' : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid projects">
            {visibleProjects.map((p) => (
              <article className="card project" key={p.name}>
                <div className="row">
                  <h3>{p.name}</h3>
                  <span className="badge">{p.kind}</span>
                </div>
                <p className="muted subtitle">
                  {p.subtitle} · {p.date}
                </p>
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

        <section id="education" className="container section" data-reveal>
          <h2>Education &amp; certifications</h2>
          <div className="grid two">
            <div className="card">
              <h3>Education</h3>
              <p className="strong">{education.degree}</p>
              <p className="muted">
                {education.school} · {education.period}
              </p>
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

        <section id="contact" className="container section contact" data-reveal>
          <h2>Get in touch</h2>
          <p className="summary">{profile.availability} Send me a message or reach me directly.</p>
          <div className="contact-grid">
            <ContactForm />
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
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
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>

      <a href="#top" className={`to-top ${showTop ? 'show' : ''}`} aria-label="Back to top">
        ↑
      </a>
    </>
  )
}

export default App
